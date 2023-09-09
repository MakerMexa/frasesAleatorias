const frases = [
    'Donde una puerta se cierra, otra se abre',
    'Seamos los líderes que hubiéramos deseado tener',
    'intenta y falla, pero nunca falles en intentarlo',
    'Si te caiste ayer, levantate hoy',
    'Si todos avanzamos juntos, el éxito llegará solo',
    'Un hombre puede ser imprescindible para un equipo, pero ningún equipo está compuesto por un solo hombre',
    'Debemos buscar para nuestros males una causa que no sea Dios',
    'El hombre sabio querrá estar siempre con el que es mejor que él',
    'El mayor riesgo es no correr ningún riesgo.'
];

const mostrarFrase = (elementoDom) => {
    let frase = frases[Math.floor(Math.random() * 9)];
    elementoDom.innerText = `"${frase}"`;
}

const cambiaColor = (elementoDom) => {
    elementoDom.style.background = '#766df4'
};

const recursos = {
    mostrarFrase,
    cambiaColor,
}

export{ recursos as default }

