import { Router } from 'express';
import UnsortedObjectController from './UnsortedObjectController';

export const unsortedRoute = Router();
const controller = new UnsortedObjectController();
unsortedRoute.post('/create', controller.create);
unsortedRoute.get('/get', controller.get);
unsortedRoute.get('/list', controller.list);