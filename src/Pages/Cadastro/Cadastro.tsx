// Cadastro.tsx
import React, { useState } from 'react';
import './Cadastro.css'; // Importe o arquivo CSS

const Cadastro: React.FC = () => {
  const [cpf, setCpf] = useState('');
  const [nome, setNome] = useState('');
  const [apelido, setApelido] = useState('');
  const [rua, setRua] = useState('');
  const [numero, setNumero] = useState('');
  const [bairro, setBairro] = useState('');
  const [complemento, setComplemento] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [cep, setCep] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!cpf || !nome || !apelido || !rua || !numero || !bairro || !cidade || !estado || !cep || !telefone || !email || !senha) {
      setErro('Todos os campos obrigatórios devem ser preenchidos.');
      return;
    }
    console.log('Cadastro realizado com sucesso:', { cpf, nome, apelido, rua, numero, bairro, complemento, cidade, estado, cep, telefone, email, senha });
    setErro('');
    setCpf('');
    setNome('');
    setApelido('');
    setRua('');
    setNumero('');
    setBairro('');
    setComplemento('');
    setCidade('');
    setEstado('');
    setCep('');
    setTelefone('');
    setEmail('');
    setSenha('');
  };

  return (
    <div className="cadastro-container">
      <h2>Cadastro</h2>
      {erro && <p className="erro">{erro}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="cpf">CPF:</label>
          <input
            type="text"
            id="cpf"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="apelido">Apelido:</label>
          <input
            type="text"
            id="apelido"
            value={apelido}
            onChange={(e) => setApelido(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="rua">Rua:</label>
          <input
            type="text"
            id="rua"
            value={rua}
            onChange={(e) => setRua(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="numero">Número:</label>
          <input
            type="text"
            id="numero"
            value={numero}
            onChange={(e) => setNumero(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="bairro">Bairro:</label>
          <input
            type="text"
            id="bairro"
            value={bairro}
            onChange={(e) => setBairro(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="complemento">Complemento (opcional):</label>
          <input
            type="text"
            id="complemento"
            value={complemento}
            onChange={(e) => setComplemento(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="cidade">Cidade:</label>
          <input
            type="text"
            id="cidade"
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="estado">Estado:</label>
          <input
            type="text"
            id="estado"
            value={estado}
            onChange={(e) => setEstado(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="cep">CEP:</label>
          <input
            type="text"
            id="cep"
            value={cep}
            onChange={(e) => setCep(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="telefone">Telefone:</label>
          <input
            type="text"
            id="telefone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="senha">Senha:</label>
          <input
            type="password"
            id="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>
		{erro && <p className="erro">{erro}</p>}
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default Cadastro;
