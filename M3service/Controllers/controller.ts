import { Response, Request } from 'express';
import axios from 'axios';

class Controller {

    create = async (req: Request, res: Response): Promise<Response> => {
        try {
            const { rootkeyCount, depth } = req.body;
            const result = await axios({
                method: 'post',
                url: 'http://localhost:8080/unsorted/create',
                data: {
                    rootkeyCount,
                    depth
                }
            });
            return res.send(result.data);
        } catch (err) {
            return res.send(err);
        }
    }

    sort = async (req: Request, res: Response): Promise<Response> => {
        try {
            const { _id, algorithm } = req.body;
            const result = await axios({
                method: 'get',
                url: 'http://localhost:9000/unsorted/sort',
                data: {
                    _id,
                    algorithm
                }
            });
            return res.send(result.data);
        } catch (err) {
            return res.send(err);
        }
    }
}

export default Controller;