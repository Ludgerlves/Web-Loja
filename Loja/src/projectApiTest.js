import axios from "axios";
const API_URL='http://localhost:8000/api/utilizador.php';

const createUser=async (userData)=>{
    try{
        const response = await axios.post(API_URL, userData);
        console.log(response.data);
    }catch(erro){
        console.log(erro)
    }
};

createUser({nome: 'Joana', email:'joana@example.com', password:'123456'});