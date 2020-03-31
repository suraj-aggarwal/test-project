import sortStatsRepo from '../../repository/sortStats/sortStatsRepo';
import { Response, Request } from 'express';
import { performance } from 'perf_hooks';

class SortStatsController {
    private sortStatsRepo = new sortStatsRepo();

    create = async (req: Request, res: Response): Promise<Response> => {
        try {
            const data = req.body;
            const result = await this.sortStatsRepo.create(data);
            return res.send(result);
        } catch (err) {
            return res.send(err);
        }
    }

    get = async (req: Request, res: Response): Promise<Response> => {
        try {
            const { objectId } = req.query;
            const result = await this.sortStatsRepo.get(objectId);
            return res.send(result);

        } catch (err) {
            return res.send(err);
        }

    }
}

export default SortStatsController;