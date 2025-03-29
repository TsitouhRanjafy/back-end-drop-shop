import { app } from './interfaces';
import { env } from './interfaces';



app.listen(env.port, () => {
    console.log(` server running on http://localhost:${env.port}`);
})