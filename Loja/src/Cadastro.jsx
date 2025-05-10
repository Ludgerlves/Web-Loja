import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const Cadastro = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false); // Novo estado para sucesso
    const navigate = useNavigate();

    const handleRegister = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(false);

        const userData = {
            name,
            email,
            password: senha,
        };

        try {
            const resposta = await axios.post('http://localhost:8000/api/utilizador.php', userData);
            if (resposta.data.status === 'sucesso') {
                setSuccess(true);
                setName('');
                setEmail('');
                setSenha('');
                navigate('/', { replace: true }); // Redireciona para a página inicial
            } else {
                setError(resposta.data.message || 'Credenciais inválidas');
            }
        } catch (erro) {
            setError('Erro ao conectar com o servidor');
            console.error('Erro no cadastro:', erro);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={estilo.container}>
            <h2 className="section__header">CADASTRO</h2>
            {error && <p style={{color: 'red', marginTop: '1rem'}}>{error}</p>}
            {success && (
                <p style={{color: 'green', marginTop: '1rem'}}>
                    Cadastro realizado com sucesso! Redirecionando...
                </p>
            )}
            <form onSubmit={handleRegister} style={estilo.form}>
                <input
                    type="text"
                    placeholder="Nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    style={estilo.input}
                    disabled={loading || success}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={estilo.input}
                    disabled={loading || success}
                />
                <input
                    type="password"
                    placeholder="Palavra-passe"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    required
                    style={estilo.input}
                    disabled={loading || success}
                />
                <button 
                    type="submit" 
                    style={{
                        ...estilo.botao,
                        backgroundColor: loading || success ? 'var(--primary-color)' : 'var(--text-dark)'
                    }}
                    onMouseOver={(e) => !loading && !success && (e.target.style.backgroundColor = 'var(--primary-color)')}
                    onMouseOut={(e) => !loading && !success && (e.target.style.backgroundColor = 'var(--text-dark)')}
                    disabled={loading || success}
                >
                    {loading ? 'Carregando...' : success ? 'Sucesso!' : 'Cadastrar'}
                </button>
            </form>
        </div>
    );
};

 const estilo = {
    container: {
        maxWidth: 'var(--max-width)',
        margin: 'auto',
        padding: '5rem 1rem',
        textAlign: 'center',
    },
    form: {
        maxWidth: '400px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        backgroundColor: 'var(--extra-light)',
        padding: '2rem',
        borderRadius: '2rem',
    },
    input: {
        padding: '0.75rem 1.5rem',
        fontSize: '1rem',
        border: 'none',
        outline: 'none',
        borderRadius: '5px',
        fontFamily: '"Poppins", sans-serif',
        transition: '0.3s',
    },
    botao: {
        padding: '0.75rem 1.5rem',
        fontSize: '1rem',
        color: 'var(--white)',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: '0.3s',
        fontFamily: '"Poppins", sans-serif',
    },
    erro: {
        color: 'red',
        marginTop: '1rem'
    },
    sucesso: {
        color: 'green',
        marginTop: '1rem'
    }
};

export default Cadastro;