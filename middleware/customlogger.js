

    module.exports = function (options) {
      return function (req, res, next) {
        // Implement the middleware function based on the options object
        console.log("Options",options);
        console.log(`Logged  ${req.url}  ${req.method} -- ${new Date()}`)
        console.log('LOGGED in custom middleware')
        req.requestTime = new Date();
        next()
      }
    }