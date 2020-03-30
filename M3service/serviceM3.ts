import * as express from 'express';
import notFoundRoutes from './libs/routes/notFoundRoutes';
import errorHandler from './libs/routes/errorHandler';
import { routeController } from './Controllers/routes';
import * as bodyParser from 'body-parser';
import * as cros from 'cors';

class ServerM3 {

    private server: express.Application;

    public constructor() {
        this.server = express();
    }

    run = () => {
        try {
            const { server } = this;
            const port = 5000;
            this.server.listen(port, (err) => {
                if (err) {
                    console.log('Failed to Start Server.');
                }
                console.log('Service M3 Started At port 5000');
            });
            server.use(cros());
            server.use(bodyParser.urlencoded({ extended: true }));
            server.use(bodyParser.json());
            server.use(routeController);
            server.use(errorHandler);
            server.use(notFoundRoutes);
        } catch (err) {
            console.log(err);
        }
    }
}

export default ServerM3;