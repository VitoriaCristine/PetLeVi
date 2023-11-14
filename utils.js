export function validarEmail(email) {
    // Expressão regular para validar o formato do e-mail
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Testa se o e-mail corresponde à expressão regular
    return regex.test(email);
}

