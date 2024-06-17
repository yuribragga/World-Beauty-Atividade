import Entrada from "../../io/entrada";
import Cliente from "../../modelo/clientes/cliente";

export default class DeletarCliente {
    private clientes: Array<Cliente>;
    private entrada: Entrada;

    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes;
        this.entrada = new Entrada();
    }

    public deletarCliente(): void {
        console.log(`Escolha a opção de busca:`);
        console.log(`1 - Procurar por CPF`);
        console.log(`2 - Procurar por Nome`);
        console.log(`3 - Procurar por ID`);

        let opcaoBusca = this.entrada.receberNumero('Insira a opção de busca desejada: ');

        if (opcaoBusca === 1) {
            let cpf = this.entrada.receberTexto('Insira o CPF do cliente que deseja deletar: ');

            const index = this.clientes.findIndex(c => c.getCpf.getValor === cpf);

            this.processarResultado(index);
        } else if (opcaoBusca === 2) {
            let nome = this.entrada.receberTexto('Insira o nome do cliente que deseja deletar: ');

            const index = this.clientes.findIndex(c => c.getNome === nome);

            this.processarResultado(index);
        } else if (opcaoBusca === 3) {
            let id = this.entrada.receberNumero('Insira o ID do cliente que deseja deletar: ');

            const index = this.clientes.findIndex(c => c.getId === id);

            this.processarResultado(index);
        } else {
            console.log(`Opção inválida.`);
        }

        console.log(`--------------------------------------`);
    }

    private processarResultado(index: number): void {
        if (index !== -1) {
            const cliente = this.clientes[index];

            console.log(`Cliente encontrado: ${cliente.getNome} (ID: ${cliente.getId})`);

            const confirmacao = this.entrada.receberTexto('Tem certeza que deseja deletar este cliente? (s/n): ');

            if (confirmacao.toLowerCase() === 's') {
                this.clientes.splice(index, 1);
                console.log(`Cliente deletado com sucesso.`);
            } else {
                console.log(`Operação cancelada.`);
            }
        } else {
            console.log(`Cliente não encontrado.`);
        }
    }
}
