const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const {ElementPlusResolver} = require('unplugin-vue-components/resolvers')

mix.webpackConfig({
    plugins: [
        AutoImport({
            resolvers: [ElementPlusResolver({
                exclude: new RegExp(/^(?!.*loading-directive).*$/)
            })],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        }),
    ]
});
