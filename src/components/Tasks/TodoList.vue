<template>
    <div class="todo-list">
    <h1 style="margin-left:26px">My Tasks</h1>
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
    <!-- <div class="new_task">
      New:
      <input type="text" class="task_input" v-model="task" @keyup.enter="saveTodo" />
      <div class="save_task">
        <button @click="saveTodo">+</button>
      </div>
    </div> -->
  
 
  </div>
</template>
<script>
import Task from './Task.vue';
import Todo from '../../models/Todo.js';
import jsonData from '../../storage/tasks.json';

export default {
    name:'TodoList',
    props:['list_name','tasksAssigned'],
    components:{
        Task,
    
    },
    data() {
       
        return {
            todos: jsonData,
            task: '',
            showDone: true,
            showModal:false
        }
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
          if(localStorage.getItem("Tasks") !=='[]'){
                    var elemRemoveTitle=document.getElementsByClassName("todoContainer")[index].children[0].childNodes[0].childNodes[1].textContent;
                    let filteredStorage=JSON.parse(localStorage.getItem('Tasks'));
                    let newList=filteredStorage.filter(x=>x.title !== elemRemoveTitle);
                    localStorage.removeItem("Tasks");
                    localStorage.setItem('Tasks',JSON.stringify(newList));
                    // var tasksList=JSON.parse(localStorage.getItem("Tasks"));
                    // tasksList=tasksList.filter(x=>x.title != elemRemoveTitle);
                   
                    const elements = document.getElementsByClassName("todoContainer");
                    elements[index].remove();

                }
                else{
            this.todos.splice(index, 1);
                }
        },
       
       

    },

    computed:{
        filteredTodos(){      
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