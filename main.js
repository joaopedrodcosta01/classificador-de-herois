// Variáveis
    var nome,xp,nivel
    var corDeFundoNivel,corDeTextoNivel

// Atributos das variáveis
    nome = "Turzin244"
    xp = 6550

// Classificando Niveis
    // Para cada nível foi utilizado o "Ansi Escape Code" para a mudança de cor
    if(xp <= 1000)
        {
            nivel = "FERRO";
            corDeFundoNivel = "\x1B[48;2;108;104;112m"
            corDeTextoNivel = "\x1B[30m";
        }else if(xp > 1000 && xp <= 2000){
            nivel = "BRONZE"
            corDeFundoNivel = "\x1B[48;2;205;127;50m"
            corDeTextoNivel = "\x1B[30m";
        }else if(xp > 2000 && xp <= 5000){
            nivel = "PRATA"
            corDeFundoNivel = "\x1B[48;2;192;192;192m"
            corDeTextoNivel = "\x1B[30m";
        }else if(xp > 5000 && xp <= 6000){
            nivel = "OURO"
            corDeFundoNivel = "\x1B[48;2;255;215;0m"
            corDeTextoNivel = "\x1B[30m";
        }else if(xp > 6000 && xp <= 7000){
            nivel = "PLATINA"
            corDeFundoNivel = "\x1B[48;2;191;192;190m"
            corDeTextoNivel = "\x1B[30m";
        }else if(xp > 7000 && xp <= 8000){
            nivel = "DIAMANTE"
            corDeFundoNivel = "\x1B[48;2;10;186;181m"
            corDeTextoNivel = "\x1B[37m";
        }else if(xp > 8000 && xp <= 9000){
            nivel = "ASCENDENTE"
            corDeFundoNivel = "\x1B[48;2;0;128;128m"
            corDeTextoNivel = "\x1B[30m";
        }else if(xp > 9000 && xp <= 10000){
            nivel = "IMORTAL"
            corDeFundoNivel = "\x1B[48;2;223;32;32m"
            corDeTextoNivel = "\x1B[37m";
        }else if(xp > 10000){
            nivel = "RADIANTE"
            corDeFundoNivel = "\x1B[48;2;223;175;32m"
            corDeTextoNivel = "\x1B[37m";
    }

    console.log(`O heroi de nome ${nome} está no nível ${corDeFundoNivel}${corDeTextoNivel}${nivel}\x1B[0m com ${xp} XP`)