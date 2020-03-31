import { Router } from 'express';
import Controller from './controller';


const controller = new Controller();
export const routeController = Router();
routeController.post('/create', controller.create);
routeController.get('/sort', controller.sort);
routeController.get('/view', controller.view);
routeController.get('/list', controller.list);
