import fs from 'fs';
import webpack from 'webpack';
import config from './config';
import appLogger from '../log4js/appLogger';

appLogger.error(`----------start compile------------`);
const compiler = webpack(config);
compiler.run((error, status) => {
    if (error) {
        appLogger.error(`----------build error------------`);
    }
});

appLogger.info(`----------end compile------------`);