const express = require("express");
const app = express();
const {globalErrHandler, notFoundErr} = require("../middleware/globalErrHandler");


app.use(notFoundErr);
app.use(globalErrHandler);

module.exports = app;