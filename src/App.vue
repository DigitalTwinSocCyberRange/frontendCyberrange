<template >
  <body >

          <div v-if="!gameStarted" class="is-vhcentered has-text-centered" >
        <h1 class="is-json title mb-6">
        Welcome to DigitalTwinCyberrange. </h1>
        <h2 class="is-json subtitle mb-6">
        A project of University of Regensburg and Ionian University. </h2>
        <div class="margin-big">
          <form @submit.prevent="gameStarted=true">
        <input class="input input-label-short is-size-6" :value="'Your ID: '" > 
        <span>
        <input
          class="input input-short is-long is-size-6 blank-input "
          v-model="traineeName"
          :placeholder="'ID'"
          
        /> 
        
        </span>

        <div class="buttons is-centered mt-5"> 
        <button
          class="button submit-button is-rounded mt-5"
          type="submit"
          value="Submit"
        >
        
          <span>START</span>
        </button> </div>
        </form>
         </div>
         
      
        
         </div>


 <div v-if="gameCompleted" class="is-vhcentered has-text-centered">
        <h1 class="is-json title is-primary mb-6">
        GameCompleted. </h1>
        <h2 class="is-json subtitle is-primary mb-6">
        Thank you for participation. </h2>
        <div class="margin-big">
          {{this.evaluationData}}

        <div class="buttons is-centered mt-5"> 
        <button
          class="button submit-button is-rounded mt-5"
          @click="submitEvaluationData"
        >
          <span>Submit Data</span>
        </button> </div>
         </div>
      
        
         </div>

            <nav
        class="navbar is-fixed-bottom is-transparent"
        role="navigation"
        aria-label="main navigation" 
        v-if="gameStarted && !gameCompleted"
      >
        <div class="navbar-brand has-background-white">
          <a class="navbar-item">
            <h1 class="title is-json has-background-white">DigitalTwinCyberrange </h1> </a
          ><br />
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          
            <div class="navbar-item ">
              <div class="buttons is-left">
                <a class="button is-primary">
                  <strong>Points: {{ points }}</strong>
                </a>

                <a class="button is-primary is-light">
                  <strong>Level: {{ level }}</strong>
                </a>
            
            </div>
          </div>
        </div>
      </nav>

     

        <div v-if="gameStarted && !gameCompleted">
        <section>

      </section>

      <head>
    <meta charset="UTF-8" />
    <title>cr</title>
  </head>

  
  
      <div class="columns" >
        <div class="column is-half is-fixed ">
          <figure class="pb-5">
          <iframe src="http://192.168.2.158:5601/app/kibana#/dashboard/87c18520-b337-11e8-b3e4-11404c6637fe?_g=(refreshInterval:(pause:!t,value:0),time:(from:now-15m,to:now))&_a=(description:'Kibana%20dashboard%20for%20DSIEM',filters:!(),fullScreenMode:!f,options:(darkTheme:!f,hidePanelTitles:!f,useMargins:!t),panels:!((embeddableConfig:(),gridData:(h:10,i:'2',w:18,x:0,y:9),id:ed4a2ca0-b335-11e8-b3e4-11404c6637fe,panelIndex:'2',type:visualization,version:'7.6.1'),(embeddableConfig:(spy:!n),gridData:(h:9,i:'7',w:22,x:12,y:0),id:a0f5c810-b339-11e8-b3e4-11404c6637fe,panelIndex:'7',type:visualization,version:'7.6.1'),(embeddableConfig:(vis:(legendOpen:!f)),gridData:(h:10,i:'8',w:16,x:18,y:9),id:'56c8e620-b337-11e8-b3e4-11404c6637fe',panelIndex:'8',type:visualization,version:'7.6.1'),(embeddableConfig:(),gridData:(h:9,i:'9',w:14,x:34,y:0),id:b4844b80-b45c-11e8-b3e4-11404c6637fe,panelIndex:'9',type:visualization,version:'7.6.1'),(embeddableConfig:(vis:(defaultColors:('0%20-%2020':'rgb(0,104,55)','20%20-%2050':'rgb(255,255,190)','50%20-%20100':'rgb(165,0,38)'),legendOpen:!t)),gridData:(h:9,i:'10',w:12,x:0,y:0),id:'217b62e0-b45e-11e8-b3e4-11404c6637fe',panelIndex:'10',type:visualization,version:'7.6.1'),(embeddableConfig:(),gridData:(h:16,i:'11',w:11,x:0,y:19),id:'820da8f0-b465-11e8-b3e4-11404c6637fe',panelIndex:'11',type:visualization,version:'7.6.1'),(embeddableConfig:(title:Alarms),gridData:(h:10,i:'12',w:14,x:34,y:9),id:'9badafd0-c009-11e8-b3e4-11404c6637fe',panelIndex:'12',title:Alarms,type:visualization,version:'7.6.1'),(embeddableConfig:(),gridData:(h:17,i:'14',w:48,x:0,y:35),id:c7aa9f10-e365-11e8-9c9b-556fd2a389b2,panelIndex:'14',type:search,version:'7.6.1'),(embeddableConfig:(),gridData:(h:16,i:'15',w:37,x:11,y:19),id:'334c77b0-b338-11e8-b3e4-11404c6637fe',panelIndex:'15',type:search,version:'7.6.1')),query:(language:lucene,query:''),timeRestore:!f,title:SIEM,viewMode:view)" style="display:block; width:100%; height:100vh;"></iframe>""
          </figure>
        </div>

        <div class="column is-half right">
          <div class="container has-background-white">
            <br />
            <br />
            <br />
          </div>
          <question-task :taskData="Task1" @submit-points="submitPoints" @task-completed="markAsCompleted" :unlocked="tasksUnlocked.task1" > </question-task>
          <blank-task :taskData="Task2" @submit-points="submitPoints" @task-completed="markAsCompleted"  :unlocked="tasksUnlocked.task2" v-if="tasksCompleted>=1"> </blank-task>
          <blank-task :taskData="Task3" @submit-points="submitPoints" @task-completed="markAsCompleted" :unlocked="tasksUnlocked.task3" v-if="tasksCompleted>=2"> </blank-task>
          <blank-task :taskData="Task4" @submit-points="submitPoints" @task-completed="markAsCompleted" :unlocked="tasksUnlocked.task4" v-if="tasksCompleted>=3"> </blank-task>
          <editor-task :taskData="Task5" @submit-points="submitPoints" @task-completed="markAsCompleted" :unlocked="tasksUnlocked.task5" v-if="tasksCompleted>=4"> </editor-task>
          <editor-task :taskData="Task6" @submit-points="submitPoints" @task-completed="markAsCompleted" :unlocked="tasksUnlocked.task6" v-if="tasksCompleted>=5"> </editor-task>
          
           
          
          
         
        </div>
      </div>
       </div>
  </body>
