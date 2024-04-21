const path = require('path');
const nodeExternals = require('webpack-node-externals');

const clientConfig = {
  // when in production it will be 'production',else 'development'
  mode: process.env.NODE_ENV || 'development',
  // our bundled and complied React code (Builded code)  
  entry: './src/client/index.tsx',
  // help in detecting where an error occurred
  devtool: 'inline-source-map',
  // tells webpack how to resolve files and modules, also rules for loaders  
  module: {
    // set of rules that tells the client configuration to follow when dealing with certain types of files
    rules: [
      {
        // for .ts or .tsx files use the loader bellow
        test: /\.tsx?$/,
        // loader for the file extensions above, aka compiling those files
        loader: 'ts-loader',
        // not including the node_modules folder
        exclude: /node_modules/,
        options: {
          // the entry point 
          context: path.resolve(__dirname, './src/client'),
          // the specific config file for client folder
          configFile: 'tsconfig.json'
        }
      }
    ]
  },
  // what extensions to resolve
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  // where to output the compiled and bundled files
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'public/js')
  }
};

const serverConfig = {
  // when in production it will be 'production',else 'development'
  mode: process.env.NODE_ENV || 'development',
  // our bundled and complied React code (Builded code)  
  entry: './src/server/server.ts',
  module: {
    // set of rules that tells the sever configuration to follow when dealing with certain types of files
    rules: [
      {
        // for .ts or .tsx files use the loader bellow
        test: /\.ts?$/,
        // loader for the file extensions above, aka compiling those files
        loader: 'ts-loader',
        // not including the node_modules folder
        exclude: /node_modules/,
        options: {
          // the entry point 
          context: path.resolve(__dirname, './src/server'),
          // the specific config file for server folder
          configFile: 'tsconfig.json'
        }
      }
    ]
  },
  // what extensions to resolve
  resolve: {
    extensions: ['.ts', '.js']
  },
  // where to output the compiled and bundled files
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'dist')
  },
  // telling webpack that its dealing with node code in this config
  // specific for server files
  target: 'node',
  node: {
    __dirname: false
  },
  // tells webpack that we will use node externals, i.e fs, path and etc...
  // also tells webpack to NOT bundle the 'node_modules' externals.
  externals: [nodeExternals()]
};

module.exports = [serverConfig, clientConfig];