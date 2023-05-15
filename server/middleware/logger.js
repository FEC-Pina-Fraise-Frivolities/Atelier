module.exports = function logger(req, res, next) {
  console.log(`Server received ${req.method} ${req.url}`);
  next();
};
