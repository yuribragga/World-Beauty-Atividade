import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const clientes = [
    { id: '1', nome: 'Yara Tran', cpf: '12345678800' },
    { id: '2', nome: 'Tessa Chen', cpf: '98763442110' },
    { id: '3', nome: 'Oliver Patel', cpf: '52223333500' },
    // adicione mais produtos conforme necessário
];

function findClient(query) {
    if (clientes.some(cliente => cliente.id === query)) {
        return clientes.find(cliente => cliente.id === query);
    } else if (clientes.some(cliente => cliente.cpf === query)) {
        return clientes.find(cliente => cliente.cpf === query);
    } else if (clientes.some(cliente => cliente.nome.toLowerCase() === query.toLowerCase())) {
        return clientes.find(cliente => cliente.nome.toLowerCase() === query.toLowerCase());
    }
    return null;
}

export default function ClientDetails(props) {
    const [state, setState] = useState({
        id: props.id,
        nome: '',
        cpf: props.cpf,
        searchMethod: '',
        searched: false,
    });

    const navigate = useNavigate();

    const handleSearchMethodChange = (event) => {
        setState({
            ...state,
            searchMethod: event.target.value,
        });
    };

    const handleInputChange = (e) => {
        setState({
            ...state,
            [e.target.id]: e.target.value,
        });
    };

    const handleSearchClick = () => {
        const { searchMethod } = state;

        let client;
        if (searchMethod) {
            if (searchMethod === '1' && state.cpf) {
                client = findClient(state.cpf);
            } else if (searchMethod === '2' && state.nome) {
                client = findClient(state.nome);
            } else if (searchMethod === '3' && state.id) {
                client = findClient(state.id);
            }
        }

        if (client) {
            setState({
                id: client.id,
                nome: client.nome,
                cpf: client.cpf,
                searchMethod: '',
                searched: true,
            });
        }
    };

    const handleDeleteClick = () => {
        alert('Cliente excluído!');
    };

    const renderInputs = () => {
        const { searchMethod } = state;

        return (
            <>
                {searchMethod === '1' && (
                    <div className="input-field col s12">
                        <input
                            id="cpf"
                            type="text"
                            className="validate"
                            value={state.cpf}
                            onChange={handleInputChange}
                        />
                        <label htmlFor="cpf">CPF</label>
                    </div>
                )}
                {searchMethod === '2' && (
                    <div className="input-field col s12">
                        <input
                            id="nome"
                            type="text"
                            className="validate"
                            value={state.nome}
                            onChange={handleInputChange}
                        />
                        <label htmlFor="nome">Nome</label>
                    </div>
                )}
                {searchMethod === '3' && (
                    <div className="input-field col s12">
                        <input
                            id="id"
                            type="text"
                            className="validate"
                            value={state.id}
                            onChange={handleInputChange}
                        />
                        <label htmlFor="id">ID</label>
                    </div>
                )}
                <div>
                    <ul>
                        <li>1 - Yara Tran (CPF: 12345678800)</li>
                        <li>2 - Tessa Chen (CPF: 98763442110)</li>
                        <li>3 - Oliver Patel (CPF: 52223333500)</li>
                        <li>4 - Uma Kim (CPF: 10233411378)</li>
                    </ul>
                </div>
            </>
        );
    };

    const renderClientDetails = () => {
        const { nome, cpf, id } = state;

        return (
            <div className="card">
                <div className="card-content">
                    <span className="card-title">Detalhes do Cliente</span>
                    <p>Nome: {nome}</p>
                    <p>ID: {id}</p>
                    <p>CPF: {cpf}</p>
                    <button className="btn waves-effect waves-light" onClick={handleDeleteClick}>
                        Deletar
                        <i className="material-icons right">delete</i>
                    </button>
                    <button className="btn waves-effect waves-light" onClick={handleUpdateClick}>
                        Atualizar
                        <i className="material-icons right">edit</i>
                    </button>
                </div>
            </div>
        );
    };

    const handleUpdateClick = () => {
        navigate(`/atualizacaoCliente`);
    };

    return (
        <div className="rowcenter-align">
            <div className="card">
                <div className="card-content">
                    <span className="card-title">Buscar Cliente</span>
                    <div className="input-field col s12">
                        <option value="" disabled></option>
                        <select
                            id="searchMethod"
                            className="browser-default"
                            onChange={handleSearchMethodChange}
                            value={state.searchMethod}
                        >
                            <option value=''></option>
                            <option value="1">Procurar por CPF</option>
                            <option value="2">Procurar por Nome</option>
                            <option value="3">Procurar por ID</option>
                        </select>
                        <label>Método de Busca</label>
                    </div>
                    {renderInputs()}
                    <div className="input-field col s12">
                        <button className="btn waves-effect waves-light" onClick={handleSearchClick}>
                            Buscar
                            <i className="material-icons right">search</i>
                        </button>
                    </div>
                    {((state.nome || state.id || state.cpf) && state.searched) && (
                        renderClientDetails()
                    )}
                </div>
            </div>
        </div>
    );
}