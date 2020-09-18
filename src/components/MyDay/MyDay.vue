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
           deleteTodo(index) {
               console.log(index);
                if(localStorage.getItem("Filtered_Items") !== '[]'){
                    var elemRemoveTitle=document.getElementsByClassName("todoContainer")[index].children[0].childNodes[0].childNodes[1].textContent;
                    let filteredStorage=JSON.parse(localStorage.getItem('Filtered_Items'));
                    let newList=filteredStorage.filter(x=>x.title !== elemRemoveTitle);
                    localStorage.removeItem("Filtered_Items");
                    localStorage.setItem('Filtered_Items',JSON.stringify(newList));
                    var tasksList=JSON.parse(localStorage.getItem("Tasks"));
                    tasksList=tasksList.filter(x=>x.title != elemRemoveTitle);
                    localStorage.removeItem('Tasks');
                    localStorage.setItem('Tasks',JSON.stringify(tasksList));
                    const elements = document.getElementsByClassName("todoContainer");
                    elements[index].remove();

                }
           
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