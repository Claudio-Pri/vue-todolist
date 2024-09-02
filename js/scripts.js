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
                    done: true,
                },
            ],
            newTodo: {
                text: '',
                done: false,
            },
        };
    },
    methods: {
        removeToDo(i) {
            // console.log('rimuovi todo');
            this.todos.splice(i, 1);

        },
        addTodo() {
            // this.todos.push(this.newTodo);
            // this.newTodo.text = '';
            // non funziona--chiedere / il problema è il push di un obj
            this.todos.push({
                // text: this.newTodo.text,
                // done: this.newTodo.done,
                ...this.newTodo
            });
            //qui svuoto new todo?

        },
        todoDone(i) {
            this.todos[i].done = true;
            console.log(this.todos[i].done);

        },
        handleClickTodo(i) {

            this.todos[i].done = !this.todos[i].done;
            console.log(this.todos[i].done);
        }

    },
}).mount('#app')
