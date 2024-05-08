# Desafio 1️⃣ - Classificador de Nível de Herói

**O que vai ser utilizado?**
- Variáveis
- Operadores
- Laços de repetição
- Estrutura de Decisões

## Objetivo
>*Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói , depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:*
- [x] XP < 1000 = FERRO
- [x] XP > 1000 && <= 2000 = BRONZE
- [x] XP > 2000 && <= 5000 = PRATA
- [x] XP > 5000 && <= 6000 = OURO
- [x] XP > 6000 && <= 7000 = PLATINA
- [x] XP > 7000 && <= 8000 = DIAMANTE
- [x] XP > 8000 && <= 9000 = ASCENDENTE
- [x] XP > 9000 && <= 10000 = IMORTAL
- [x] XP > 10000 = RADIANTE
>

## Saída 
*Ao final deve exibir a mensagem a seguir*
>O herói de nome **{nome}** está no nível de **{nível}**
>

## Linha a Linha

**Variáveis**
```js
var nome, xp
```

**Atribuindo valores**
```js
nome = "Turzin244"
xp = 6550
```

**Classificação de nível e Mundança de cor para cada um**
```js
        if(xp <= 1000)
        {
            nivel = "FERRO";
            corDeFundoNivel = "\x1B[48;2;108;104;112m"
        }else if(xp > 1000 && xp <= 2000){
            nivel = "BRONZE"
            corDeFundoNivel = "\x1B[48;2;205;127;50m"
        }else if(xp > 2000 && xp <= 5000){
            nivel = "PRATA"
            corDeFundoNivel = "\x1B[48;2;192;192;192m"
        }else if(xp > 5000 && xp <= 6000){
            nivel = "OURO"
            corDeFundoNivel = "\x1B[48;2;255;215;0m"
        }else if(xp > 6000 && xp <= 7000){
            nivel = "PLATINA"
            corDeFundoNivel = "\x1B[48;2;191;192;190m"
        }else if(xp > 7000 && xp <= 8000){
            nivel = "DIAMANTE"
            corDeFundoNivel = "\x1B[48;2;10;186;181m"
        }else if(xp > 8000 && xp <= 9000){
            nivel = "ASCENDENTE"
            corDeFundoNivel = "\x1B[48;2;0;128;128m"
        }else if(xp > 9000 && xp <= 10000){
            nivel = "IMORTAL"
            corDeFundoNivel = "\x1B[48;2;223;32;32m"
        }else if(xp > 10000){
            nivel = "RADIANTE"
            corDeFundoNivel = "\x1B[48;2;223;175;32m"
        }
```

**Saida**
```js
console.log(`O heroi de nome ${nome} está no nível ${corDeFundoNivel}${nivel}\x1B[0m com ${xp} XP`)
```

>Aqui é usado as variáveis e os Ansi Escape Code, códigos no qual são usados para a formatação de textos e afins em terminais (Funcionando também no console do navegador);
>