var peso = [35, 38, 40, 48];

function media(){
  var soma = peso[0] + peso[1] + peso[2] + peso[3];
  var media = soma / peso.length;
  console.log(media);
}

function setup() 
{
  createCanvas(400,400);
  media();
}

function draw() 
{
background(51);

}

