import { Response, Request } from 'express';
import { selectSort } from '../libs/utils/helper';

class Controller {
    sort = async (req: Request, res: Response) => {
        try {
            const { obj, sortUsing } = req.query;
            const object = JSON.parse(obj);
            const sortedObject = selectSort(object, sortUsing); // take algo as input
            return res.send(sortedObject); // return response time
        } catch (err) {
            return res.send(err);
        }
    }
}

export default Controller;