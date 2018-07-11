/**
 * Created by lj on 18/7/3.
 */
var webpack = require('webpack')

//增加全局依赖
var plugins = [
    new webpack.optimize.CommonsChunkPlugin('common.js'),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      'Config': '@/common/ConfigHelper.js',
      'Normal': '@/common/NormalHelper.js',
      'Ajax': '@/common/AjaxHelper.js',
      'Pop': '@/common/PopHelper.js',
    })
];

module.exports = {
    plugins: plugins
}
