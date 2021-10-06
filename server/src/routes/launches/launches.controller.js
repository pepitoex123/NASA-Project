const launchesModel = require("../../models/launches.model");


function httpGetAllLaunches(req, res) {
    return res.status(200).json(launchesModel.getAllLaunches());
}

function httpAddNewLaunch(req,res){
    const launch = req.body;
    if(!launch.mission || !launch.rocket || !launch.launchDate || !launch.target){
        return res.status(400).json({
            error: "Missing required launch properties"
        })
    }

    launch["launchDate"] = new Date(launch["launchDate"])
    if(launch.launchDate.toString() === "Invalid Date"){
        return res.status(400).json({
            error: "Invalid Launch Date"
        })
    }
    launchesModel.addNewLaunch(launch)
    return res.status(201).json(launch)
}


module.exports = {
    httpGetAllLaunches,
    httpAddNewLaunch
}