import React, { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import './produto.css'

type Props = {
    id: string,
    tema: string;
};

interface State {
    activeTab: string;
    id: string,
    nome: string;
    tema: string;
    buscou: boolean;
    metodoSelecionado: string;
}

const produtos = [
    { id: '1', nome: 'Perfume feminino' },
    { id: '2', nome: 'Batom matte' },
    { id: '3', nome: 'Perfume masculino' },
    // adicione mais produtos conforme necessário
];

function buscarProduto(query: string) {
    // verifica se a consulta é um ID
    if (produtos.some(produto => produto.id === query)) {
        return produtos.find(produto => produto.id === query);
    }

    // se não for um ID, assume que é um nome
    return produtos.find(produto => produto.nome.toLowerCase() === query.toLowerCase());
}


export default class ProdutoDetails extends Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            activeTab: 'delete',
            id: props.id,
            nome: '',
            tema: props.tema,
            metodoSelecionado: '',
            buscou: false
        };
    }

    handleMetodoChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        this.setState({
            metodoSelecionado: event.target.value
        });
    }

    handleBuscarClick = () => {
        const { metodoSelecionado, id, nome } = this.state;
    
        let produto;
        if (metodoSelecionado) {
            if (metodoSelecionado === '1' && id) {
                console.log(`Busca por ID: ${id}`);
                produto = buscarProduto(id);
            } else if (metodoSelecionado === '2' && nome) {
                console.log(`Busca por Nome: ${nome}`);
                produto = buscarProduto(nome);
            }
        }
    
        if (produto) {
            this.setState({
                id: produto.id,
                nome: produto.nome,
                buscou: true
            });
        }
    }
    
    
    renderInputs() {
        const { metodoSelecionado } = this.state;
    
        return (
            <>
                {metodoSelecionado === '1' && (
                    <div className="input-field col s12">
                        <input id="id" type="text" className="validate" value={this.state.id} onChange={(e) => this.setState({ id: e.target.value })} />
                        <label htmlFor="id">ID</label>
                    </div>
                )}
                {metodoSelecionado === '2' && (
                    <div className="input-field col s12">
                        <input id="nome" type="text" className="validate" value={this.state.nome} onChange={(e) => this.setState({ nome: e.target.value })} />
                        <label htmlFor="nome">Nome</label>
                    </div>
                )}
                <div>
                    <ul>
                        <li>1 - Perfume feminino </li>
                        <li>2 - Batom matte </li>
                        <li>3 - Perfume masculino</li>
                    </ul>
                </div>
            </>
        );
    }
    
    handleDeletarClick = () => {
        alert('Produto deletado!');
    }    

    handleTabClick = (tabName: string) => {
        this.setState({
            activeTab: tabName
        });
    }

    componentDidMount() {
        const tabs = document.querySelectorAll('.tabs');
        M.Tabs.init(tabs);
    }

    render() {
        let estiloBotao = `#d84315 deep-orange darken-3 btn waves-effect waves-light ${this.props.tema}`;
        
        return (
            <div className="row center-align">
                <div className="col s12">
                    <ul className="tabs">
                        <li className="tab col s6" onClick={() => this.handleTabClick('delete')}>
                            <a className={this.state.activeTab === 'delete' ? 'active' : ''} href="#deleteTab">Deletar Produto</a>
                        </li>
                        <li className="tab col s6" onClick={() => this.handleTabClick('update')}>
                            <a className={this.state.activeTab === 'update' ? 'active' : ''} href="#updateTab">Atualizar Cadastro</a>
                        </li>
                    </ul>
                </div>
                <div id="deleteTab" className={`col s12 ${this.state.activeTab === 'delete' ? 'active' : ''}`}>                    {/* Conteúdo para deletar cliente */}
                <div className="card">
                    <div className="card-content">
                        <span className="card-title">Deletar Produto</span>
                            <div className="input-field col s12">
                                <option value="" disabled></option>
                                <select
                                    id="metodo"
                                    className="browser-default"
                                    onChange={this.handleMetodoChange}
                                    value={this.state.metodoSelecionado}
                                >
                                    <option value=''></option>
                                    <option value="1">Procurar por ID</option>
                                    <option value="2">Procurar por Nome</option>
                                </select>
                                <label>Método de Busca</label>
                            </div>{this.renderInputs()}
                            <div className="input-field col s12">
                                <button className="btn waves-effect waves-light" onClick={this.handleBuscarClick}>
                                    Buscar
                                    <i className="material-icons right">search</i>
                                </button>
                            </div>
                            {((this.state.nome || this.state.id) && this.state.buscou) && (
                            <div>
                                <p>Nome: {this.state.nome}</p>
                                <p>ID: {this.state.id}</p>
                                <button className="btn waves-effect waves-light" onClick={this.handleDeletarClick}>
                                    Deletar
                                    <i className="material-icons right">delete</i>
                                </button>
                            </div>
                            )}
                        </div>
                    </div>
                </div>
                <div id="updateTab" className={`col s12 ${this.state.activeTab === 'update' ? 'active' : ''}`}>
                    {/* Conteúdo para atualizar cadastro */}
                    <div className="card">
                        <div className="card-content">
                            <span className="card-title">Atualizar Cadastro</span>
                            <div className="input-field col s12">
                                <input id="nome" type="text" className="validate" />
                                <label htmlFor="nome">Nome</label>
                            </div>
                            <div className="input-field col s12">
                                <input id="descricao" type="text" className="validate" />
                                <label htmlFor="descricao">Descrição</label>
                            </div>
                            <div className="input-field col s12">
                                <input id="preco" type="text" className="validate" />
                                <label htmlFor="preco">Preço</label>
                            </div>
                            <div className="input-field col s12">
                                <input id="estoque" type="text" className="validate" />
                                <label htmlFor="estoque">N° de produtos no estoque</label>
                            </div>
                            <div className="row" >
                            <div className="col s12">
                                <button className={estiloBotao} type="submit" name="action">
                                Submit
                                <i className="material-icons right">send</i>
                                </button>
                            </div>
                        </div>
                        </div>
                        <div className="row" style={{ marginBottom: '20px' }}></div>
                    </div>
                </div>
            </div>
        );
    }
}
