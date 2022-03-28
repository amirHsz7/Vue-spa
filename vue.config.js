// module.exports = {
//   publicPath: '/project name/'
// }
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/Vue-spa/" : "/",
};
