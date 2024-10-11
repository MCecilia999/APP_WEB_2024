function operacion() {
    let n1, n2, tipoope, ope;
    n1 = parseFloat(document.getElementById("n1").value);
    n2 = parseFloat(document.getElementById("n2").value);
    tipoope = document.getElementById("tipo").value;
    ope;

    if (isNumber(n1) && isNumber(n2))

    switch (tipoope) {
        case "+":
            ope = n1 + n2;
            break;
        case "-":
            ope = n1 - n2;
            break;
        case "*":
            ope = n1 * n2;
            break;
        case "/":
            ope = n1 / n2;
            break;
    }

    let resul = document.getElementById("resultado");
    resul.innerHTML = `<h2>${n1} ${tipoope} ${n2} = ${ope}</h2>`; // Aquí debes usar backticks (`) para crear una plantilla de cadena
    reult
}


function isNumber(n)
{
    return !isNaN(parseFloat(n)&& isFinite(n))
}
