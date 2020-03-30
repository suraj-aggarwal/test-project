import { Request, Response, NextFunction } from 'express';
const notFoundRoutes = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.body);
  const err = new Error('Not Found');
  return next(err);
};

export default notFoundRoutes;