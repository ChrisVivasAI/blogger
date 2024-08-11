export function errorHandler(error, req, res, next) {
    console.error(error.stack);
  
    res.status(error.statusCode || 500).json({
      error: {
        message: error.message,
        ...(process.env.NODE_ENV === 'development' && { stack: error.stack })
      }
    });
  }