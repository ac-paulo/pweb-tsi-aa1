import {Client} from './model/client';
import {Clients} from './model/clients';
import {Conta} from './model/conta';


let conta_01 = new Conta('01', 0);
let client_01 = new Client('Nome 01', 'cpf-01', conta_01);

let all_clients = new Clients([]);

all_clients.insert(client_01);

console.log(all_clients.list());

console.log(all_clients.search('cpf-01'));

all_clients.remove(0);

console.log(all_clients.list());

