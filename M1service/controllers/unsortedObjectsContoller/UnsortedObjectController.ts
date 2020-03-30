import UnsortedRepo from '../../repository/unsortedObjects/UnsortedRepo';
import { Response, Request } from 'express';
import { objectGenerator } from '../../lib/utils/helper';
import { performance } from 'perf_hooks';

class UnsortedObjectController {
    private unsortedRepo = new UnsortedRepo();

    create = async (req: Request, res: Response): Promise<Response> => {
        try {
            const sizeof = require('object-sizeof');
            const { rootkeyCount, depth } = req.body;
            const start = performance.now();
            const object = objectGenerator(rootkeyCount, depth);
            const end = performance.now();
            const generationTime = end - start;
            const size: number = sizeof(object);
            parseInt(rootkeyCount, 10);
            parseInt(depth, 10);
            const data = { rootkeyCount, depth, object, size, generationTime };
            const result = await this.unsortedRepo.create(data);
            return res.send(result);
        } catch (err) {
            return res.send(err);
        }
    }

    get = async (req: Request, res: Response) => {
        try {
            const { _id } = req.query;
            const result = await this.unsortedRepo.get(_id);
            if (result) {
                return res.send(result);
            }
            return res.send(result);
        } catch (err) {
            return res.send(err);
        }

    }

    list = async (req: Request, res: Response) => {
        try {
            const result = await this.unsortedRepo.list();
            if (result) {
                return res.send(result);
            }
            return res.send(result);
        } catch (err) {
            return res.send(err);
        }
    }
}

export default UnsortedObjectController;