// import axios from 'axios';

// 1.1 Função delay aciona o .then após 1s
// const delay = () => new Promise(resolve => setTimeout(resolve, 1000));
// async function umPorSegundos() {
//     const response = await delay();
//     await delay(console.log('1s'));
//     await delay(console.log('2s'));
//     await delay(console.log('3s'));
// }
// umPorSegundos();

// 1.2
// async function getUserFromGithub(user) {

//     const response = await axios.get(`https://api.github.com/users/${user}`)
//     console.log(response.data)

//     const err = await console.log('Usuário não existe');

// }
// getUserFromGithub('diego3g');
// getUserFromGithub('diego3g124123');

// 1.3
// const Axios = require('axios');

// class Github {
//     static async getRepositories(repo) {

//         const response = await axios.get(`https://api.github.com/repos/${repo}`)
//         console.log(response.data);

//         const err = await
//         console.log('Repositório não existe');

//     }
// }
// Github.getRepositories('rocketseat/rocketseat.com.br');
// Github.getRepositories('rocketseat/dslkvmskv');

// 1.4
const buscaUsuario = async usuario => {

    const response = await axios.get(`https://api.github.com/users/${user}`)
    console.log(response.data);

    const err = await console.log('Usuário não existe');
}
buscaUsuario('diego3g');