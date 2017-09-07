import appLogger from '../../log4js/appLogger';

function AddHeaderPlugin(options) {
    appLogger.debug(`AddHeaderPlugin(${JSON.stringify(options)})`);
}

AddHeaderPlugin.prototype.apply = function(compiler) {
    // console.log(`${JSON.stringify(compiler)}`);

    compiler.plugin('run', (params, callback) => {
        // console.log(`run`);
        // c();
        callback();
    });

    compiler.plugin('compilation', (compilation, params) => {
        // console.log(`compilation(${JSON.stringify(compilation)}, ${JSON.stringify(params)})`);
        appLogger.debug(`compilation`);
    });

    // compiler.plugin('compile', (params) => {
    //     console.log(`compile(${JSON.stringify(params)})`);
    // });

    compiler.plugin('emit', (compilation, callback) => {
        for(const chunk in compilation.chunks) {
            appLogger.debug(`chunk=${JSON.stringify(chunk)}`);
        }

        // Create a header string for the generated file:
        let filelist = 'In this build:\n\n';
    
        // Loop through all compiled assets,
        // adding a new line item for each filename.
        for (const filename in compilation.assets) {
          filelist += (`- ${filename}\n`);
        }
    
        // Insert this list into the Webpack build as a new file asset:
        compilation.assets['filelist.md'] = {
          source: function() {
            return filelist;
          },
          size: function() {
            return filelist.length;
          }
        };
    
        callback();        
    });

    compiler.plugin('done', () => {
        appLogger.debug(`AddHeaderPlugin.done`);
    });
}

module.exports = AddHeaderPlugin;