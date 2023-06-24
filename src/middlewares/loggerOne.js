const loggerOne = (request, response, next) => {
  console.log("Log");
  next();
};

module.exports = loggerOne;
