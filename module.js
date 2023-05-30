const port = require("./port");
const pier   = require("./pier");
const ship  = require("./ship");

//Доступні операції з портами
exports.add_Port = port.add_Port;
exports.remove_Port = port.remove_Port;
exports.edit_Port = port.edit_Port;
exports.get_Port_List = port.get_Port_List;
exports.find_Port = port.find_Port;

//Доступні операції з пристаннями
exports.add_PierToPort = pier.add_PierToPort;
exports.remove_PierFromPort = pier.remove_PierFromPort;
exports.show_PiersInPort = pier.show_PiersInPort;

//Доступні операції з кораблями
exports.add_ShipToPier = ship.add_ShipToPier;
exports.remove_ShipFromPier = ship.remove_ShipFromPier;
exports.add_Ship = ship.add_Ship;
exports.remove_Ship = ship.remove_Ship;
exports.edit_Ship = ship.edit_Ship;
exports.edit_Ship = ship.edit_Ship;
exports.get_Ship_List = ship.get_Ship_List;
exports.find_Ship = ship.find_Ship;
exports.find_ShipsOnPier = ship.find_ShipsOnPier;
exports.show_ShipsOnPier = ship.show_ShipsOnPier;
exports.get_Date = ship.get_Date;