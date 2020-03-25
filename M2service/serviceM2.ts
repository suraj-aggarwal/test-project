import * as express from 'express';
import { sortObject } from './libs/utils/helper';
import { secondRouter } from './Controllers/routes';
class ServerM2 {

    private server: express.Application;
    public constructor() {
        this.server = express();
    }

    run = (): void => {
        const port = 9000;
        const { server } = this;
        this.server.listen(port, (err) => {
            if (err) {
                console.log('Failed to Start Server.');
            }
            console.log('Service M2 Started At port 9000');
        });
        const obj = {
            'liyksjz1vhu75mdywlqn': 'asd',
            'vzy6p7ll5hkbx7hm4gxc': {
                'hqlq9m1c8vnbnbdp09ma': false,
                'rj3vxhb3vtjcb8zgihbb': {
                    'p93wf9ha9hz21131yvy5': 23,
                    'coztpp2szybnla5oithm': false
                },
                '8501hr8lmj08no4e0pjd': {
                    'n3ojjsnh8xz0wvg8xznq': [],
                    'xdavwkj9b9sk3xbugd93': false
                },
                'fb6nild5l1s92hb5w93k': false,
                'sbpk1nj5syggp1lnkjft': 'asd'
            },
            'yf1pwvhhjktwmu8elpif': false,
            'vg9wl22k0m274pjgd6jo': false,
            '3xq793ya6mzqw7ev9mb5': 23,
            'nu3fr71atd4jzx1kcvm3': 'asd',
            'yzza9n422zuhunu4ccym': {
                'lkt6tjjcma9ah6r4i8yc': 23,
                'se3ukrwdfwvy98yzb100': {
                    'iqg4ee04q46xyjg5lzvj': 23,
                    'x8u5ufobr23dh4xfe7md': 23
                },
                'l97afylfusocqm5j35s7': false,
                'zt651k5usrgmbfz25zmh': [],
                'ohoqgxv3kkwh8hwfpjnb': []
            },
            '19jnt8q7pnwq2t96vg90': [],
            'x7nwhxsjqh2megfj8ogn': 'asd',
            'wrhzuycrb6b6xp3sjmfd': []
        };
        server.use(secondRouter);
        sortObject(obj);
    }
}

export default ServerM2;