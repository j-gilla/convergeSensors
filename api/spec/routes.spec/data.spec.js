const expect = require("chai").expect;
const express = require("express");
const request = require("supertest");
const server = request.agent("http://localhost:3000");
const app = express();

describe("GET from data.json", function () {
  it("responds with json", function () {
    request(app)
    .get("/")
    .set("Accept", "application/json")
    .expect("Content-Type", /json/)
    .expect(200);
  });

  it("returns all sensors from sensor.json", function (done) {
    server
    .get("/data")
    .expect("Content-type", /json/)
    .expect(200)
    .end(function(err, res) {
    expect(200);
      done();
    });
  });

  it("returns one sensor from sensor.json", function (done) {
    server
    .get("/:sensorName")
    .expect("Content-type", /json/)
    .expect(200)
    .end(function(err, res) {
    expect(200);
      done();
    });
  });
});
