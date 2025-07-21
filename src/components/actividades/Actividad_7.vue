    <script setup>
        import { ref } from 'vue'
        import Ejemplo from '../Ejemplo.vue'
    import TextCode from '../codeUI/TextCode.vue'
        
        const resp = ref("")
        const carga = ref(false)
        
        function function_twoSum(nums){
            setTimeout(() => {
                carga.value = false
            },500)
            document.querySelector("#res").scrollIntoView({behavior: 'smooth'})

            let valorAnterior = 100
            let valoresDistintos = 0
            for ( let i = 0; i < nums.length; i++ ) {
                if ( valorAnterior == nums[ i ] ) {
                } else {
                    valorAnterior = nums[ i ]
                    nums[ valoresDistintos ] = valorAnterior
                    valoresDistintos ++
                }
            }        
            for (let i = valoresDistintos; i < nums.length; i++) {
                nums[i] = "_"
                
            }
            return [ valoresDistintos, nums ]
        }

        let text = `
            let valorAnterior = 100
            let valoresDistintos = 0
            for ( let i = 0; i < nums.length; i++ ) {
                if ( valorAnterior == nums[ i ] ) {
                } else {
                    valorAnterior = nums[ i ]
                    nums[ valoresDistintos ] = valorAnterior
                    valoresDistintos ++
                }
            }        
            for (let i = valoresDistintos; i < nums.length; i++) {
                nums[i] = "_"
                
            }
            return [ valoresDistintos, nums ]
        `

        function testFunciones (n) {
            carga.value = true
            switch (n) {
                case 1:
                    let nums_1 = [1,1,2]
                    resp.value = function_twoSum(nums_1)  
                    break;

                case 2:
                    let nums_2 = [0,0,1,1,1,2,2,3,3,4]
                    resp.value = function_twoSum(nums_2)  
                    break;

                default:
                    break;
            }
        }
    </script>

    <template>
        <div class="py-6 w-full h-200" id="modal">
            <h2 class="uppercase text-2xl text-start font-bold text-gray-200 border-b border-stone-600">
                🟢 Remove Duplicates from Sorted Array
            </h2>
            <a href="https://leetcode.com/problems/remove-duplicates-from-sorted-array/" class="ml-6 text-blue-400 hover:text-blue-500 duration-200" title="Ir a LeetCode"> link LeetCode </a>
            <div class="ml-6 pt-6 space-y-2">
                <h3 class="w-max text-gray-400 border-b border-stone-600">Descripción</h3>
                <p class="ml-4 text-gray-300">
                    Se te da un array de números enteros llamado nums, ordenado de forma no decreciente (es decir, de menor a mayor o con elementos iguales). <br>
                    Debés eliminar los elementos duplicados "en el lugar" (es decir, sin usar estructuras nuevas), de forma que cada elemento único aparezca solo una vez. <br>
                    El orden relativo de los elementos debe mantenerse igual que en el array original. <br>
                    Luego, tenés que devolver la cantidad de elementos únicos en nums. <br>
                    Considerá que el número de elementos únicos en nums es k. <br>
                    Para que tu solución sea aceptada, debés hacer lo siguiente: <br>
                    - Modificá el array nums de forma que los primeros k elementos contengan los elementos únicos, en el mismo orden en que aparecían originalmente. <br>
                    - Los elementos restantes (después de los primeros k) no son importantes, así como tampoco lo es el tamaño final del array. <br>
                    - Devolvé el valor de k. <br>
                </p>
                <div class="py-4 space-y-3">
                    <h4 class="w-max text-gray-400 border-b border-stone-600">
                        Ejemplo 1
                    </h4>
                    <Ejemplo entrada="nums = [1,1,2]" salida="2, [1,2]" explicacion="Está función retornara 2, devido a que hay 2 números distintos y el resto se repite" />
                    <h4 class="w-max text-gray-400 border-b border-stone-600">
                        Ejemplo 2
                    </h4>
                    <Ejemplo entrada="nums = [0,0,1,1,1,2,2,3,3,4]" salida="5, [0,1,2,3,4]" explicacion="Está función retornara 5, devido a que hay 5 números distintos y el resto se repite" />
                </div>
                <div>
                    <h4 class="w-max text-gray-400 border-b border-stone-600">Mi respuesta</h4>
                    <div class="w-max mt-2 ml-4 bg-[#1e1e1e] border-l border-stone-600 text-gray-200 text-sm font-mono pr-10">
                        <TextCode :text="text" />
                    </div>
                </div>
            </div>
            <div class="ml-6 py-6 flex gap-6 ">
                <button @click="testFunciones(1)" class="text-gray-300 px-4 py-2 border border-gray-600 rounded-2xl cursor-pointer hover:bg-blue-800">
                    Probar valores
                </button>
                <button @click="testFunciones(2)" class="text-gray-300 px-4 py-2 border border-gray-600 rounded-2xl cursor-pointer hover:bg-blue-800">
                    Probar valores 2
                </button>
            </div>
            <div class="ml-6 pb-8" id="res">
                <h4 v-if="resp != '' && carga == false" class="ml-12 text-gray-400 text-2xl"> <strong class="text-gray-300 text-lg">Respuesta:</strong> valores {{ resp[0] }} , Array {{ resp[1] }} </h4>
                <h4 v-if="resp != '' && carga == true" class="text-gray-400"> Cargando ... </h4>
            </div>
        </div>
    </template>