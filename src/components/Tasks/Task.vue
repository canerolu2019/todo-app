<template>
<div class="todoContainer">
  <li :class="{ done: task.isDone }" class="task" >
    <div class="title_container">
      <div class="color" v-bind:style="{ backgroundColor: task.color }"></div>
      <div class="title">{{ task.title }}</div>
      <!-- <div class="description">{{task.description}}</div> -->
      <br/>
      <div class="taskDate">
        <div>
          <h4>Date:{{task.date}}</h4>
        </div>
      </div>
      <br>
      <div class="taskHour">
        <div>
          <h4>Hour:{{task.hour}}</h4>
        </div>
      </div>
      <br>
      <div class="taskDescription">
        <v-btn text small color="primary" style="margin-left:-12px">Details</v-btn>
        <p class="taskDescriptionText" >{{task.description}}</p>
      </div>
    </div>
    <div class="controls">
      <div class="delete" @click="$emit('deleted')">
        <i class="material-icons">delete</i>
      </div>
    </div>
  </li>
</div>
</template>
<script>

export default {
    name: 'Task',
    props: ['task'],

    methods:{
        // describe(index){
        //     document.getElementsByClassName("taskDescriptionText").forEach(elem =>{
             
        //       if(elem.index == index){
        //          console.log(elem);
        //     if(elem.style.display == "none"){
        //       console.log('****');
        //       document.getElementsByClassName("taskDescriptionText")[index].style.display="block";
        //      }
        //      else{
        //      document.getElementsByClassName("taskDescriptionText")[index].style.display="none";
        //      }
        //       }
        //     })
        //     //  let elemStyle=document.getElementsByClassName("taskDescriptionText")[index].style.display;
        //     //  console.log(index);
        //     //  if(elemStyle == "none"){
             
        //     //   document.getElementsByClassName("taskDescriptionText")[index].style.display="block";
        //     //  }
        //     //  else{
        //     //  document.getElementsByClassName("taskDescriptionText")[index].style.display="none";
        //     //  }

        // }
    }
}
</script>
<style scoped>


li {
    list-style: none;
    border-bottom: 1px solid #e0e0e0;
    padding: 0.5em;
    user-select: none;
    background: white;
    
}

li .title_container div {
    display: inline-block; 
}

li .color { 
    width: 0.5em;
    height: 1.2em;
    margin-right: 0.5em;
    border-radius: 0.2em;
    opacity: 0.8;
    position: relative;
    top: 0.2em;   
}
.task {
    display: flex;
    justify-content: space-between; 
}

.controls {
    display: flex; 
}

.controls div {
    border-radius: 0.1em;
    width: 2em;
    color: #aaa;
    text-align: center;
    cursor: pointer;
    user-select: none;
    margin-left: 0.2em;
}

.task.done .title {
    color: #bbb;
    text-decoration: line-through;
}
.delete{
    margin-right:33px;
    margin-top: 50px;
}
.todoContainer{
 width: 100%;
}

</style>