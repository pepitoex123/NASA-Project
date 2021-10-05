const {getAllHabitablePlanets} = require("./../../models/planets.model");



function httpGetAllPlanets(req,res) {
    return res.status(200).json(getAllHabitablePlanets);
}


module.exports = {
    httpGetAllPlanets
}