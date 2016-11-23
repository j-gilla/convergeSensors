const data = require("../../../data.json");

module.exports = (req, res) => {
  const sensorId = req.params.sensorId;
  const sensors = data.filter(function(obj) {
      return obj.sensorId === sensorId;
  });
res.status(200).json({ sensors });
};
