/**
 * @author lamovv
 * @date 2021/04/08 10:57
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
class CleanBeforeHtmlWebpackPlugin {
    /**
     * @param {*} options
     */
    constructor(options) {
        this.options = options;
    }
    apply(compiler) {
        compiler.hooks.compilation.tap('CleanBeforeHtmlWebpackPlugin', compilation => {
            HtmlWebpackPlugin.getHooks(compilation).afterTemplateExecution.tapAsync('CleanBeforeHtmlWebpackPlugin', (data, cb) => {
                try {
                    const { patterns = [] } = this.options;
                    if (patterns.length) {
                        let html = data.html;
                        patterns.forEach(v => {
                            html = html.replace(v.match, v.replacement);
                        });
                        data.html = html;
                    }
                    cb(null, data);
                }
                catch (e) {
                    cb(e, data);
                }
            });
        });
    }
}
module.exports = CleanBeforeHtmlWebpackPlugin;
