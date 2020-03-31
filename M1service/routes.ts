import { unsortedRoute } from './controllers/unsortedObjectsContoller/routes';
import { sortStatsRoute } from './controllers/sortStatsController/routes';
import { Router } from 'express';

export const backendRouter = Router();
backendRouter.use('/unsorted', unsortedRoute);
backendRouter.use('/sortStats', sortStatsRoute);