let currentDice;

function showStartScreen() {
    document.getElementById('start-screen').classList.add('active');
    document.getElementById('dice-screen').classList.remove('active');
}

function selectDice(dice) {
    currentDice = dice;
    document.getElementById('dice-title').innerText = `Rolar um ${dice}`;
    document.getElementById('dice-result').innerText = '';
    document.getElementById('start-screen').classList.remove('active');
    document.getElementById('dice-screen').classList.add('active');
}

function rollDice() {
    let max;
    switch (currentDice) {
        case 'd2':
            max = 2;
            break;
        case 'd4':
            max = 4;
            break;
        case 'd6':
            max = 6;
            break;
        case 'd8':
            max = 8;
            break;
        case 'd10':
            max = 10;
            break;
        case 'd12':
            max = 12;
            break;
        case 'd20':
            max = 20;
            break;
        case 'd30':
            max = 30;
            break;
        case 'd100':
            max = 100;
            break;
    }
    const result = Math.floor(Math.random() * max) + 1;
    document.getElementById('dice-result').innerText = `Resultado: ${result}`;
}

// Mostrar a tela inicial ao carregar a página
showStartScreen();
