import {  Server } from 'socket.io';
import { Application } from 'express';
import { createServer } from 'node:http';
import { app } from './setup-app.config';


export const socketConfig = (
    app: Application
): {io: Server; httpServer: import('http').Server } => {
    const httpServer = createServer(app);

    const io = new Server(httpServer, {
        cors: {
            origin: '*',
            methods: '*',
            credentials: true
        }
    })

    io.on("connection", (socket) => {
        console.log("nouvelle client socket connected: "+ socket.id);

        socket.on("disconnect", () => {
            console.log("client disconnected: "+socket.id);
        })
    })

    return { io, httpServer };
}