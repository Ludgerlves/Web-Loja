import React, { useState } from 'react';
import axios from 'axios';

const Cadastro = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleRegister = async (e) => {
       e.preventDefault(); // Evita o comportamento padrão do formulário (recarregar a página)

        const userData = {
            name,
            email,
            password: senha, // A propriedade deve ser "password" para coincidir com o back-end
        };

        try {
            const resposta = await axios.post('http://localhost:8000/api/utilizador.php', userData);
            if (resposta.data.status === 'sucesso') {
                console.log('Cadastro realizado com sucesso');
                // Aqui você pode limpar os campos ou redirecionar o usuário
                setName('');
                setEmail('');
                setSenha('');
            } else {
                console.log('Credenciais inválidas');
            }
        } catch (erro) {
            console.log('Erro ao conectar com o servidor', erro);
        }
    };

    return (
        <div style={estilo.container}>
            <h1>Cadastro</h1>
            <form onSubmit={handleRegister} style={estilo.form}>
                <input
                    type="text"
                    placeholder="Nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    style={estilo.input}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={estilo.input}
                />
                <input
                    type="password"
                    placeholder="Palavra-passe"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    required
                    style={estilo.input}
                />
                <button type="submit" style={estilo.botao}>Cadastrar</button>
            </form>
        </div>
    );
};

const estilo = {
    container: {
        maxWidth: '400px',
        margin: '100px auto',
        padding: '20px',
        borderRadius: '10px',
        background: '#f5f5f5',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        textAlign: 'center',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
    },
    input: {
        padding: '10px',
        fontSize: '16px',
    },
    botao: {
        padding: '10px',
        background: '#007BFF',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        fontSize: '16px',
    },
};

export default Cadastro;