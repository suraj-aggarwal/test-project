import ServerM1 from   './M1service/serviceM1';
import ServerM2 from './M2service/serviceM2';
import ServerM3 from './M3service/serviceM3';

const m1 = new ServerM1();
const m2 = new ServerM2();
const m3 = new ServerM3();

m1.run();
m2.run();
m3.run();