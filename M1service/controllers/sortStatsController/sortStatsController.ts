import sortStatsRepo from '../../repository/sortStats/sortStatsRepo';
import { Response, Request } from 'express';
import { performance } from 'perf_hooks';

class SortStatsController {
    private sortStatsRepo = new sortStatsRepo();

    create = async (req: Request, res: Response): Promise<Response> => {
        try {
            console.log('-----------inseide create', req.body);
            const data = req.body;
            const result = await this.sortStatsRepo.create(data);
            console.log('--------sort stats', result);
            return res.send(result);
        } catch (err) {
            return res.send(err);
        }
    }

    get = async (req: Request, res: Response) => {
        try {
            const { _id } = req.query;
            const result = await this.sortStatsRepo.get(_id);
            return res.send(result);

        } catch (err) {
            return res.send(err);
        }

    }
}

export default SortStatsController;