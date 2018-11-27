const env = process.env.NODE_ENV || 'development';

if (env === 'development') {
  process.env.MONGODB_URI = 'mongodb://admin:password5@ds147030.mlab.com:47030/plan-it';
} else if (env === 'test') {
  process.env.MONGODB_URI = 'mongodb://admin:password5@ds147030.mlab.com:47030/plan-it';
} else if (env === 'production') {
  process.env.MONGODB_URI = 'mongodb://admin:password5@ds147030.mlab.com:47030/plan-it';
}