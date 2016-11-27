const axios = require("axios");


function getAllData() {
axios.get("http://localhost:4000/data")
.then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
  });
}

function getNamedSenor() {
axios.get("http://localhost:4000/sensor")
.then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
  });
}

function getSensorParams() {
axios.get("http://localhost:4000/sensor/:sensorId")
.then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
  });
}

getSensorParams();
module.exports = {
  getAllData:getAllData,
  getNamedSenor: getNamedSenor,
  getSensorParams:getSensorParams,
};
