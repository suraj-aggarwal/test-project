import UnsortedRepo from '../repository/unsortedObjects/UnsortedRepo';
import { Response, Request } from 'express';
import { objectGenerator } from '../lib/utils/helper';

class UnsortedObjectController {
    private unsortedRepo = new UnsortedRepo();

    create = async (req: Request, res: Response): Promise<Response> => {
        try {
            console.log('-----------inseide create', req.body);
            const sizeof = require('object-sizeof');
            const { rootkeyCount, depth } = req.body;
            const object = objectGenerator(rootkeyCount, depth);
            const size: number = sizeof(object);
            parseInt(rootkeyCount, 10);
            parseInt(depth, 10);
            const data = { rootkeyCount, depth, object, size };
            const result = await this.unsortedRepo.create(data);
            return res.send(result);
        } catch (err) {
            return res.send(err);
        }
    }

    sort = async (req: Request, res: Request) => {
        const { _id, algorithm } = req.query;
        
    }
}

export default UnsortedObjectController;