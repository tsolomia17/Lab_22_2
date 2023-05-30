//Класс Порт
class Port {
    constructor(name) {
        this.name = name;
        this.pierList = [];
    }
}
//Ініціалізація колекцій портів 
let global_port_List = [];
//Функія додавання порту в колекцію
exports.add_Port = (name) => {
    let port = new Port(name);
    global_port_List.push(port);

    return port;
}

//Функція видалення порту з колекції
exports.remove_Port = (port) => {
    for (let i = 0; i < global_port_List.length; i++) {
        let portRem = global_port_List[i];
        if (portRem.name === port.name) {
            global_port_List.splice(i, 1);
            return 1;
        }
    }
    return -1;
}
//Функція редагування порту в колекції
exports.edit_Port = (name, new_Name) => {
    for (let i = 0; i < global_port_List.length; i++) {
        let port = global_port_List[i];
        if (port.name === name) {
            global_port_List[i].name = new_Name;
            return 1;
        }
    }
    return -1;
}

//Функція виводу всіх портів в колекції
exports.get_Port_List = () => {
    console.log("Port list : ");
    for (let i = 0; i < global_port_List.length; i++) {
        let hosp = global_port_List[i];
        console.log(`\tPort name : ${hosp.name}`);
    }
    console.log();
    return global_port_List;
}

//Функція пошуку одного порту в колекції
exports.find_Port = (name) => {
    for (let i = 0; i < global_port_List.length; i++) {
        let port = global_port_List[i];
        if (port.name === name) {
            return port;
        }
    }
    return -1;
}