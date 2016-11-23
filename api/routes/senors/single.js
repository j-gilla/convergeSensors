const sensors = require("../../../sensors.json");
// console.log(sensors.name);
module.exports = (req, res) => {

  const sensorName = req.params.id;
  const whichSensor = sensors.filter(function(obj) {
      return obj.id === sensorName;
  });
res.status(200).json({ whichSensor });
};
