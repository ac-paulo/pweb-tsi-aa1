import {Clients} from '../model/clients';
import {Client}  from '../model/client';

export class ClientController {

    private inputNome: HTMLInputElement;
    private inputCPF: HTMLInputElement;
    private inputConta: HTMLInputElement;

    private clients: Clients;

    constructor() {
        this.inputNome =
            <HTMLInputElement>document.querySelector("#nomeConta")
        this.inputCPF =
            <HTMLInputElement>document.querySelector("#cpf");
        this.inputConta = <HTMLInputElement>document.querySelector("#conta");
        this.clients = new Clients([]);
    }

    inserir(evento: Event) {
        evento.preventDefault();
        let newClient = new Client(this.inputNome.value, this.inputCPF.value, {});

        this.clients.insert(newClient);
        this.insertClientInHTML(newClient);
    }

    listar() {
        this.clients.list().forEach(
            client => {
                this.insertClientInHTML(client);
            }
        );
    }

    insertClientInHTML(client: Client) {
        const elementoP = document.createElement('p');
        elementoP.textContent = client.toString();
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';
        botaoApagar.addEventListener('click',
            (event) => {
                console.log('removendo conta ' + client.toString());
                this.clients.remove(client);
                (<Element>event.target).parentElement.remove();
            }
            );
        elementoP.appendChild(botaoApagar);
        document.body.appendChild(elementoP);
    }
}
