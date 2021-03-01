import {Client} from '../model/client';

export class ClientEspecial extends Client{
    private _dependencies: Array<Client>;
    constructor(nome: string, cpf: string, conta: any, dependencies: Array<Client>) {
        super(nome, cpf, conta);
        this._dependencies = dependencies
    }
}
