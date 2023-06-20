const notFoundHandler = (req, res, next) => {
  return res.status(404).json({ message: "Page Not Found" });
};

module.exports = notFoundHandler;
