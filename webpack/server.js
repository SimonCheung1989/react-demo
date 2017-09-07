import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import config from './config';

const compiler = webpack(config);
const server = new WebpackDevServer(compiler, {});
server.listen(process.env.SERVER_PORT);