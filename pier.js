//Клас Пристань
class Pier {
    constructor(name) {
        this.name = name;
        this.shipList = [];
    }
}
//Ініціалізація колекцій портів 
let global_port_List = [];
//Функція додавання пристані до порту
exports.add_PierToPort = (port_name, pier_name) => {
    for (let i = 0; i < global_port_List.length; i++) {
        let port = global_port_List[i];
        if (port.name === port_name) {
            port.pierList.push(new Pier(pier_name));
            return 1;
        }
    }
    return -1;
}
//Функція видалення пристані із порту
exports.remove_PierFromPort = (port, pier_name) => {
    for (let i = 0; i < global_port_List.length; i++) {
        let portG = global_port_List[i];
        if (portG.name === port.name) {
            for (let j = 0; j < port.pierList.length; j++) {
                let pier = port.pierList[j];
                if (pier.name === pier_name) {
                    portG.pierList.splice(j, 1);
                    return 1;
                }
            }
        }
    }
    return -1;
}
//Функція виводу пристаней в порті
exports.show_PiersInPort = (port) => {
    console.log("Pier list : ");
    for (let i = 0; i < port.pierList.length; i++) {
        let hosp = port.pierList[i];
        console.log(`\tPier name : ${hosp.name}`);
    }
    console.log();
    return port.pierList;
}