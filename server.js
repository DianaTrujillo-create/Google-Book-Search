const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const PORT = process.env.PORT || 3000;
const app = express();
