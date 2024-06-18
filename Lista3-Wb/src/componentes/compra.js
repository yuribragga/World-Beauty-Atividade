import React, { useState, useEffect } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './compra.css';

const listaDeClientes = [
    { id: '1', nome: 'Sophia Patel', cpf: '32245678900' },
    { id: '2', nome: 'Aria Martin', cpf: '98765432100' },
    { id: '3', nome: 'Gabriel Brown', cpf: '32545655511' },
    { id: '4', nome: 'Uma Kim', cpf: '10233411378' }
];

function buscarCliente(query) {
    if (listaDeClientes.some(cliente => cliente.id === query)) {
        return listaDeClientes.find(cliente => cliente.id === query);
    } else if (listaDeClientes.some(cliente => cliente.cpf === query)) {
        return listaDeClientes.find(cliente => cliente.cpf === query);
    } else if (listaDeClientes.some(cliente => cliente.nome.toLowerCase() === query.toLowerCase())) {
        return listaDeClientes.find(cliente => cliente.nome.toLowerCase() === query.toLowerCase());
    }
    return null;
}

export default function Compra({ idDoCliente, cpfDoCliente, tema }) {
    const [abaAtiva, setAbaAtiva] = useState('excluir');
    const [nomeDoCliente, setNomeDoCliente] = useState('');
    const [metodoDeBusca, setMetodoDeBusca] = useState('');
    const [produto, setProduto] = useState('');
    const [servico, setServico] = useState('');
    const [buscado, setBuscado] = useState(false);
    const [opcaoSelecionada, setOpcaoSelecionada] = useState('');

    useEffect(() => {
        const tabs = document.querySelectorAll('.tabs');
        M.Tabs.init(tabs);
    }, []);

    const handleSelectionChange = (event) => {
        setOpcaoSelecionada(event.target.value);
    }

    const handleMetodoDeBuscaChange = (event) => {
        setMetodoDeBusca(event.target.value);
    }

    const handleBuscarClick = () => {
        let cliente;
        if (metodoDeBusca) {
            if (metodoDeBusca === '1' && cpfDoCliente) {
                console.log(`Buscar por CPF: ${cpfDoCliente}`);
                cliente = buscarCliente(cpfDoCliente);
            } else if (metodoDeBusca === '2' && nomeDoCliente) {
                console.log(`Buscar por Nome: ${nomeDoCliente}`);
                cliente = buscarCliente(nomeDoCliente);
            } else if (metodoDeBusca === '3' && idDoCliente) {
                console.log(`Buscar por ID: ${idDoCliente}`);
                cliente = buscarCliente(idDoCliente);
            }
        }

        if (cliente) {
            setNomeDoCliente(cliente.nome);
            setBuscado(true);
        }
    }

    const renderizarInputs = () => {
        return (
            <>
                {metodoDeBusca === '1' && (
                    <div className="input-field col s12">
                        <input id="cpf" type="text" className="validate" value={cpfDoCliente} onChange={(e) => setProduto(e.target.value)} />
                        <label htmlFor="cpf">CPF</label>
                    </div>
                )}
                {metodoDeBusca === '2' && (
                    <div className="input-field col s12">
                        <input id="nome" type="text" className="validate" value={nomeDoCliente} onChange={(e) => setNomeDoCliente(e.target.value)} />
                        <label htmlFor="nome">Nome</label>
                    </div>
                )}
                {metodoDeBusca === '3' && (
                    <div className="input-field col s12">
                        <input id="id" type="text" className="validate" value={idDoCliente} onChange={(e) => setProduto(e.target.value)} />
                        <label htmlFor="id">ID</label>
                    </div>
                )}
                <div>
                    <ul>
                        <li>1 - Sophia Patel (CPF: 32245678900)</li>
                        <li>2 - Aria Martin (CPF: 98765432100)</li>
                        <li>3 - Gabriel Brown (CPF: 32545655511)</li>
                        <li>4 - Uma Kim (CPF: 10233411378)</li>
                    </ul>
                </div>
            </>
        );
    }

    const handleExcluirClick = () => {
        alert('Serviço excluído!');
    }

    const handleAbaClick = (nomeDaAba) => {
        setAbaAtiva(nomeDaAba);
    }

    let estiloDoBotao = `btn waves-effect waves-light ${tema}`;

    return (        <div className="row center-align">
        <div className="searchTab">
            <div className="card">
                <div className="card-content">
                    <span className="card-title">Comprar Produto ou Serviço</span>
                    <div className="input-field col s12">
                        <select
                            id="metodoDeBusca"
                            className="browser-default"
                            onChange={handleMetodoDeBuscaChange}
                            value={metodoDeBusca}
                        >
                            <option value="">Selecione um método de busca</option>
                            <option value="1">Buscar por CPF</option>
                            <option value="2">Buscar por Nome</option>
                            <option value="3">Buscar por ID</option>
                        </select>
                        <label>Método de Busca</label>
                    </div>
                    {renderizarInputs()}
                    <div className="input-field col s12">
                        <button className="btn waves-effect waves-light" onClick={handleBuscarClick}>
                            Buscar
                            <i className="material-icons right">search</i>
                        </button>
                    </div>
                    {((nomeDoCliente || idDoCliente || cpfDoCliente) && buscado) && (
                        <div className="row">
                            <div className="col s6 offset-s3 m1">
                                <form className="col s12">
                                    <div className="row">
                                        <label htmlFor="compra">Escolha o que foi consumido</label>
                                        <div className="input-field col s12">
                                            <select id="compra" className="browser-default" onChange={handleSelectionChange}>
                                                <option value="">Escolha o que foi consumido</option>
                                                <option value="Produto">Produto</option>
                                                <option value="Serviço">Serviço</option>
                                            </select>
                                        </div>
                                        {opcaoSelecionada === 'Produto' && (
                                            <div className="input-field col s12">
                                                <input id="idDoProduto" type="text" className="validate" />
                                                <label htmlFor="idDoProduto">Coloque o ID do produto</label>
                                            </div>
                                        )}
                                        {opcaoSelecionada === 'Serviço' && (
                                            <div className="input-field col s12">
                                                <input id="idDoServico" type="text" className="validate" />
                                                <label htmlFor="idDoServico">Coloque o ID do serviço</label>
                                            </div>
                                        )}
                                    </div>
                                    <div className="row">
                                        <div className="col s12">
                                            <button className={estiloDoBotao} type="submit" name="action" onClick={() => alert('Compra bem sucedida!')}>
                                                Enviar
                                                <i className="material-icons right">Enviar</i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    </div>
);
}