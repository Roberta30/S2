var marks = [35,38,42,45,43,34,46,41,48,32];


function setup() 
{
  createCanvas(400,400);


  //PESQUISAS QUE EU FIS

  //O laço For é recomendado para ser usado quando temos um número fixo de iterações necessárias para o loop.

  //O laço for é uma estrutura de repetição muito utilizada nos programas em C. É muito útil
  //quando se sabe de antemão quantas vezes a repetição deverá ser executada.
  //Este laço utiliza uma variável para controlar a contagem do loop, bem como seu incremento.

  //A sintaxe do for é a seguinte: for(inicialização, condição, iteração) { faça... } 
  //O for é um loop mais simples que o while. O while é algo muito poderoso,
  //porém mais utilizado quando queremos fazer algo recursivo (aprenderemos sobre isso depois).

  //https://woliveiras.com.br/posts/la%C3%A7os-de-repeti%C3%A7%C3%A3o-for-for-in-for-of/
  //https://medium.com/reactbrasil/como-o-javascript-funciona-entendendo-as-fun%C3%A7%C3%B5es-e-suas-formas-de-uso-eb387c7fa138
  //https://www.cprogressivo.net/2013/02/O-que-e-para-que-serve-e-como-usar-o-laco-FOR-em-C.html
  //https://cursos.alura.com.br/forum/topico-nao-entendi-como-o-for-funciona-105562
  //https://blog.betrybe.com/for-java/
  //https://pt.stackoverflow.com/questions/247952/como-funciona-o-for

  for(var c = 0; c < marks.length; c++){

    if(marks[c] >= 35){
      console.log(marks[c]);

    }

  }

}

function draw() 
{
  background(30);
}

 

