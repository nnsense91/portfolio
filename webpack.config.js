Skip to content
 
Search or jump to…

Pull requests
Issues
Marketplace
Explore
 
@nnsense91 
Learn Git and GitHub without any code!
Using the Hello World guide, you’ll start a branch, write comments, and open a pull request.

 
1
0 0 Obzhigalov/advanced
 Code  Issues 0  Pull requests 0  Projects 0  Wiki  Security  Insights
advanced/webpack.config.js
@Obzhigalov Obzhigalov BuildAdmin
dc6cae0 14 days ago
186 lines (172 sloc)  4.05 KB
    
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const SpriteLoaderPlugin = require("svg-sprite-loader/plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = (env, argv) => {
  const isProductionBuild = argv.mode === "production";
  const publicPath = './';

  const pcss = {
    test: /\.(p|post|)css$/,
    use: [
      isProductionBuild ? MiniCssExtractPlugin.loader : "vue-style-loader",
      "css-loader",
      "postcss-loader"
    ]
  };

  const vue = {
    test: /\.vue$/,
    loader: "vue-loader"
  };

  const js = {
    test: /\.js$/,
    loader: "babel-loader",
    exclude: /node_modules/,
    options: {
      plugins: ["@babel/plugin-syntax-dynamic-import"]
    }
  };

  const files = {
    test: /\.(png|jpe?g|gif|woff2?)$/i,
    loader: "file-loader",
    options: {
      name: "[hash].[ext]"
    }
  };

  const svg = {
    test: /\.svg$/,
    use: [
      {
        loader: "svg-sprite-loader",
        options: {
          extract: true,
          spriteFilename: svgPath => `sprite${svgPath.substr(-4)}`
        }
      },
      "svg-transform-loader",
      {
        loader: "svgo-loader",
        options: {
          plugins: [
            { removeTitle: true },
            {
              removeAttrs: {
                attrs: "(fill|stroke)"
              }
            }
          ]
        }
      }
    ]
  };

  const pug = {
    test: /\.pug$/,
    oneOf: [
      {
        resourceQuery: /^\?vue/,
        use: ["pug-plain-loader"]
      },
      {
        use: ["pug-loader"]
      }
    ]
  };

  const config = {
    module: {
      rules: [pcss, vue, js, files, svg, pug]
    },
    resolve: {
      alias: {
        vue$: "vue/dist/vue.esm.js",
        images: path.resolve(__dirname, "src/images")
      },
      extensions: ["*", ".js", ".vue", ".json"]
    },
    devServer: {
      historyApiFallback: true,
      noInfo: false,
      overlay: true
    },
    performance: {
      hints: false
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "src/index.pug",
        chunks: ["main"]
      }),
      new HtmlWebpackPlugin({
        template: "src/admin/index.pug",
        filename: "admin/index.html",
        chunks: ["admin"]
      }),
      new SpriteLoaderPlugin({ plainSprite: true }),
      new VueLoaderPlugin()
    ],
    devtool: "#eval-source-map"
  };

  if (isProductionBuild) {
    config.devtool = "none";
    config.plugins = (config.plugins || []).concat([
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: '"production"'
        }
      }),
      new MiniCssExtractPlugin({
        filename: "[name].[contenthash].css",
        chunkFilename: "[contenthash].css"
      })
    ]);

    config.optimization = {};

    config.optimization.minimizer = [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: false
      }),
      new OptimizeCSSAssetsPlugin({})
    ];
  }
  
  const mainConfig = {
    ...config,
    entry: {
      main: "./src/main.js",
    },
    output: {
      path: path.resolve(__dirname, "./dist"),
      filename: "[name].[hash].build.js",
      publicPath: isProductionBuild ? publicPath : "",
      chunkFilename: "[chunkhash].js"
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "src/index.pug"
      }),
      ...config.plugins
    ]
  };

  const adminConfig = {
    ...config,
    name: "admin-config",
    entry: {
      admin: "./src/admin/main.js"
    },
    output: {
      path: path.resolve(__dirname, "./dist/admin"),
      filename: "[name].[hash].build.js",
      publicPath: isProductionBuild ? publicPath : "",
      chunkFilename: "[chunkhash].js"
    },
    plugins: [
      ...config.plugins,
      new HtmlWebpackPlugin({
        template: "src/admin/index.pug"
      })
    ]
  };
  
   return [mainConfig, adminConfig];
};
© 2019 GitHub, Inc.
Terms
Privacy
Security
Status
Help
Contact GitHub
Pricing
API
Training
Blog
About
