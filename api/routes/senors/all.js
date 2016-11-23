const sensors = require("../../../sensors.json");

module.exports = (req, res) => {

console.log(res)
 res.status(200).json({ sensors });
};
