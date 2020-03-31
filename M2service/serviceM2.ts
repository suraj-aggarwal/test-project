import * as express from 'express';
import * as bodyParser from 'body-parser';
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
        server.use(bodyParser.urlencoded({
            parameterLimit: 100000,
            limit: '50mb',
            extended: true
          }));
        server.use(secondRouter);
    }
}

export default ServerM2;