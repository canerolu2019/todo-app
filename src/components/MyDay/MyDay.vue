<template>
    <div class="todo-list">
    <h1 style="margin-left:26px">My Day</h1>
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

import jsonData from '../../storage/tasks.json';

export default {
     components:{
        Task,
       
    
    },
    data(){
        return {
           
           task:jsonData
        }
    },
    methods:{
           deleteTodo(index)  {
               console.log(index); 
               this.tasks.splice(index, 1)
           
        }
    },
    computed:{
        filteredTodos(){
            let date=new Date();
            let localDate=date.getDate()+'-'+(date.getMonth()+1)+'-'+date.getFullYear();
           
            if(localStorage.getItem("Tasks") == '[]'){
                console.log(jsonData);
               
                return this.task.filter(x=>x.date == localDate);
            }
            else{
            
            let storage=JSON.parse(localStorage.getItem('Tasks'));

            let filteredStorage= storage.filter(x=>x.date==localDate);
            let filteredStorageJSON=JSON.stringify(filteredStorage);
            localStorage.setItem('Filtered_Items',filteredStorageJSON);
            console.log('filtrat');
            console.log(filteredStorageJSON);
            return storage.filter(x=>x.date==localDate);
            }
        }
    }
}
</script>
<style scoped>
.todo-list{
    width: 100%;
   
}
</style>