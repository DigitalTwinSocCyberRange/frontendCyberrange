

<template>
  <div class="is-task" :id="taskData.taskNo">
   

    <div class="is-directive" >
        <text  v-if="!task_completed">
        <text class="title is-json is-text-red">{{taskData.title}}</text> {{taskData.subtitle}}
      </text>

        <div v-else>
      
      <text class="is-primary-darker title is-json" >
        TaskCompleted. </text>
    <div class="notification notification-green is-light error-message " >
      <span class="is-primary-darker is-size-5 mb-3 "> You earned {{this.pointsOverall}} points. </span>
</div> 


      <div class="buttons is-left"> 
      <button @click="scrollToElement(this.taskData.nextSection)" class="button is-rounded submit-button">Proceed</button>
      </div>  
      </div> <br>
    

      <div  class="pt-5" :class="{'directive-completed': task_completed}">

       
        <div v-for="blank in blanks" :key="blank" >
            <text class=" is-size-6 pt-3 has-text-weight-bold" >{{blank.name}}</text>
            <blank :blanks="blank" :labelLong="true" @blank-completed="completeTask" class="pt-4 pb-4"> </blank>
   
        </div>
      
      </div>
    </div>
    
  </div>
    <div :id="endOfTask"> </div>
  
  
</template>

  <script>

import Blank from "./Blank.vue";

export default {
  name: "QuestionTask",
  props: {
    taskData: {
      type: Object,
      required: true
    }
  },
  data() {


    return {
      blanks: this.taskData.blanks,
      viewJson: false,
      blanks_completed: 0,
      task_completed: false,
      pointsOverall : 0,
      endOfTask: this.taskData.taskNo.toString + "end"
    };

  
  },



  components: {
    Blank,
  },

 

  methods: {
    completeTask(points){
       this.$emit('submit-points', points)
       this.pointsOverall += points;
       this.blanks_completed +=1;
        if (this.blanks_completed == Object.keys(this.blanks).length) {
      /*    this.$http.get(window.location.href.replace("/7071", "") + "/" +this.taskData.apiPath).then((response) => {
  console.log(response.data)
}) */
          this.task_completed=true;
          this.scrollToElement(this.taskData.taskNo)
        } 
    },

    scrollToElement(id) {
 
    //const el = document.getElementsByClassName(className)[0];
    const el = document.getElementById(id);
    console.log("element",el)

    if (el) {
      el.scrollIntoView({behavior: 'smooth'});
    }
  }

  }
  
};
</script>