import React, { useState } from "react";
import axios from "axios";

export default function FormularioCadastroCliente() {
  const [nome, setNome] = useState("");
  const [nomeSocial, setNomeSocial] = useState("");
  const [genero, setGenero] = useState("");
  const [ddd,setDdd] = useState("")
  const [numeroTelefone, setNumeroTelefone] = useState("");
  const [cpfValor, setCpfValor] = useState("");
  const [rgValor, setRgValor] = useState<string[]>([]);
  const [quantidadeRg, setQuantidadeRg] = useState(0);

  const handleGeneroChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const generoSelecionado = event.target.value === "1" ? "Masculino" : "Feminino";
    setGenero(generoSelecionado);
  };  

  // Manipuladores de eventos
  const handleDddChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDdd(event.target.value);
  };

  const handleNumeroTelefoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumeroTelefone(event.target.value);
  };

  const handleQuantidadeRgChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuantidadeRg(parseInt(event.target.value, 10));
  };

  const handleRgChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const updatedRgs = [...rgValor];
    updatedRgs[index] = event.target.value;
    setRgValor(updatedRgs);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  
    try {
      // Crie o CPF
      const cpfResponse = await axios.post('http://localhost:5001/cpf', {
        valor: cpfValor,
        dataEmissao: new Date(),
      });
  
      // Crie o Cliente
      const clienteResponse = await axios.post('http://localhost:5001/cadastroCliente', {
        nome,
        nomeSocial,
        genero,
        cpfValor: cpfResponse.data.valor,
        empresaId: 1
      });
  
      // Crie o RG
      for (let i = 0; i < quantidadeRg; i++) {
        await axios.post('http://localhost:5001/rg', {
          valor: rgValor[i],
          dataEmissao: new Date(),
          clienteId: clienteResponse.data.id,
        });
      }
  
      // Crie o Telefone
      await axios.post('http://localhost:5001/telefone', {
        ddd,
        numero: numeroTelefone,
        clienteId: clienteResponse.data.id,
      });
  
      alert('Cliente cadastrado com sucesso!');
    } catch (error) {
      console.error('Erro ao cadastrar o cliente:', error);
    }
  };
  
  let estiloBotao = `#ef6c00 orange darken-3 btn waves-effect waves-light`;

    return (
      <div className="row">
        <div className="col s6 offset-s3">
          <form className="col s12" onSubmit={handleSubmit}>
            <div className="row">
              <div className="input-field col s12">
                <input id="nome" type="text" className="validate" value={nome} onChange={(e) => setNome(e.target.value)} />
                <label htmlFor="nome">Nome</label>
              </div>
              <div className="input-field col s12">
                <input id="nome_social" type="text" className="validate" value={nomeSocial} onChange={(e) => setNomeSocial(e.target.value)} />
                <label htmlFor="nome_social">Nome social</label>
              </div>
              <label htmlFor="genero">Gênero</label>
              <div className="input-field col s12">
                <select id="genero" className="browser-default" onChange={handleGeneroChange} value={genero}>
                  <option value="" disabled>Escolha o gênero</option>
                  <option value="1">Masculino</option>
                  <option value="2">Feminino</option>
                </select>
              </div>
              <div className="input-field col s12">
                <input id="cpf" type="text" className="validate" value={cpfValor} onChange={(e) => setCpfValor(e.target.value)} />
                <label htmlFor="cpf">N° CPF</label>
              </div>
              <div className="input-field col s12">
                <input id="data_emissao_cpf" type="text" className="validate" />
                <label htmlFor="data_emissao_cpf">Data de emissão do CPF</label>
              </div>
              <div className="input-field col s12">
                <input id="quantidade_rg" type="text" className="validate" onChange={handleQuantidadeRgChange} />
                <label htmlFor="quantidade_rg">Quantidade de RG</label>
              </div>
              {!isNaN(quantidadeRg) && [...Array(quantidadeRg)].map((_, i) => (
                  <div key={i} className="input-field col s12">
                    <input id={`rg_${i}`} type="text" className="validate" value={rgValor[i] || ""} onChange={(e) => handleRgChange(e, i)} />
                    <label htmlFor={`rg_${i}`}>Digite o n° do RG {i + 1}</label>
                  </div>
              ))}
              <div className="input-field col s12">
                <input id="data_emissao_rg" type="text" className="validate" />
                <label htmlFor="data_emissao_rg">Data de emissão do RG</label>
              </div>
              <div className="input-field col s12">
                <input id="ddd" type="text" className="validate" value={ddd} onChange={handleDddChange} />
                <label htmlFor="ddd">DDD</label>
              </div>
              <div className="input-field col s12">
                <input id="telefone" type="text" className="validate" value={numeroTelefone} onChange={handleNumeroTelefoneChange} />
                <label htmlFor="telefone">Telefone</label>
              </div>
            </div>
            <div className="row">
              <div className="col s12 ">
                <button className={estiloBotao} type="submit" name="action">
                  Enviar
                  <i className="#ef6c00 orange darken-3 material-icons right">send</i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }