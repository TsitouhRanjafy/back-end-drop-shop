import { createServer } from 'node:http'
import { app } from './interfaces';
import { env } from './interfaces';
import { Request, Response } from 'express';

const server = createServer(app);

server.listen(env.port, () => {
    console.log(` server running on http://localhost:${env.port}`);
})