import { Response, Request } from 'express';

class Controller {
    sort = async (req: Request, res: Request) => {
        const { _id, algorithm } = req.query;
    }
}

export default Controller;