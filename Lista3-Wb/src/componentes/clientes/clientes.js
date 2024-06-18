import React, { useState } from 'react';
import './clientes.css'

const clientes = [
  { nome:'Ava Moreno', genero:'feminino'},
  { nome:'Ethan Hall', genero: 'masculino' },
  { nome:'Luna Lee', genero: 'feminino' },
  { nome:'Julian Sanchez', genero: 'masculino' },
  { nome:'Sophia Patel', genero: 'feminino'},
  { nome:'Logan Brooks', genero:'masculino'},
  { nome:'Aria Martin', genero:'feminino'},
  { nome:'Caleb Davis', genero:'masculino'},
  { nome:'Emily Chen', genero:'feminino'},
  { nome:'Gabriel Brown', genero:'masculino'},
  { nome:'Hannah Kim', genero:'feminino'},
  { nome:'Isaac Taylor', genero:'masculino'},
  { nome:'Julia White', genero:'feminino'},
  { nome:'Kevin Lewis', genero:'masculino'},
  { nome:'Lily Tran', genero:'feminino'},
  { nome:'Michael Lee', genero:'masculino'},
  { nome:'Natalie Hall', genero:'feminino'},
  { nome:'Oliver Patel', genero:'masculino'},
  { nome:'Penelope Brooks', genero:'feminino'},
  { nome:'Quinn Davis', genero:'masculino'},
  { nome:'Rachel Martin', genero:'feminino'},
  { nome:'Samuel Brown', genero:'masculino'},
  { nome:'Tessa Chen', genero:'feminino'},
  { nome:'Uma Kim', genero:'feminino'},
  { nome:'Vincent Taylor', genero:'masculino'},
  { nome:'Wendy White', genero:'feminino'},
  { nome:'Xavier Lewis', genero:'masculino'},
  { nome:'Yara Tran', genero:'feminino'},
  { nome:'Zachary Lee', genero:'masculino'}
];

export default function Clientes() {
  const [tab, setTab] = useState(0);

  return (
    <div className="container">
      <div className="card">
        <div className="card-content">
          <div className="row">
            <div className="col s12">
              <ul className="tabs">
                <li className={`tab col s4 ${tab === 0 ? 'active' : ''}`}>
                  <a href="#test1" onClick={() => setTab(0)}>
                    Todos
                  </a>
                </li>
                <li className={`tab col s4 ${tab === 1 ? 'active' : ''}`}>
                  <a href="#test2" onClick={() => setTab(1)}>
                    Masculinos
                  </a>
                </li>
                <li className={`tab col s4 ${tab === 2 ? 'active' : ''}`}>
                  <a href="#test3" onClick={() => setTab(2)}>
                    Femininos
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div id="test1" className="col s12">
            {tab === 0 &&
              clientes.map((cliente, i) => (
                <div key={i} className="card">
                  <div className="card-content">
                    <ul className="card-title">{cliente.nome}</ul>
                    <p>{cliente.genero}</p>
                  </div>
                </div>
              ))}
          </div>

          <div id="test2" className="col s12">
            {tab === 1 &&
              clientes
                .filter((cliente) => cliente.genero === 'masculino')
                .map((cliente, i) => (
                  <div key={i} className="card">
                    <div className="card-content">
                      <span className="card-title">{cliente.nome}</span>
                      <p>{cliente.genero}</p>
                    </div>
                  </div>
                ))}
          </div>

          <div id="test3" className="col s12">
            {tab === 2 &&
              clientes
                .filter((cliente) => cliente.genero === 'feminino')
                .map((cliente, i) => (
                  <div key={i} className="card">
                    <div className="card-content">
                      <span className="card-title">{cliente.nome}</span>
                      <p>{cliente.genero}</p>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
}