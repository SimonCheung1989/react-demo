import log4js from 'log4js';
import log4jsConfig from './log4js.json';

console.log(`${JSON.stringify(log4jsConfig)}`);
log4js.configure(log4jsConfig);
const appLogger = log4js.getLogger('out');

export default appLogger;
