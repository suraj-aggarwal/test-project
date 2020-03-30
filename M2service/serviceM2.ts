import * as express from 'express';
import { secondRouter } from './Controllers/routes';
class ServerM2 {

    private server: express.Application;
    public constructor() {
        this.server = express();
    }

    run = (): void => {
        const port = 9000;
        const { server } = this;
        this.server.listen(port, (err) => {
            if (err) {
                console.log('Failed to Start Server.');
            }
            console.log('Service M2 Started At port 9000');
        });
        server.use(secondRouter);
    }
}

export default ServerM2;