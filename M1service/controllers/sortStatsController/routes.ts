import { Router } from 'express';
import sortStatsController from './sortStatsController';

export const sortStatsRoute = Router();
const controller = new sortStatsController();
sortStatsRoute.post('/create', controller.create);
sortStatsRoute.get('/get', controller.get);