</template>

<script>
import BlankTask from "./components/BlankTask.vue";
import EditorTask from "./components/EditorTask.vue";
import QuestionTask from "./components/QuestionTask.vue";
import Task1 from "./data/questions_task1.js";
import Task2 from "./data/directives_dt_attacker.js";
import Task3 from "./data/directives_dt_mitm.js";
import Task4 from "./data/directives_dt_arp.js";
import Task5 from "./data/directives_dt_log_manipulation.js";
import Task6 from "./data/directives_dt_dos.js";


export default {
  name: "App",
  components: {
    BlankTask,
    EditorTask,
    QuestionTask
  },

  data() {
    return {
      Task1 : Task1,
      Task2 : Task2,
      Task3 :  Task3,
      Task4 :  Task4,
      Task5 :  Task5,
      Task6 :  Task6,
      points: 0,
      level_old: 1,
      tasksCompleted: 0,
      gameCompleted: false,
      gameStarted: false,
      traineeName: null,
      taskTimes : [new Date()],
      evaluationData : [],
      tasksUnlocked: {task1: true, task2: false, task3: false, task4: false, task5: false, }

    };
  } ,
  
  methods: {
    checkIfNewLevel(newLevel){
      if (newLevel != this.level_old && newLevel > 1){
        this.level_old = newLevel;
        return newLevel;
      }
      return this.level_old;
    },

    markAsCompleted(taskTimes, taskNo) {
      //save timer information here
      this.tasksUnlocked[taskNo] = true;
      console.log("unlocked ",taskNo, this.tasksUnlocked[taskNo])
      this.tasksCompleted += 1;
      console.log("completed: ", this.gameStarted)
      this.taskTimes.push(taskTimes)
      
      

      if (this.tasksCompleted == 6) {
        this.gameCompleted = true;
        this.evaluationData.push("ID: "+this.traineeName, "Points: "+this.points, "Level: "+this.level, "Times: ",this.taskTimes)
      }
    },


    submitEvaluationData(){
          //window.open('mailto:magdalena.glas@stud.uni-regensburg.de?subject=TraineeData&body='+this.evaluationData);
          this.$http.post(window.location.href.replace("7080", "9090/submit")+JSON.stringify(this.evaluationData)).then((response) => {
  console.log(response.data)
    }) } ,


    submitPoints(points2){
      console.log("p2",points2)
      this.points += points2;
    }
  },

  computed: {
    level() {
      var newLevel = (this.points - this.points % 10)/10 +1 ;
      return this.checkIfNewLevel(newLevel);

    }
  },
  
};  
</script>

<style>
@import "./../css/bulma.css";
@import "./../css/bulma-tooltip.css";
</style>
