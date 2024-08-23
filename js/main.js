let problemas =[
    {
        id: 1,
        nombre: 'Two Sum',
        enunciado: 'Dado un arreglo de números enteros y un objetivo entero, devuelve los índices de los dos números de manera que sumen el objetivo. Puedes suponer que cada entrada tendría exactamente una solución y no puedes usar el mismo elemento dos veces. Puedes devolver la respuesta en cualquier orden.',
        ejemplos: [
                {
                    input: 'nums = [2,7,11,15], target = 9',
                    output: '[0,1]',
                    explicacion: 'Tomamos el valor de las posiciones nums[0] + nums[1] y vemos que su suma nos da 9 que es igual al target, entonces devolvemos sus posiciones [0, 1].'
                },
                {
                    input: 'nums = [3,2,4], target = 6',
                    output: '[1,2]',
                    explicacion: 'Tomamos el valor de las posiciones nums[0] + nums[1] y vemos que su suma no nos da 6, entonces debemos probar las siguientes posiciones. Cuando tomamos nums[1] + nums[2] = 6, por lo tanto devolvemos [1,2].'
                }

            ],
        imagen: './imagenes/desafios/twoSum.png',
        dificultad: 'Easy',
        desafio: 'https://leetcode.com/problems/two-sum/'
    },
    {
        id: 2,
        nombre: 'Palindrome Number',
        enunciado: 'Dado un entero x, devuelve verdadero si x es un palíndromo, y falso en caso contrario.',
        ejemplos: [
                {
                    input: 'x = 121',
                    output: 'true',
                    explicacion: '121 reads as 121 from left to right and from right to left.'
                },
                {
                    input: 'x = -121',
                    output: 'false',
                    explicacion: 'From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.'
                },
                {
                    input: 'x = 10',
                    output: 'false',
                    explicacion: 'Reads 01 from right to left. Therefore it is not a palindrome.'
                }

            ],
        imagen: './imagenes/desafios/PalindromeNumber.png',
        dificultad: 'Easy',
        desafio: 'https://leetcode.com/problems/palindrome-number/description/'
    },
    {
        id: 3,
        nombre: 'Roman to Integer',
        enunciado: 'Dado un número romano, conviértalo en un entero.',
        ejemplos: [
                {
                    input: 's = "III"',
                    output: '3',
                    explicacion: 'III = 3.'
                },
                {
                    input: 's = "LVIII"',
                    output: '58',
                    explicacion: 'L = 50, V= 5, III = 3.'
                },
                {
                    input: 's = "MCMXCIV"',
                    output: '1994',
                    explicacion: 'M = 1000, CM = 900, XC = 90 and IV = 4.'
                }

            ],
        imagen: './imagenes/desafios/RomanToInteger.png',
        dificultad: 'Easy',
        desafio: 'https://leetcode.com/problems/roman-to-integer/description/'
    },
    {
        id: 4,
        nombre: 'Reverse String',
        enunciado: 'Escriba una función que invierta una cadena. La cadena de entrada se proporciona como una matriz de caracteres s. Debe hacer esto modificando la matriz de entrada en el lugar con O(1) memoria adicional.',
        ejemplos: [
                {
                    input: 's = ["h","e","l","l","o"]',
                    output: '["o","l","l","e","h"]',
                    explicacion: 'Tomanos el array inicial y lo volteamos'
                },
                {
                    input: 's = ["H","a","n","n","a","h"]',
                    output: '["h","a","n","n","a","H"]',
                    explicacion: 'Tomanos el array inicial y lo volteamos'
                }
            ],
        imagen: './imagenes/desafios/ReverseString.png',
        dificultad: 'Easy',
        desafio: 'https://leetcode.com/problems/reverse-string/description/'
    },
    {
        id: 5,
        nombre: 'Longest Palindrome',
        enunciado: 'Dada una cadena s que consta de letras minúsculas o mayúsculas, devuelve la longitud del palíndromo más largo que se puede construir con esas letras.',
        ejemplos: [
                {
                    input: 's = "abccccdd"',
                    output: '7',
                    explicacion: 'One longest palindrome that can be built is "dccaccd", whose length is 7.'
                },
                {
                    input: 's = "a"',
                    output: '1',
                    explicacion: 'The longest palindrome that can be built is "a", whose length is 1.'
                }
            ],
        imagen: './imagenes/desafios/LongestPalidrome.png',
        dificultad: 'Easy',
        desafio: 'https://leetcode.com/problems/longest-palindrome/description/'
    },
    {
        id: 6,
        nombre: 'Find Common Characters',
        enunciado: 'Dada una matriz de cadenas de palabras, devuelve una matriz de todos los caracteres que aparecen en todas las cadenas dentro de las palabras (incluidos los duplicados). Puedes devolver la respuesta en cualquier orden.',
        ejemplos: [
                {
                    input: 'words = ["bella","label","roller"]',
                    output: '["e","l","l"]',
                    explicacion: 'las letras ["e","l","l"] se repiten en todas las palabras del Array'
                },
                {
                    input: 'words = ["cool","lock","cook"]',
                    output: '["c","o"]',
                    explicacion: 'las letras ["e","l","l"] se repiten en todas las palabras del Array'
                }
            ],
        imagen: './imagenes/desafios/FindCommonCharacters.png',
        dificultad: 'Easy',
        desafio: 'https://leetcode.com/problems/find-common-characters/description/'
    }
    
]

