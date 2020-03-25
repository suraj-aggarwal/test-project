import { Router } from 'express';
import UnsortedObjectController from './UnsortedObjectController';

export const unsortedRoute = Router();
const controller = new UnsortedObjectController();
unsortedRoute.post('/create', controller.create);
