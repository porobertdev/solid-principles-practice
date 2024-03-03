import common from './webpack.common.js';
import { merge } from 'webpack-merge';

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map'
});