<template>
  <v-app>
 
    <v-app id="inspire">
      <v-navigation-drawer
        v-model="drawer"
        app
      >
        <v-list dense>
          <v-list-item link @click="swapComponent($event)">
           
            <v-list-item-content>
              <v-list-item-title>Tasks</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link  @click="swapComponent($event)">
          
            <v-list-item-content>
              <v-list-item-title>Planned</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
            <v-list-item link  @click="swapComponent($event)">
          
            <v-list-item-content>
              <v-list-item-title>My Day</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link  id="btnCreate" @click="openCreateModal">
              <v-list-item-action>
               <v-btn class="mx-2" fab dark color="indigo">
                  <v-icon dark>mdi-plus</v-icon>
                </v-btn>
            </v-list-item-action>
            
          </v-list-item>
        </v-list>
          
        
      </v-navigation-drawer>
  
  <!-- @click="swapComponent($event)" -->
  
      <v-main>
        <v-container
          class="fill-height containerTODO"
          fluid
        >
          <v-row
            align="center"
            justify="center"
          >
         
          <div :is="currentComponent"></div>
          <div v-show="!currentComponent">
            <component v-bind:is="currentTabComponent"></component>
          </div>
          </v-row>
         
            <div class="modalCreatecontainer" style="display:none">
              <h2>Create task</h2>
                   <v-col cols="12"  md="12">
                    <v-text-field
                      id="taskTitle"
                      label="Task Name"
                      v-model="title"
                      outlined
                    ></v-text-field>
                    </v-col>
                     <v-col cols="12"  md="12">
                    <v-text-field
                      v-model="description"
                      id="taskDescription"
                      label="Description"
                      outlined
                    ></v-text-field>
                    </v-col>
                
             
                <v-btn color="primary" style="margin-left:10px;margin-bottom:10px" @click="checkForm">Add</v-btn>
                <v-btn color="primary" style="margin-left:10px;margin-bottom:10px" @click='closeModal'>Close</v-btn>
                  
           
          </div>
           
        </v-container>
      </v-main>
    
    </v-app>
  
  </v-app>
  
</template>

<script>
   import TodoList from './components/Tasks/TodoList.vue';
   import Planned from './components/Planned/Planned.vue';
   import Myday from './components/MyDay/MyDay.vue';
   import jsonData from './storage/tasks.json';
   import Todo from './models/Todo.js';
// import TestComponent from './components/TestComponent.vue';
// import SecondTest from './components/SecondTest.vue';
export default {
  name: 'App',
  components: {
    TodoList,
    Planned,
    Myday

   
         
  },

  data: () => ({
    currentComponent:TodoList,
    items:['Tasks','Planned'],
    title:'',
    description:'',
    type:'',
    tasksSaved:jsonData,
    componentsArray:[
          {name:"Tasks", template:TodoList},
          {name:"Planned", template:Planned},
          {name:"My Day",template:Myday}
    ],
    

  drawer:true,
  }),
  computed:{
    currentTabComponent:function(){

      return this.currentComponent;
    },
   
  },

  methods:{
    swapComponent:function(event){
     let selectedView= event.target.textContent;
     console.log(selectedView);
      if(selectedView == 'Tasks')
      {
      
      this.currentComponent=this.componentsArray[0].template;
      
      }
      if(selectedView == 'Planned')
      {
    
      this.currentComponent=this.componentsArray[1].template;
      }
       if(selectedView == 'My Day')
      {
    
      this.currentComponent=this.componentsArray[2].template;
      }
    
   
    },
    openCreateModal:function(){
      let elementStyle=document.getElementsByClassName('modalCreatecontainer')[0].style.display;
      console.log(elementStyle);
      if(elementStyle === 'none'){
       document.getElementsByClassName('modalCreatecontainer')[0].style.display='block';
      }
      else{
       document.getElementsByClassName('modalCreatecontainer')[0].style.display='none';
      }
    },
    closeModal:function(){
       document.getElementsByClassName('modalCreatecontainer')[0].style.display='none';
    },
    checkForm:function(){
            let titleTask=this.title;
            let descriptionTask=this.description;        
            let date=new Date();
            let localDate=date.getDate()+'-'+(date.getMonth()+1)+'-'+date.getFullYear();
            let localHour=date.getHours()+":"+date.getMinutes();
            let idTask=this.tasksSaved.length+1;
            var taskToDo=new Todo(idTask,titleTask,localDate,localHour,descriptionTask,false);
            this.tasksSaved.push(taskToDo);
            let storedjson=JSON.stringify(this.tasksSaved);
            console.log(storedjson);
            localStorage.removeItem('Tasks');
            localStorage.setItem('Tasks',storedjson);           
            document.getElementsByClassName('modalCreatecontainer')[0].style.display='none';
        
    }
   
  }
};
</script>

<style scoped>

#btnCreate{
   position: fixed;
    bottom: 60px;
    left: 88px;
    right: 0;
  
}
.containerTODO{
  height: 100%;
  margin: 0;
  background:linear-gradient(#ff5f6d , #ffc371);
  background-repeat: no-repeat;
  background-attachment: fixed;
 
}
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
.modalCreatecontainer{

  background :#ffc371;
  position: absolute;
  margin: 0;
  left: 20%;
  border:1px solid black;
  display:none;
  width: 500px;
}


/* Set a style for the submit button */
.registerbtn {
  background-color: #4CAF50;
  color: white;
  padding: 16px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

.registerbtn:hover {
  opacity: 1;
}

/* Add a blue text color to links */
a {
  color: dodgerblue;
}
body {
    display: flex;
   font-size: 1.2em;	
}
</style>
