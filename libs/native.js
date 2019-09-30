import { promisifyAll } from 'miniprogram-api-promise';

const native = {};
promisifyAll(wx, native)

export default native;