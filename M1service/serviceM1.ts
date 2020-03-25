import * as express from 'express';
import Database from './lib/Database';
import { unsortedRoute } from './Controllers/routes';
import * as bodyParser from 'body-parser';

class ServerM1 {

    private server: express.Application;

    public constructor() {
        this.server = express();
    }

    run = async (): Promise<void> => {
        const { server } = this;
        try {
            const port = 8080;
            const open = await Database.open('mongodb://localhost:27017/serviceM1');
            console.log(open);
            this.server.listen(port, (err) => {
                if (err) {
                    console.log('Failed to Start Server.');
                }
                console.log('Service M1 Started At port 8080');
            });
            server.use(bodyParser.urlencoded({ extended: true }));
            server.use(bodyParser.json());
            server.use('/unsorted', unsortedRoute);
        } catch (err) {
            console.log('Failed to connect to Database.', err);
        }
    }
}

export default ServerM1;