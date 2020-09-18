<template>
   <div class="todo-list">
    <h1 style="margin-left:26px">Planned</h1>
    <!-- <div class="filters">
      <label>Show done:</label>
      <input type="checkbox" v-model="showDone" />
    </div> -->
    <ul>
      <Task
        v-for="(todo, index) in filteredTodos"
        :key="index"
        :task="todo"     
        @deleted="deleteTodo(index)"
       
      ></Task>
       <!-- @checked="checkTodo(index)" -->
    </ul>
   </div>

</template>

<script>
import Task from '../Tasks/Task.vue';
import Todo from '../../models/Todo.js';
import jsonData from '../../storage/tasks.json';

export default {
    name:'TodoList',
    
    props:['tasksAssigned']
    ,
    components:{
        Task,
    
    },
    data() {
       
        return {
            some_var:this.tasksAssigned,
            todos: jsonData,
            task: '',
            showDone: true,
            showModal:false
        }
    },
   
    created(){
            console.log(this.tasksAssigned);
    },
    methods:{
        saveTodo() {
            // adaugam valoarea din task in lista de todo
            this.todos.push(new Todo(this.task));
            // resetam task-ul
              this.task = '';
        },
        checkTodo(index) {
            this.todos[index].switchDone();
        },
        deleteTodo(index) {
            this.todos.splice(index, 1);
        },


    },
    watch:{
        myprop:function(newVal,oldVal){
            console.log('Prop changed: ', newVal, ' | was: ', oldVal)
        }
    },
    computed:{
        filteredTodos(){
            console.log("aici ai "+this.tasksAssigned);
            return this.todos;
           // return this.todos.filter(todo => this.showDone || !todo.showDone);
        },
     
    }
}
</script>
<style scoped>
.todo-list{
    width: 100%;
    
}



</style>