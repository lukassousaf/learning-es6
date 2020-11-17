const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

// 2.1 Utilizando o map
// const map = usuarios.map(usuario => usuario.idade);
// console.log(map);

// 2.2 Utilizando o filter
// const filter = usuarios.filter(usuario => usuario.empresa === 'Rocketseat' && usuario.idade >= 18)
// console.log(filter);

// 2.3 Utilizando o find
// const find = usuarios.find(usuario => usuario.empresa === 'Google');
// console.log(find);

// 2.4 Unindo operações
// const novaIdade = usuarios.map(users => ({...users, idade: users.idade * 2 })).filter(users => users.idade <= 50)
// console.log(novaIdade)