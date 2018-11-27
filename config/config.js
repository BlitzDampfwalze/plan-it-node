const env = process.env.NODE_ENV || 'development';

if (env === 'development') {
  process.env.MONGODB_URI = 'mongodb://PaulL:pie4paul@ds257752.mlab.com:57752/recipe-vault';
} else if (env === 'test') {
  process.env.MONGODB_URI = 'mongodb://PaulL:pie4paul@ds131323.mlab.com:31323/recipe-vault-test';
} else if (env === 'production') {
  process.env.MONGODB_URI = 'mongodb://PaulL:pie4paul@ds257752.mlab.com:57752/recipe-vault';
}