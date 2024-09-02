console.log('js collegato');
//===== Appunti ======
// ` backtick
// {{TEXT INTERPOLATION}}
// v-bind:attributo="..js.."
// :attributo="..js.."
// v-on:click="..js.."
// @click=""
//===== Code ======

// deconstructuring
const { createApp } = Vue

const app = createApp({
    data() {
        return {
            todos: [
                {
                    text: 'Fare la spesa',
                    done: false,
                },
                {
                    text: 'Cucinare',
                    done: false,
                },
                {
                    text: 'Lavare i piatti',
                    done: false,
                },
            ]
        };
    },
    methods: {
        removeToDo(i) {
            // console.log('rimuovi todo');
            this.todos.splice(i, 1);

        }
    }



}).mount('#app')
