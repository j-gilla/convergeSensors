const sensors = require("../../../sensors.json");

module.exports = (req, res) => {
 res.status(200).json({ sensors });
};
