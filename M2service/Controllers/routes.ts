import { Router } from 'express';
import Controller from './controller';

export const secondRouter = Router();
const controller = new Controller();
secondRouter.get('/sort', controller.sort);
