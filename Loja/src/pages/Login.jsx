import React, { useState } from 'react'
import axios from 'axios'

const Login = () => {
  const [email, setEmail]= useState('');
  const [senha, setSenha]= useState('');
  const [mensagem, setMensagem]= useState('');
  
  const handleLogin= async (e)=>{
    e.preventDefautl();
  
    try{
      const resposta = await axios.post(`${import.meta.env.VITE_API_URL}login.php`,{
        email,
        senha
      });
      if (resposta.data.status === 'sucesso') {
            setMensagem('Login Realizado com sucesso!');
      }else{
        setMensagem('Credenciais invalidas. ');
      }
    }
    catch(erro){
      setMensagem('Erro ao conectar com o servidor. ');
    }
  }


  return (
    <div style={estilo.container}>
    <h2>Login</h2>
    <form onSubmit={handleLogin} style={estilo.form}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
        style={estilo.input}
      />
      <input
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={e => setSenha(e.target.value)}
        required
        style={estilo.input}
      />
      <button type="submit" style={estilo.botao}>Entrar</button>
      {mensagem && <p>{mensagem}</p>}
    </form>
  </div>
);
}

const estilo = {
container: {
  maxWidth: '400px',
  margin: '100px auto',
  padding: '20px',
  borderRadius: '10px',
  background: '#f5f5f5',
  boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  textAlign: 'center'
},
form: {
  display: 'flex',
  flexDirection: 'column',
  gap: '15px'
},
input: {
  padding: '10px',
  fontSize: '16px'
},
botao: {
  padding: '10px',
  background: '#007BFF',
  color: 'white',
  border: 'none',
  cursor: 'pointer',
  fontSize: '16px'
}
};


export default Login