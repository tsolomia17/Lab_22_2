
//Ініціалізація колекцій кораблів
let global_ship_List = [];
//Клас Корабель
class Ship {
    constructor(name) {
        this.name = name;
        this.arriveTime = "";
        this.leaveTime = "";
    }
}

// Функція додавання корабля на пристань
exports.add_ShipToPier = (ship, pier) => {
    if (pier.shipList.length < 2) {
        pier.shipList.push(ship);
        ship.arriveTime = get_Date();
        return 1;
    } else {
        console.log("Pier is full");
        return -1;
    }
};

//Фугкція видалення корабля із пристані
exports.remove_ShipFromPier = (ship, pier) => {
    for (let i = 0; i < pier.shipList.length; i++) {
        let shipAdd = pier.shipList[i];
        if (shipAdd.name === ship.name) {
            pier.shipList.splice(i, 1);
            for (let j = 0; j < global_ship_List.length; j++) {
                let removeShip = global_ship_List[j];
                if (removeShip.name === ship.name) {
                    removeShip.leaveTime = get_Date();
                }
            }
            return 1;
        }
    }
}

//Функція додавання корабля в колекцію
exports.add_Ship = (name) => {
    let ship = new Ship(name);
    global_ship_List.push(ship);

    return ship;
}

//Функція видалення корабля із колекції
exports.remove_Ship = (name) => {
    for (let i = 0; i < global_ship_List.length; i++) {
        let ship = global_ship_List[i];
        if (ship.name === name) {
            global_ship_List.splice(i, 1);
            return 1;
        }
    }
    return -1;
}

//Функція редагування корабля в колекції
exports.edit_Ship = (name, new_Name) => {
    for (let i = 0; i < global_ship_List.length; i++) {
        let ship = global_ship_List[i];
        if (ship.name === name) {
            global_ship_List[i].name = new_Name;
            return 1;
        }
    }
    return -1;
}

//Функція виводу всіх кораблів колекції
exports.get_Ship_List = () => {
    console.log("\nShip list : ");
    for (let i = 0; i < global_ship_List.length; i++) {
        let ship = global_ship_List[i];
        console.log(`\tShip name : ${ship.name}`);
    }
    console.log();
    return global_ship_List;
}

//Функція пошуку одного корабля в колекції
exports.find_Ship = (name) => {
    for (let i = 0; i < global_ship_List.length; i++) {
        let ship = global_ship_List[i];
        if (ship.name === name) {
            return ship;
        }
    }
    return -1;
}

//Функція пошуку усіх кораблів на пристані
exports.find_ShipsOnPier = (port_name, pier_name) => {
    for (let i = 0; i < global_port_List.length; i++) {
        let port = global_port_List[i];
        if (port.name === port_name) {
            for (let j = 0; j < port.pierList.length; j++) {
                let pier = port.pierList[j];
                if (pier.name === pier_name) {
                    console.log(`\nShips on pier : ${pier.name}`);
                    for (let k = 0; k < pier.shipList.length; k++) {
                        let ship = pier.shipList[k];
                        console.log(`\tShip name : ${ship.name}`);
                    }
                    console.log();
                    return pier.shipList;
                }
            }
        }
    }
    return -1;
}

//Функція виводу кораблів на пристані
exports.show_ShipsOnPier = (pier) => {
    console.log(`\nShips on ${pier.name} : `);
    for (let i = 0; i < pier.shipList.length; i++) {
        let ship = pier.shipList[i];
        console.log(`\tShip name : ${ship.name}`);
    }
    console.log();
    return pier.shipList;
}

//Функція повернення дати і часу
exports.get_Date = () => {
    let today = new Date();
    return today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate() + "-" +today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
}