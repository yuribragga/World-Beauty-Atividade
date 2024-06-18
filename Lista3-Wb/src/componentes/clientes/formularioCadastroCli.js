import React, { useState, useEffect } from "react";
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

export default function FormularioDeCadastroDeCliente(props) {
    const [quantidadeRG, setQuantidadeRG] = useState(0);
    const [tema, setTema] = useState(props.tema);

    useEffect(() => {
        M.AutoInit();
    }, []);

    const handleQuantidadeRGChange = (event) => {
        setQuantidadeRG(parseInt(event.target.value, 10));
    };    

    let estiloDoBotao = `btn waves-effect waves-light ${props.tema}`;
    return (
        <div className="row">
            <div className="col s6 offset-s3">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="nomeDoCliente" type="text" className="validate" />
                            <label htmlFor="nomeDoCliente">Nome</label>
                        </div>
                        <div className="input-field col s12">
                            <input id="nomeSocial" type="text" className="validate" />
                            <label htmlFor="nomeSocial">Nome Social</label>
                        </div>
                        <label htmlFor="genero">Gênero</label>
                        <div className="input-field col s12">
                            <select id="genero" className="browser-default">
                                <option value="" disabled>Selecione o gênero</option>
                                <option value="1">Masculino</option>
                                <option value="2">Feminino</option>
                                <option value="3">Outro</option>
                            </select>
                        </div>
                        <div className="input-field col s12">
                            <input id="cpf" type="text" className="validate" />
                            <label htmlFor="cpf">Número do CPF</label>
                        </div>
                        <div className="input-field col s12">
                            <input id="dataEmissaoCpf" type="text" className="validate" />
                            <label htmlFor="dataEmissaoCpf">Data de Emissão do CPF</label>
                        </div>
                        <div className="input-field col s12">
                            <input id="quantidadeRGInput" type="text" className="validate" onChange={handleQuantidadeRGChange} />
                            <label htmlFor="quantidadeRGInput">Quantidade de RGs</label>
                        </div>
                        {!isNaN(quantidadeRG) && [...Array(quantidadeRG)].map((_, i) => (
                            <div key={i} className="input-field col s12">
                                <input id={`rg_${i}`} type="text" className="validate" />
                                <label htmlFor={`rg_${i}`}>Informe o número do RG {i + 1}</label>
                            </div>
                        ))}
                        <div className="input-field col s12">
                            <input id="dataEmissaoRG" type="text" className="validate" />
                            <label htmlFor="dataEmissaoRG">Data de Emissão do RG</label>
                        </div>
                        <div className="input-field col s12">
                            <input id="numeroDoTelefone" type="text" className="validate" />
                            <label htmlFor="numeroDoTelefone">Número do Telefone</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            <button className={estiloDoBotao} type="submit" name="action">
                                Enviar
                                <i className="material-icons right">arrow_forward</i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}