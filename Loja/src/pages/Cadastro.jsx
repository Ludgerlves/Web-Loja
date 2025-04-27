import React, {useState} from 'react'
import axios from 'axios'

const Cadastro = () => {
    const[nome, setNome]= useState('');
    const[email, setEmail]=useState('');
    const[senha, SetSenha]=useState('');

    const HandleRegist=async(e)=>{
        e.preventDefault();

        try{
            const resposta= await axios.post('http://localhost:8000/backend/cadastro.php',{
                nome,
                email,
                senha
            })
            if (resposta.data.status==='sucesso') {
                console.log('Cadastro realizado com sucesso')
            }else{
                console.log('Credenciais invalidas')
            }
        }
        catch(erro){
            console.log('Erro ao conectar com o servidor', erro);
        }
    }
  return (
    <div style={estilo.container}>
        <h1>Cadastro</h1>
        <form onSubmit={HandleRegist} style={estilo.form}>
            <input type="text" 
            placeholder="Nome"
            value={nome}
            onChange={e => setNome(e.target.value)}
            required
            style={estilo.input}
            />
            <input 
            type="Email" 
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            style={estilo.input}
            />
            <input 
                type="password" 
                placeholder="Palavra-passe"
                value={senha}
                onChange={e => SetSenha(e.target.value)}
                required
                style={estilo.input}
            />
            <button type="submit" style={estilo.botao}>Entrar</button>
        </form>
    </div>
  )
}
const estilo={
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

export default Cadastro