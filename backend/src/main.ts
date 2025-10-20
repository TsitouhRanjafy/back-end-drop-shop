import env from "./configuration/env.config";
import { app } from "./configuration/setup-app.config";

app.listen(env.port, () => {
    console.log(` \n server running on http://localhost:${env.port}`);
})

