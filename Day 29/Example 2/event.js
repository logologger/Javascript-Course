var events=require("events");

var eventEmitter = new events.EventEmitter();



var fireInTheBuilding = function(){



	console.log("There is a fire in the building...Please be safe");
};

eventEmitter.on("FireAlarm",fireInTheBuilding);

eventEmitter.emit("FireAlarm"); //called by smoke detector

