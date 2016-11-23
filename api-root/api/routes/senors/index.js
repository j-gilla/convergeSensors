const sensor = require("express").Router();
const all = require("./all");
const single = require("./single");

sensor.get("/", all);
sensor.get("/:sensorName", single);

module.exports = sensor;
