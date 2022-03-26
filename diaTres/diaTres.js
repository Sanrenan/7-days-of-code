const area = prompt("Você quer seguir para área de 'Front-End' ou de 'Back-end'? Digite o nome da área:  ");

let linguagem = "";

if (area === "Front-End")
{
    linguagem = prompt("Você quer aprender React ou Vue?");
}

else if (area === "Back-End")
{
    linguagem = prompt("Você quer aprender C# ou Java?");

}

else
{
    alert("Você não inseriu uma área válida! ");
}

const continuacaoAprendizado = prompt("Digite 1 para seguir se especializando na área escolhida ou 2 para mudar o foco para se tornar Fullstack");

if (continuacaoAprendizado == 1)
{
    alert(`continue se especializando em ${linguagem} para dominar a área de ${area}`);
}

else if (continuacaoAprendizado == 2)
{
    alert(`Chegou a hora de começar a aprender outras linguagens além de ${linguagem} se você quiser se tornar Fullstack!`);

}

else
{
    alert("Digite uma opção válida!");

}

let msg = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo.");
while (msg === "ok")
{
    let novaTecnologia = prompt("Qual?");
    alert(`${novaTecnologia} é realmente uma tecnologia muito legal!`)
    msg = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo.");
}