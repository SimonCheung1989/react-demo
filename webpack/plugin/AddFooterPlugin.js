function AddFooterPlugin(options) {
    console.log(`AddFooterPlugin(${JSON.stringify(options)})`);
}

AddFooterPlugin.prototype.apply = function(compiler) {
    compiler.plugin('done', () => {
        console.log(`AddFooterPlugin.done`);
    });
}

module.exports = AddFooterPlugin;