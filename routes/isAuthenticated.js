var isAuthenticated = function (req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    req.user = {
      name: null
    };
    next();
  }
}

module.exports = isAuthenticated;
