let problemas = [
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
        explicacion: [
            {
                title: 'function( nums, target)',
                descripcion: [
                    'La función tiene 2 argumentos nums (Array de numeros) y target (Número que representa la suma objetivo).',
                    'El objetivo de la función es encontrar dos índices en el arreglo nums cuyos valores sumen exactamente target.'
                ]
            },
            {
                title: 'for( let i = 0; i < nums.length; i++)',
                descripcion: [
                    'Recorre el array nums, comenzando desde i = 0.'
                ]
            },
            {
                title: 'for( let j = i + 1; i < nums.length; j++)',
                descripcion: [
                    'Recorre el array nums, comenzando desde j = i + 1.'
                ]
            },
            {
                title: 'if (nums[ i ] + nums[ j ] == target)',
                descripcion: [
                    'Este condicional verfica si nums[i] + nums[j] es igual a target.'
                ]
            },
            {
                title: 'return[ i, j ]',
                descripcion: [
                    'En caso de la condición anterior fuera correcta retornamos las posiciones de los valores i y j.',
                ]
            },
            {
                title: 'Observación',
                descripcion: [
                    'En el enuciado del ejercicio nos mensionan que siempre va a ver una respuesta correcta, por lo tanto no necesitamos que halla un retorno de error.'
                ]
            }
            
        ],
        imagen: './imagenes/desafios/twoSum.png',
        dificultad: 'Easy',
        desafio: 'https://leetcode.com/problems/two-sum/description/'
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
        desafio: 'https://leetcode.com/problems/palindrome-number/description/',
        explicacion: [
            {
                title: 'var reverse = 0',
                descripcion: [ 'Esta variable almacenará el número invertido.' ]
            },
            {
                title: 'var copy = x',
                descripcion: [ 'Realizamos una copia del número original, para no modificarlo.' ]
            },
            {
                title: 'while (copy > 0) { }',
                descripcion: [ 'Este ciclo se ejecuta mientras copy sea mayor que 0, lo que significa que se procesarán los dígitos de COPY uno por uno.' ]
            },
            {
                title: 'const digit = copy % 10',
                descripcion: [ 'Este ciclo se ejecuta mientras copy sea mayor que 0, lo que significa que se procesarán los dígitos de COPY uno por uno.' ]
            },
        ]
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
    let ul = crearElemento('ul')
    desafios.forEach(UnDesafio => {
        let li = crearElemento('li', 'card')
        let img_desafio = crearImagen('',UnDesafio.imagen, `imagen de UnDesafio ${UnDesafio.nombre}`)
        let div_info = crearElemento('div', 'info')
        let titulo_desafio = crearEncabezado('h3', '', UnDesafio.nombre.toUpperCase())
        let enuciado_desafio = crearParrafo('m truncado', UnDesafio.enunciado)
        let link_desafio = crearLink(UnDesafio.desafio, 'Ir a leetCode', '¿Quieres intentarlo?', '', './imagenes/iconos/sitio-web.png', 'Icono tipo Link' )
        let button_desafio = crearButton('', 'Ver Solución', () => {crearSolucion(UnDesafio)})
        let div_dificultad = crearElemento('div', 'dificultad')
        let dificultad = crearParrafo('', UnDesafio.dificultad) 
        
        div_info.append(titulo_desafio, enuciado_desafio, link_desafio, button_desafio)
        div_dificultad.append(dificultad)
        li.append(img_desafio, div_info, div_dificultad)
        ul.append(li)
    });
    return ul
}
function crearSolucion(UnDesafio){
    let main = document.querySelector('main')
    let modal = crearElemento('section', 'desafioExpandido')
    modal.addEventListener('click', () => removerElemento(modal))
    let div = crearElemento('div')
    div.addEventListener('click', (e) => { e.stopPropagation(); })
    let div_title = crearEncabezado('h2','', `${UnDesafio.id} | ${UnDesafio.nombre} <span>${UnDesafio.dificultad}</span>`)
    let div_enunciado = crearElemento('div', 'desafioExpandido__enunciado')
    let div_enunciado__title = crearEncabezado('h3', 'subtitulo', 'Enunciado:')
    let div_enunciado__parrafo = crearParrafo('ejemplo', UnDesafio.enunciado)
    div_enunciado.append(div_enunciado__title, div_enunciado__parrafo)
    div.append(div_title ,div_enunciado)
    UnDesafio.ejemplos.forEach((ej, index) => {
        let contenedor = crearElemento('div', 'tituloTextoFondo')
        let contenedor_titulo = crearEncabezado('h3', 'subTitulo', `Ejemplo: ${index+1}`)
        let contenedor_parrafoInput = crearParrafo('ejemplo', `Input: <span class="destacar">${ej.input}</span>`) 
        let contenedor_parrafoOutput = crearParrafo('ejemplo', `Output: <span class="destacar">${ej.output}</span>`) 
        let contenedor_parrafoSubtitulo = crearParrafo('enunciado', 'Explicación:')
        let contenedor_parrafoExplicacion = crearParrafo('ejemplo', `${ej.explicacion}`)
        contenedor.append(contenedor_titulo, contenedor_parrafoInput, contenedor_parrafoOutput, contenedor_parrafoSubtitulo, contenedor_parrafoExplicacion)
        div.append(contenedor)
    })
    let div_solucion = crearElemento('div', 'desafioExpandido__solucion')
    let div_solucion_title = crearEncabezado('h3', 'subTitulo', 'Solución de JavaScript: ')
    let div_solucion_imagen = crearImagen('', UnDesafio.imagen, `Solición desafio ${UnDesafio.nombre}`)
    let div_solucion_subTitulo = crearEncabezado('h3', 'subTitulo', 'Explicación.')
    div_solucion.append(div_solucion_title, div_solucion_imagen, div_solucion_subTitulo)
    let contenedor = crearElemento('div', 'tituloTextoFondo')
    UnDesafio.explicacion?.forEach( (linea, index) => {
        let contenedor__titulo = crearParrafo('enunciado', `${index}. ${linea.title}`)
        contenedor.append(contenedor__titulo)
        linea.descripcion.forEach( texto => {
            let parrafo = crearParrafo('ejemplo', texto)
            contenedor.append(parrafo)
        })
        div_solucion.append(contenedor)
    })
    let div_btnCerrar = crearButton('cerrarModal', 'X', () => removerElemento(modal))
    div.append(div_solucion, div_btnCerrar)
    


    modal.append(div)
    main.append(modal)  
}
function crearElemento(elemento, clase, ID){
    let elementoCreado = document.createElement(elemento)
    if(clase){
        elementoCreado.setAttribute('class', clase)
    }
    if(ID){
        elementoCreado.setAttribute('id', ID)
    }
    return elementoCreado
}
function crearImagen(clase = '', url, texto){
    let pic = crearElemento('picture', clase)
    let img = crearElemento('img')
    img.src = url
    img.alt = texto
    pic.append(img)
    return pic
}
function crearEncabezado(h, clase, texto){
    let encabezado = crearElemento(h, clase)
    encabezado.innerHTML = texto
    return encabezado
}
function crearParrafo(clase, texto){
    let p = crearElemento('p', clase)
    p.innerHTML = texto
    return p
}
function crearLink(destino, title, texto, iconoClase, iconoUrl, iconoTexto){
    let a = crearElemento('a')
    a.setAttribute('href', destino)
    a.setAttribute('title', title)
    a.innerText = texto
    if(iconoUrl){
        let icon = crearImagen(iconoClase, iconoUrl, iconoTexto)
        a.append(icon)
    }
    /*
        Al imprimir el elemento a por primera vez no muestra el contenido en consola.
        console.log(a)
        pero si imprimimos buscando los elementos img si los contine
        console.log(a.querySelector('img'))
    */
    return a
}
function crearButton(clase, texto, funcion, iconoClase, iconoUrl, iconoTexto){
    let button = crearElemento('button', clase)
    button.innerText = texto
    button.addEventListener('click', funcion )
    if(iconoUrl){
        let icon = crearImagen(iconoClase, iconoUrl, iconoTexto)
        button.append(icon)
    }
    return button
}
function removerElemento(elemento){
    elemento.remove()
}
