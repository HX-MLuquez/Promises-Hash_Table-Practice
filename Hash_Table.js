// --------------->>>>>>> HASH TABLES . BY DATE Structure <<<<<<<<------

// HASH Table base simple con value true o tb con value numérica

// Toma una array y lo pasa a objeto hash a modo de usar para comparar y optimizar recursos

// let arrayText = ['La casa vacía se envolvió de ti, de unos niños jugando; algo así.']
// let arrayNum = [1,4,32,76,5,4,2,87,5]; // es muy extraño, le asigna un id raro y los ordena de mayor a menor jua jua


// Creando un Hash Table para comparar palabras y ver si están repetidas
// 
// function hashDictionaryObject(array) {
//     const objetoHashDictionary = {};
//     if(typeof array[0] === 'string') {
//         array = array[0].replace(',', '').replace(';', '').replace('.', '').split(' ');
//     }
//         objetoHashDictionary[array[0]] = 1;
//         console.log('objetoHashDictionary is ___ ', objetoHashDictionary);
//     for (let i = 1; i < array.length; i++) {
//         //objetoHashDictionary[array[i]] = true;
//         objetoHashDictionary[array[i]] = 1 + objetoHashDictionary[array[i-1]]
//         console.log('value', objetoHashDictionary[array[i]])
//     }
//     return objetoHashDictionary;
// };

// console.log(hashDictionaryObject(arrayText));
// console.log(hashDictionaryObject(arrayNum));



// //---------------- todo esto es de la function normalize que viene para unicode de es6 y nosotros acá
// // nada que ver , lo que creamos es una function que normalice las palabras en cuanto a que todas
// // sean minúsculas y demas para que se puedan comparar bien

// // let textoString222 = 'En ún lúgar de la Máncha, viajaban un caballero y su ayudante. Cual genio uno y loco el otro';
// // let normalizado = textoString222.normalize('NFKC');
// // console.log(textoString === textoString222);
// // console.log(textoString === normalizado);


let textoString = 'En un lugar de la Mancha, viajaban un caballero y su ayudante. Cual genio uno y loco el otro';

function normalize(text){
    return text.toLowerCase().replace(',', '').replace(';', '').replace('.', ''); //etc según necesitemos
};

function wordRepetitions (text){
    let dictionaryHash = {}; // tipo typescript (use strict) es let dictionaryHash: {[key:string]:number} = {};
    let separatedWords = text.split(' '); // crea un array con todas las palabras separadas
    console.log('text',text);
    console.log('separatedWords', separatedWords)
    for (const word of separatedWords) {  // como toma el array para recorrer usamos for of y NOOO for in jua
        console.log('itera word',normalize(word));
        if (normalize(word) in dictionaryHash) {
            // ++dictionaryHash[normalize(word)]; // de ya estar ahora incrementa 1
            dictionaryHash[normalize(word)] = dictionaryHash[normalize(word)] + 1;
        } else {
            dictionaryHash[normalize(word)] = 1; // esta es su primera aparición
        }
    }
    return dictionaryHash;
}

console.log(wordRepetitions(textoString));




//-----------------------------------------------------------------------------

//CODE HASH RARE
let arrayNum = [1, 4, 32, 76, 5, 4, 2, 87, 5]; // es muy extraño, le asigna un id raro y los ordena de mayor a menor jua jua
let arrayMasComplejoNum = [88, 54, 88, 5, 1, 4, 32, 76, 5, 2, 2, 1, 4, 2, 87, 5, 325, 77777, 0]
function hashDictionaryObject(array) {
    const objHashDict = {};
    objHashDict[array[0]] = 1;
    for (let i = 1; i < array.length; i++) {
        //objHashDict[array[i]] = true;
        console.log('número a pasar como propiedad', array[i])
        objHashDict[array[i]] = 1 + (i-1);
        console.log('value', objHashDict[array[i]])
    }
    return objHashDict; // Nos crea un objeto muy bueno donde ordena los números de mayor a menor
                        // tb elimina las repeticiones, y nos devuelve como value la posición donde se encontraban en el array, en el caso de
                        // que se repiten nos devuelve el del que está en la última posición.
};

console.log(hashDictionaryObject(arrayNum));
console.log(hashDictionaryObject(arrayMasComplejoNum));


let decadas = [1950, 1960, 1970, 1980, 1990, 2000, 2010]
console.log(decadas[0])
function newe (o){
    for (let i = 0; i < o.length; i++) {
        console.log(i);
        console.log(o[i]);
    }
};
newe(decadas);

// -------

// Creando un objeto con números paso a paso para ver si se ordena solo de mayor a menor

let objetoAampliar = {
    1: 'b',
    13: 'n'
};
console.log(objetoAampliar);
objetoAampliar[11] = 'm';
console.log(objetoAampliar);
objetoAampliar[27] = 'x';
console.log(objetoAampliar);
objetoAampliar[0] = 'a';
console.log(objetoAampliar);

let objetStringAmpliando = {
    name: 'Mauro',
    edad: '43'
};
console.log(objetStringAmpliando);
objetStringAmpliando['a'] = 'casa';
console.log(objetStringAmpliando);
// Conclusión, los objetos en javascript que contienen key como números se auto ordenan pero
// los que son string como key no se auto ordenan
objetStringAmpliando['a'] = 'cueva';
console.log(objetStringAmpliando);
// y ninguna key se puede repetir, cada key es única, cual name de una variable
// por ello las propiedades de un objeto son similares a las variables en cuanto a su
// name (cual key) y su value.