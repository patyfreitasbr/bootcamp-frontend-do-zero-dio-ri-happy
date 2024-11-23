const nota1 = 10;
const nota2 = 1;
const nota3 = 10;

const media = (nota1 + nota2 + nota3) / 3;
console.log(media);

if (media < 5) {
    console.log('reprovacao');
} else if (media >= 5 && media <=7) {
    console.log('recuperação');
} else{
    console.log('passou de semestre');
}
    
    

