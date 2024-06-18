import React, { useState, useEffect } from "react";
import "./listagem.css";
import M from "materialize-css/dist/js/materialize.min.js";

const servicos = [
  { id: "1", nome: "Corte de cabelo", preco: 50.0, genero: "unissex" },
  { id: "2", nome: "Manicure", preco: 20.0, genero: "feminino" },
  { id: "3", nome: "Pedicure", preco: 25.0, genero: "feminino" },
  { id: "3", nome: "Limpeza de Pele", preco: 120.0, genero: "unissex" },
];

const produtos = [
  { id: "1", nome: "Perfume feminino", preco: 100.0, genero: "feminino" },
  { id: "2", nome: "Batom matte", preco: 15.0, genero: "feminino" },
  { id: "3", nome: "Perfume masculino", preco: 120.0, genero: "masculino" },
  { id: "4", nome: "Loção pós Barba", preco: 80.0, genero: "masculino" },
];

const clientes = [
  { id: "1", nome: "Sophia Patel", quantidadeConsumida: 32, genero: "feminino" },
  { id: "2", nome: "Aria Martin", quantidadeConsumida: 26, genero: "feminino" },
  { id: "3", nome: "Gabriel Brown", quantidadeConsumida: 22, genero: "masculino" },

];
const clientesMenos = [
  { id: "1", nome: "Natalie Hall", quantidadeConsumida: 6, genero: "feminino" },
  { id: "2", nome: "Wendy White", quantidadeConsumida: 5, genero: "feminino" },
  { id: "3", nome: "Xavier Lewis", quantidadeConsumida: 2, genero: "masculino" },

]

export default function Listagem(props) {
  const [activeTab, setActiveTab] = useState("produto");
  const [id, setId] = useState(props.id);
  const [nome, setNome] = useState("");
  const [tema, setTema] = useState(props.tema);

  const calcularMaisConsumidosPorGenero = (itens) => {
    const contagemPorGenero = {};

    itens.forEach((item) => {
      contagemPorGenero[item.genero] = (contagemPorGenero[item.genero] || 0) + 1;
    });

    return contagemPorGenero;
  };

  const obterMaisConsumidosPorGenero = (itens) => {
    const contagemPorGenero = calcularMaisConsumidosPorGenero(itens);

    const itensPorGenero = {};
    itens.forEach((item) => {
      if (!itensPorGenero[item.genero]) {
        itensPorGenero[item.genero] = [];
      }
      itensPorGenero[item.genero].push(item);
    });

    return itensPorGenero;
  };

  const obterClientesMenosConsumidores = (clientes) => {
    const clientesOrdenados = clientes.sort((a, b) => a.quantidadeConsumida - b.quantidadeConsumida);

    const clientesMenosConsumidores = clientesOrdenados.slice(0, 10).reverse();

    return clientesMenosConsumidores;
  };

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  useEffect(() => {
    const tabs = document.querySelectorAll(".tabs");
    M.Tabs.init(tabs);
  }, []);

  const renderLista = (itens) => (
    <ul>
      {itens.map((item) => (
        <li key={item.id}>
          {`${item.id} - ${item.nome} - ${
            item.preco ? item.preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }) : item.quantidadeConsumida + " unidades"
          }`}
        </li>
      ))}
    </ul>
  );

  const obterClientesMaisConsumidores = (clientes) => {
    const clientesOrdenados = clientes.sort((a, b) => b.quantidadeConsumida - a.quantidadeConsumida);

    const clientesMaisConsumidores = clientesOrdenados.slice(0, 10);

    return clientesMaisConsumidores;
  };

  const itensMaisConsumidosPorGenero = obterMaisConsumidosPorGenero(
    activeTab === "produtos" ? produtos : activeTab === "servicos" ? servicos : clientes
  );

  const clientesMenosConsumidores = obterClientesMenosConsumidores(clientesMenos);

  const clientesMaisConsumidores = obterClientesMaisConsumidores(clientes);

  return (
    <div className="row center-align">
      <div className="col s12">
        <ul className="tabs">
          <li className="tab col s4" onClick={() => handleTabClick("produtos")}>
            <a className={activeTab === "produtos" ? "active" : ""}>Produtos</a>
          </li>
          <li className="tab col s4" onClick={() => handleTabClick("servicos")}>
            <a className={activeTab === "servicos" ? "active" : ""}>Serviços</a>
          </li>
          <li className="tab col s4" onClick={() => handleTabClick("clientes")}>
            <a className={activeTab === "clientes" ? "active" : ""}>Clientes</a>
          </li>
        </ul>
      </div>
      {activeTab === "produtos" && (
        <div>
          <h5>Produtos mais consumidos por gênero:</h5>
          {Object.values(itensMaisConsumidosPorGenero).map((generoItens) => (
            <div key={generoItens[0].genero}>
              <h6>{generoItens[0].genero}</h6>
              {renderLista(generoItens)}
            </div>
          ))}
        </div>
      )}
      {activeTab === "servicos" && (
        <div>
          <h5>Serviços mais consumidos por gênero:</h5>
          {Object.values(itensMaisConsumidosPorGenero).map((generoItens) => (
            <div key={generoItens[0].genero}>
              <h6>{generoItens[0].genero}</h6>
              {renderLista(generoItens)}
            </div>
          ))}
        </div>
      )}
      {activeTab === "clientes" && (
        <div>
          <h5>Clientes mais consumidores:</h5>
          {renderLista(clientesMaisConsumidores)}
          <h5>Clientes menos consumidores:</h5>
          {renderLista(clientesMenosConsumidores)}
        </div>
      )}
    </div>
  );
}
