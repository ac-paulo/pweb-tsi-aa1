export class Clients {
    private _clients: Array<any>;

    constructor(clients: Array<any>) {
        this._clients = clients;
    }

    list() {
        return this._clients;
    }

    insert(clinet: any) {
        this._clients.push(clinet);
    }

    remove(client: any) {
        delete this._clients[this._clients.findIndex(aux => aux === client)];
    }

    search(cpf: string) {
        return this._clients.find(aux => aux.cpf === cpf);
    }
}