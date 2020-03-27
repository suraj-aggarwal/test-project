import { Response, Request } from 'express';
import axios from 'axios';
import { performance } from 'perf_hooks';

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
            const { _id, sortUsing } = req.query;
            let duration = 0.0;
            console.log('::::::::::::Sort::::::::::::', _id, sortUsing);
            const fetch = await axios({
                method: 'get',
                url: 'http://localhost:8080/unsorted/get',
                params: {
                    _id,
                }
            });
            const { object } = fetch.data;
            console.log('before sort--------', object);
            if (object) {
                console.log('::::::::::::::M2 CALL TO SORT ::::::::::::::');
                const start = performance.now();
                const sortedObject = await axios({
                    method: 'get',
                    url: 'http://localhost:9000/sort',
                    params: {
                        obj: object,
                        sortUsing,
                    }
                });
                const end = performance.now();
                duration = end - start;
                console.log('--------sorted Object', sortedObject.data);

                const sortStats = await axios({
                    method: 'post',
                    url: 'http://localhost:8080/sortStats/create',
                    data: {
                        sortDuration: duration,
                        sortAlgorithm: sortUsing,
                        objectId: _id,
                    }
                });
                return res.send(sortStats.data);
            }
            return res.send({});
        } catch (err) {
            return res.send(err);
        }
    }
}

export default Controller;