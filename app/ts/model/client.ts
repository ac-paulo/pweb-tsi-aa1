export class Client {

    private _nome: string;
    private _cpf: string;
    private _conta: any;

    constructor(nome: string, cpf: string, conta: any) {
        this._nome = nome;
        this._cpf = cpf;
        this._conta = conta;
    }

    get nome() {
        return this._nome;
    }

    get cpf() {
        return this._cpf;
    }

    get conta() {
        return this._conta;
    }

    set conta(conta) {
        this._conta = conta;
    }

    set cpf(cpf: string) {
        this._cpf = cpf;
    }

    set nome(nome) {
        this._nome = nome;
    }

    toString(): string {
        return `Nome: ${this._nome} 
        - CPF: ${this._cpf} 
        - Conta: ${this._conta}`;
    }
}
