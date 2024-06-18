import React from 'react';
import { Route, BrowserRouter, Routes as Switch } from "react-router-dom";
import BarraNavegacao from './barraNavegacao';
import Home from './home';
import Clientes from './clientes/clientes';
import ProdutoDetails from './produtos_servicos/atualizarDeletarProduto';
import Servicos from './produtos_servicos/atualizarDeletarServico';
import FormularioCadastroCliente from './clientes/formularioCadastroCli';
import FormularioCadastroProduto from './produtos_servicos/formCadastroProdServ';
import Compra from './compra';
import Listagem from './listagem';
import FormularioAtualizacaoCliente from "./clientes/formularioAtualizar";
import ClienteDetails from "./clientes/atualizarDeletarCli";

function AppRoutes() {
  return (
      <>
        <BarraNavegacao
          tema="#d84315 deep-orange darken-3 lighten-2"
          botoes={[
            { nome: 'Home', rota: '/' },
            { nome: 'Clientes', rota: '/clientes' },
            { nome: 'Atualizar/Deletar Cliente', rota: '/atualizaDeletaCli'},
            { nome: 'Produtos', rota: '/produtos' },
            { nome: 'Serviços', rota: '/servicos' },
            { nome: 'Cadastro de Clientes', rota: '/cadastrocliente' },
            { nome: 'Cadastro de Produtos e Serviços', rota: '/cadastrarPandS' },
            { nome: 'Compra cliente', rota: '/compra' },
            { nome: 'Listagem', rota: '/listar' },
          ]}
          seletorView={() => {}}
        />
        <BrowserRouter>
          <Switch>
            <Route path="/" element={<Home tema="#d84315 deep-orange darken-3" />} />
            <Route path="/clientes" element={<Clientes />} />
            <Route path="/atualizaDeletaCli" element={<ClienteDetails id={""} tema={""} cpf={""} />} />
            <Route path="/produtos" element={<ProdutoDetails tema="#d84315 deep-orange darken-3" id={""} />} />
            <Route path="/servicos" element={<Servicos id={""} tema={""} />} />
            <Route path="/cadastrarPandS" element={<FormularioCadastroProduto tema="#d84315 deep-orange darken-3" />} />
            <Route path="/cadastrocliente" element={<FormularioCadastroCliente tema="#d84315 deep-orange darken-3" />} />
            <Route path="/compra" element={<Compra id={""} cpf={""} tema={""} />}/>
            <Route path="/listar" element={<Listagem id={""} tema={""} />}/>
            <Route path="/atualizacaoCliente" element={<FormularioAtualizacaoCliente />} />
          </Switch>
      </BrowserRouter>
    </>
  );
}
export default AppRoutes;