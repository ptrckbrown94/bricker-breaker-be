module.exports = {
  mongoURI: process.env.MONGODB_URI || "mongodb://localhost/brickbreaker",
  secretOrKey: "secret"
};

console.log("################# >>>>>>>>>>", process.env.MONGODB_URI)
