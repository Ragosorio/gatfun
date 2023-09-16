const messages = [
    "¿Por qué los programadores siempre confunden la Navidad con Halloween? Porque Oct 31 == Dec 25.",
    "¿Cuál es el colmo de un electricista? No encontrar su corriente de trabajo.",
    "¿Cómo se llama el campeón de programación en Kenia? Kumite.",
    "¿Cómo se llama el campeón de programación en Japón? Nomoara Kintengo.",
    "¿Qué es un terapeuta para un programador? Un byte-psicólogo.",
    "¿Qué le dice un HTML a otro HTML? ¿Me entiendes?",
    "Un ingeniero de software pobre y uno rico se chocan en sus autos... El pobre dice: ¡Tengo un seguro! y el rico contesta: ¡Yo tengo un buen Backup!",
    "¿Por qué los programadores siempre confunden la leche con el código? Porque en ambos casos una 'u' y una 'n' están faltando.",
    "¿Qué le dice un .gif a un .jpg? Anímate, hombre.",
    "¿Por qué los programadores no les gusta la naturaleza? Es confusa. Todo tiene que ser un árbol o un animal.",
    "¿Qué es un programador? Un ser que convierte café en código.",
    "¿Qué le dice un array a otro array? ¿Me das tu dirección?",
    "¿Cuál es el colmo de un algoritmo? Tener malos resultados.",
    "¿Qué es un programador bicicleta? Uno que no tiene coche.",
    "¿Cuál es el animal más antiguo? La cebra (ce-bra).",
    "¿Cómo se llama el campeón de programación en la selva? Tarzán.",
  ];
  
  const funnyCommit = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    const messageBorder = "|-" + "-".repeat(message.length) + "-|\n" + `| ${message} |\n` + "|_" + "_".repeat(message.length) + "_|\n"
    console.log(`${messageBorder}
             /
            /
        /\\_/\\
        ( o.o )
         > ^ < 
         /__\\
          ||  
    `);
  }
  
  module.exports = {
    funnyCommit
  };