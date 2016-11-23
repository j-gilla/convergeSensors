const expect = require("chai").expect;
const express = require("express");
const request = require("supertest");
const server = request.agent("http://localhost:3000");
const app = express();

describe("GET from sensors.json", function () {
  it("responds with json", function () {
    request(app)
    .get("/")
    .set("Accept", "application/json")
    .expect("Content-Type", /json/)
    .expect(200);
  });

  it("returns all sensors from data.json", function (done) {
    server
    .get("/")
    .expect("Content-type", /json/)
    .expect(200)
    .end(function(err, res) {
    expect(200);
      done();
    });
  });

  it("returns one sensors from data.json", function (done) {
    server
    .get("/sensors/:sensorId")
    .expect("Content-type", /json/)
    .expect(200)
    .end(function(err, res) {
    expect(200);
      done();
    });
  });

});
