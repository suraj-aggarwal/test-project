import { Response, Request } from 'express';
import axios from 'axios';
import { sortObject } from '../libs/utils/helper';
import { json } from 'body-parser';

class Controller {
    sort = async (req: Request, res: Response) => {
        try {
            const { obj, sortUsing } = req.query;
            const object =  JSON.parse(obj);
            const sortedObject = sortObject(object); // take algo as input
            return res.send(sortedObject); // return response time
        } catch (err) {
            return res.send(err);
        }
    }
}

export default Controller;