let listaDesaffios = document.querySelector('.desafios .lista')
listaDesaffios.append(crearDesafios( problemas ))


function crearDesafios(desafios){
    let ul = document.createElement('ul')
    desafios.forEach(UnDesafio => {
        let li = document.createElement('li')
        li.classList.add('card')
        li.innerHTML = `
            <picture>
                <img src="${UnDesafio.imagen}" alt="imagen de UnDesafio ${UnDesafio.nombre}">
                <div class="dificultad">
                    <p>${UnDesafio.dificultad}</p>
                </div>
            </picture>
            <div class="info">
                <h3>${UnDesafio.nombre.toUpperCase()}</h3>
                <p class="m truncado">
                    ${UnDesafio.enunciado}
                </p>
                <a href="${UnDesafio.desafio}" title="Ir a leetCode"> 
                    Intentar resolverlo 
                    <picture>
                        <img src="./imagenes/iconos/sitio-web.png" alt="avatar de Leonardo Dillon">
                    </picture>
                </a>
                <button> Ver solución </button>
            </div>
        `
        li.querySelector('button').addEventListener('click', (e) => {
            crearSolucion(UnDesafio)
        })
        ul.append(li)
    });
    return ul
}
function crearSolucion(UnDesafio){
    let main = document.querySelector('main')
    let sectionRespuesta = crearEelemento('section', 'desafioExpandido')
    sectionRespuesta.addEventListener('click', () => {
        sectionRespuesta.remove()
    })
    let sectionRespuesta_div = crearEelemento('div')
    sectionRespuesta_div.addEventListener('click', (e) => {
        e.stopPropagation();
    }) 
    sectionRespuesta_div.innerHTML = `
        <h2>${UnDesafio.id} | ${UnDesafio.nombre} <span>${UnDesafio.dificultad}</span></h2>
        <div class="desafioExpandido__enunciado">
            <h3 class="subTitulo">Enunciado:</h3>
            <p class="ejemplo">
                ${UnDesafio.enunciado}
            </p>
        </div>
    `
    UnDesafio.ejemplos.forEach( (ej, index) => {
        sectionRespuesta_div.innerHTML += `
            <div class="desafioExpandido__ejemplo">
                <h3 class="subTitulo">Ejemplo ${index}:</h3>
                <p class="ejemplo">
                    Input: <span class="destacar">${ej.input}</span>
                </p>
                <p class="ejemplo">
                    Output: <span class="destacar">${ej.output}</span>
                </p>
                <p class="enunciado">Explicación: </p>
                <p class="ejemplo">${ej.explicacion}</p>
            </div>
        `
    })
    sectionRespuesta_div.innerHTML += `
        <div class="desafioExpandido__solucion">
            <h3 class="subTitulo">Solucion de JavaScript:</h3>
            <picture>
                <img src="${UnDesafio.imagen}" alt="Solucion desafio ${UnDesafio.nombre}">
            </picture>
            <p class="enunciado">Explicación</p>
            <p class="ejemplo">
            </p>
        </div>
    `
    let btn_cerrarModal = crearEelemento('button', 'cerrarModal')
    btn_cerrarModal.innerText = 'X'
    btn_cerrarModal.addEventListener('click', (e) => {
        sectionRespuesta.remove()
    })
    sectionRespuesta_div.append(btn_cerrarModal)
    sectionRespuesta.append(sectionRespuesta_div)
    main.append(sectionRespuesta)
}
function crearEelemento(elemento, clase, ID){
    let elementoCreado = document.createElement(elemento)
    if(clase){
        elementoCreado.classList.add(clase)
    }
    if(ID){
        elementoCreado.setAttribute('id', ID)
    }
    return elementoCreado
}
