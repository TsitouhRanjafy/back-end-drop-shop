import { app } from './interfaces';
import { env } from './interfaces';
import endpoints from './interfaces/config/endpoints';


app.listen(env().port, () => {
    console.log(` \n server running on http://localhost:${env().port}\n`);
    console.log(` documentation on http://localhost:${env().port}${endpoints.docs}\n`);  
})
