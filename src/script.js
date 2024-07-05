
//Variaveis
const rank = [
    "Iniciante", "Ferro", "Bronze", "Prata", "Ouro", "Diamante", "Lendário", "Imortal"
]

function rankeadas(vitorias, derrotas){
  saldoVitorias = vitorias - derrotas;

  if(saldoVitorias >= 1 && saldoVitorias <= 10){
    return`O Herói tem ${saldoVitorias} vitórias, seu nível de Rank é ${rank[1]}`; // Ferro

  }else if(saldoVitorias >= 11 && saldoVitorias <= 20){
    return`O Herói tem ${saldoVitorias} vitórias, seu nível de Rank é ${rank[2]}`; // Bronze

  }else if(saldoVitorias >= 21 && saldoVitorias <= 50){
    return`O Herói tem ${saldoVitorias} vitórias, seu nível de Rank é ${rank[3]}`; // Prata

  }else if(saldoVitorias >= 51 && saldoVitorias <= 80){
    return`O Herói tem ${saldoVitorias} vitórias, seu nível de Rank é ${rank[4]}`; // Ouro

  }else if(saldoVitorias >= 81 && saldoVitorias <= 90){
    return`O Herói tem ${saldoVitorias} vitórias, seu nível de Rank é ${rank[5]}`; // Diamante

  }else if(saldoVitorias >= 91 && saldoVitorias <= 100){
    return`O Herói tem ${saldoVitorias} vitórias, seu nível de Rank é ${rank[6]}`; // Lendário

  }else if(saldoVitorias >= 101){
    return`O Herói tem ${saldoVitorias} vitórias, seu nível de Rank é ${rank[7]}`; // Imortal

  }else{
    return`O Heroi é um ${rank[0]}`; // Iniciante
  }  
}


for (let repeatRank = 0; repeatRank <= 4; repeatRank++){
    console.log(rankeadas(15, 20));
    console.log(rankeadas(45, 20));

}