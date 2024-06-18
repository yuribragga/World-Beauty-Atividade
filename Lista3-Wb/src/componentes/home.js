import React, { useState, useEffect, useRef } from "react";
import M from 'materialize-css/dist/js/materialize.min.js';
import 'materialize-css/dist/css/materialize.min.css';
import './home.css';

export default function Home(props) {
    const [tema, setTema] = useState(props.tema);
    const tabs = useRef(null);

    useEffect(() => {
        M.Tabs.init(tabs.current);
    }, []);

    const clientesMaisConsumidores = [
        { nome: 'Sophia Patel', quantidade: 32 },
        { nome: 'Aria Martin', quantidade: 26 },
        { nome: 'Gabriel Brown', quantidade: 22 },
        { nome: 'Tessa Chen', quantidade: 16 },
        { nome: 'Uma Kim', quantidade: 10 },
    ];

    const clientesOrdenados = clientesMaisConsumidores.sort((a, b) => b.quantidade - a.quantidade);

    const top10Clientes = clientesOrdenados.slice(0, 10);

    let estiloBotao = `btn waves-effect waves-light ${props.tema}`;
    return (
        <div className="cards-container">
            <div className="row center-align">
                <div className="dois">
                    <div className="card">
                        <div className="card-content">
                            <span className="card-title">Clientes Mais Consumidores</span>
                            <ul className="collection">
                                {top10Clientes.map((cliente, index) => (
                                    <li key={index} className="collection-item">{cliente.nome}: {cliente.quantidade} unidades</li>
                                ))}
                            </ul>
                            <p><a href="/listagem#clienteTab">Visualizar a lista completa</a></p>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="card">
                        <div className="card-content">
                            <span className="card-title">Clientes que Mais Gastaram</span>
                            <ul className="collection">
                                <li className="collection-item">Sophia Patel: R$ 320.00</li>
                                <li className="collection-item">Aria Martin: R$ 190.00</li>
                                <li className="collection-item">Gabriel Brown: R$ 112.00</li>
                                <li className="collection-item">Tessa Chen: R$ 79.00</li>
                                <li className="collection-item">Uma Kim: R$ 72.32</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div><div className="row center-align">
  <div className="">
    <div className="card medium">
      <div className="card-content">
        <span className="card-title">Produtos e Serviços Mais Consumidos</span>
        <div className="card-tabs">
          <ul ref={tabs} className="tabs tabs-fixed-width">
            <li className="tab"><a href="#produtos">Produtos</a></li>
            <li className="tab"><a href="#servicos">Serviços</a></li>
          </ul>
        </div>
        <div className="row">
          <div id="produtos" className="col s12">
            <ul className="collection">
              <li className="collection-item">Perfume feminino: 2 unidades</li>
              <li className="collection-item">Batom matte: 3 unidades</li>
              <li className="collection-item">Sombra em pó: 3 unidades</li>
              <li className="collection-item">Perfume Unissex: 1 unidade</li>
            </ul>
            <p><a href="/listagem#produtoTab">Visualizar a lista completa</a></p>
          </div>
          <div id="servicos" className="col s12">
            <ul className="collection">
              <li className="collection-item">Corte de cabelo: 5 unidades</li>
              <li className="collection-item">Manicure: 3 unidades</li>
              <li className="collection-item">Pedicure: 2 unidades</li>
            </ul>
            <p><a href="/listagem#servicoTab">Visualizar a lista completa</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div></div>
    );
}