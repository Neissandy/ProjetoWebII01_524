function idosos(obj){
    return obj.idade >= 60;
}

let pessoa1 = {nome : prompt("Nome1: "), idade : (prompt("Idade1: "))}
let pessoa2 = {nome : prompt("Nome2: "), idade : (prompt("Idade2: "))}
let pessoa3 = {nome : prompt("Nome3: "), idade : (prompt("Idade3: "))}
let pessoa4 = {nome : prompt("Nome4: "), idade : (prompt("Idade4: "))}

let pessoas = [pessoa1, pessoa2, pessoa3, pessoa4]


let idosos2 = pessoas.filter(idosos);

//OBS: Não conseguimos fazer o programa mostrar a lista de idosos para o usuário.
//Era retornado na tela: [object Object]
console.log(Object.values(idosos2));

