import env from "./configuration/env.config";
import { app } from "./configuration/setup-app.config";

// Récupérer le httpServer attaché dans socket.config.ts
const httpServer = app.get('httpServer'); 
httpServer.listen(env.port, () => {
    console.log(` \nServer running on http://localhost:${env.port}`);
})

