const HtmlWebPack= require('html-webpack-plugin');
const MiniCssExtract = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports={
    mode:'development',

    output: {
        clean: true
    }, // esto sirve para que cada vez que se ejecute
    //... npm run build, todo se borre y vuelva a crearse.
    // ... Esto a fin de sobreescribir documentos.
    
    module:{
        rules:[
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    sources: false
                }
            },
            {
                test: /\.css$/,
                exclude: /styles\.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /styles\.css$/,
                use: [MiniCssExtract.loader,'css-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader:'file-loader',
                options:{
                    name: '[name].[ext]'
                }
            }
        ]
    },

    optimization:{},

    plugins:[
        new HtmlWebPack({
            title: 'Mi Webpack App',
            //filename: 'index.html',
            template:'./src/index.html'
        }),

        new MiniCssExtract({
            filename: '[name].css',
            ignoreOrder: false
        }),

        new CopyPlugin({
            patterns:[
                {from: 'src/assets/',to:'assets/'}
        ]})
    ],
}
//estas suelen ser las 4 opciones más comunes.
// no siempre se va a tener optimizaciones.