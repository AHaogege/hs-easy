const path=require('path'); //调用node.js中的路径
module.exports={
    entry:{
        index:'./src/main.js' //需要打包的文件
    },
    output:{
        filename:'index.js',    //输入的文件名是什么，生成的文件名也是什么
        library:'hs-easy',
        libraryTarget:'umd',
        umdNamedDefine:true,
        path:path.resolve(__dirname,'./dist') //指定生成的文件目录
    },
    module:{
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }

        ]
    }
}