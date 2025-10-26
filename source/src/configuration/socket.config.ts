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

    return { io, httpServer };
}