/*
    Descrição: Atividade 1 da disciplina Lógica de Programação do Curso PFE/2021 - Turma 3 - SENAI
    Objetivo: Testar conhecimentos de Lógica de Programação, para um simulado
              sistema de cadastro para Eventos da empresa Savinis, utilizando-se
              de fluxograma, pseudocódigo e a LP JavaScript, com seus códigos
              mais fundamentais, tais como: tipos de variáveis, estrutura condicional e
              uma estrutura de repetição mais adequada ao propósito da atividade.
*/

let data1 = new Date(); //embora não tenha sido visto, consultei o Google para utilizar a data atual
let dataAtual = ((data1.getDate() )) + "/" + ((data1.getMonth() + 1)) + "/" + data1.getFullYear(); 

let data2= new Date("2022-03-23"); //data no formato AAA-MM-DD
let dataDoEvento = ((data2.getDate() )) + "/" + ((data2.getMonth() + 1)) + "/" + data2.getFullYear();

var xav = 0; //variável de controle para marcar sua passagem num determinado bloco de comandos

let idadeMinima = 18;

console.log(" ");
console.log("Data atual: " + dataAtual);
console.log("Data do Evento: " + dataDoEvento);
console.log(" ");

var arrayParticipante1 = ["Antônio José ", "Meyer", 55, "JavaScript"];//[Nome,Sobrenone,Idade,Evento]
var arrayParticipante2 = ["Alexandre Henrique de", "Paiva", 53, "JavaScript"];//[Nome,Sobrenone,Idade,Evento]
var arrayParticipante3 = ["Andréa Flávia ", "Guerreira", 17, "JavaScript"];//[Nome,Sobrenone,Idade,Evento]
var limiteDeParticipantes = 0;

if (data2 < data1)
{
    console.log(" ");
    console.log("Data inválida: Evento já aconteceu!");
    console.log(" ");
}
else 
{
    for (let indice = 0; indice < 3; indice++ ) //só imprime até 3 participante  
    {
        if ((indice == 0 && (arrayParticipante1[2])  >= idadeMinima ))
        {
            console.log (" ");
            console.log ("Nome do Aluno: " + arrayParticipante1[0]  );  
            console.log ("Sobrenome: " + arrayParticipante1[1] ); 
            console.log ("Idade: " + arrayParticipante1[2] );
            console.log ("Evento: " + arrayParticipante1[3] );
            console.log (" ");
            limiteDeParticipantes++;
        }   
        else 
        { 
            xav = 1;
        }
        if ((indice == 1 && (arrayParticipante2[2])  >= idadeMinima ))
        {
            console.log (" ");
            console.log ("Nome do Aluno: " + arrayParticipante2[0]  );  
            console.log ("Sobrenome: " + arrayParticipante2[1] ); 
            console.log ("Idade: " + arrayParticipante2[2] );
            console.log ("Evento: " + arrayParticipante2[3] );
            console.log (" ");
            limiteDeParticipantes++;
        } 
        else 
        { 
            xav = 2;
        }
        
        if ((indice == 2 && (arrayParticipante3[2])  >= idadeMinima ))
        {
            console.log (" ");
            console.log ("Nome do Aluno: " + arrayParticipante2[0]  );  
            console.log ("Sobrenome: " + arrayParticipante2[1] ); 
            console.log ("Idade: " + arrayParticipante2[2] );
            console.log ("Evento: " + arrayParticipante2[3] );
            console.log (" ");  
            limiteDeParticipantes++;
        }
        else 
        { 
            xav = 3;
        }
    }
    switch (xav)
    {
        case 1 : 
                {
                    console.log ("Nome do Aluno: " + arrayParticipante1[0]  );
                    console.log("Cadastro não permitido: Candidato menor de 18 anos!");
                    console.log(" ");
                    break;
                }
        case 2 : 
                {
                    console.log ("Nome do Aluno: " + arrayParticipante2[0]  );
                    console.log("Cadastro não permitido: Candidato menor de 18 anos!");
                    console.log(" ");
                    break;
                }
        case 3 : 
                {
                    console.log ("Nome do Aluno: " + arrayParticipante3[0]  );
                    console.log("Cadastro não permitido: Candidato menor de 18 anos!");
                    console.log(" ");
                    break;
                }
    }
    if (limiteDeParticipantes >= 3) //para simular capacidade esgotada
    {
        console.log(" ");
        console.log("Cadastro não permitido: Capacidade do Evento esgotada!");
        console.log(" ");
   }
   else
   {
        console.log(" ");
        console.log("Ainda há vaga(s) a ser(em) preenchida(s)!");
        console.log(" ");
   }
}
        

