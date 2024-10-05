let statusNivel = 0;
while (true) {
  let nomeHeroi = prompt("Digite o nome do herói: ");
  let xpHeroi = parseInt(prompt("Digite a quantidade de XP: "));
  if (xpHeroi <= 1000) {
    statusNivel = "Ferro";
  } else if (xpHeroi < 2001) {
    statusNivel = "Bronze";
  } else if (xpHeroi < 5001) {
    statusNivel = "Prata";
  } else if (xpHeroi < 7001) {
    statusNivel = "Ouro";
  } else if (xpHeroi < 8001) {
    statusNivel = "Platina";
  } else if (xpHeroi < 9001) {
    statusNivel = "Ascendente";
  } else if (xpHeroi < 10001) {
    statusNivel = "Imortal";
  } else {
    statusNivel = "Radiante";
  }

  alert(`O herói ${nomeHeroi} está no nível de ${statusNivel}`);

  let opcao = parseInt(prompt("Deseja continuar: [1]SIM / [2]Não"));

  if (opcao === 2) {
    break;
  }
}
