function calc_terreno() {
    var comp = document.getElementById('comp').value;
    var larg = document.getElementById('larg').value;
    var dimensao

    if (comp == "") {
        document.getElementById('erro-comp').innerHTML = "Digite um valor";
        document.getElementById('comp').focus();
        return false;
    } else {
        document.getElementById('erro-comp').innerHTML = "";
    }

    if (larg == "") {
        document.getElementById('erro-larg').innerHTML = "Digite um valor";
        document.getElementById('larg').focus();
        return false;
    } else {
        document.getElementById('erro-larg').innerHTML = "";
    }

    if (dimensao = comp * larg) {
        document.getElementById('resultadoTerreno').removeAttribute('hidden');
        document.getElementById('limparTerreno').removeAttribute('hidden');
        document.getElementById('resultadoTerreno').innerHTML = `A dimensão do terreno é ${dimensao} m2.`;
    }
}

function calc_ferraduras() {
    var cavalos = document.getElementById('cavalos').value;
    var ferraduras

    if (cavalos == "") {
        document.getElementById('erro-cavalos').innerHTML = "Digite um valor";
        document.getElementById('cavalos').focus();
        return false;
    } else {
        document.getElementById('erro-cavalos').innerHTML = "";
    }

    if (ferraduras = cavalos * 4) {
        document.getElementById('resultadoFerraduras').removeAttribute('hidden');
        document.getElementById('limparFerraduras').removeAttribute('hidden');
        document.getElementById('resultadoFerraduras').innerHTML = `Você irá precisar de ${ferraduras} ferraduras para seus ${cavalos} cavalos.`;
    }
}