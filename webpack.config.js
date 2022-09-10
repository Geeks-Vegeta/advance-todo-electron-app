module.exports = {
    resolve: {
      fallback: { 
        "url": require.resolve("url/") ,
        "fs": false,
        "crypto": require.resolve("crypto-browserify")    }
    }
  };