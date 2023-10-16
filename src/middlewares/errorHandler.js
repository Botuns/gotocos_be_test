// not found
/**
 * The `notFound` function is a middleware that handles requests for routes that are not found and
 * returns a 400 status code with an error message.
 * @param req - The `req` parameter is an object that represents the HTTP request made by the client.
 * It contains information such as the request method, request URL, request headers, request body, and
 * other relevant data.
 * @param res - The `res` parameter is the response object in Express.js. It represents the HTTP
 * response that will be sent back to the client. It is used to set the status code of the response
 * using the `status()` method. In this case, the status code 400 (Bad Request) is being
 * @param next - The `next` parameter is a function that is used to pass control to the next middleware
 * function in the request-response cycle. It is typically used to invoke the next middleware function
 * in the chain. In this case, it is used to pass the error to the next middleware function.
 */
const notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(400);
    next(error);
};
// error handler
/**
 * The errorHandler function is a middleware that handles errors by setting the appropriate status code
 * and returning a JSON response with the error message and stack trace.
 * @param err - The `err` parameter is the error object that was thrown or passed to the middleware. It
 * contains information about the error, such as the error message and stack trace.
 * @param req - The `req` parameter represents the HTTP request object. It contains information about
 * the incoming request, such as the request headers, request method, request URL, request body, etc.
 * @param res - The `res` parameter is the response object in Express.js. It represents the HTTP
 * response that will be sent back to the client.
 * @param next - The `next` parameter is a function that is used to pass control to the next middleware
 * function in the request-response cycle. It is typically used when an error occurs and you want to
 * pass the error to the next error-handling middleware function.
 */
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    // set status code
    res.status(statusCode);
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack,
    });
};
module.exports={notFound,errorHandler}