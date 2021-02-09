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
        Thank you for your participation! </h2>
        
        <div class="margin-big">
          <h2 class="subtitle" >Please copy the following data and send it to <br> <strong class="is-primary-darker">magdalena.glas@stud.uni-regensburg.de</strong> </h2>
          <div class="evaluation-data has-text-left">
          {{this.evaluationData}}

       
         </div>
          <div class="buttons is-centered mt-5"> 
       <button class="button show-button is-rounded has-tooltip-arrow has-tooltip-multiline has-tooltip-top" @click="textToClipboard(this.evaluationData)" :data-tooltip="'Copy to Clipboard'" > <font-awesome-icon :icon="['far', 'copy']" /> </button>
    
       <button class="button show-button  is-rounded has-tooltip-arrow has-tooltip-multiline has-tooltip-top" @click="prepareEmail" :data-tooltip="'Send via Mail Client'"> <font-awesome-icon :icon="['far', 'envelope']" />  </button>
       </div>
          </div>
           </div>
    

        <div v-if="gameStarted && !gameCompleted">
 

      <head>
    <meta charset="UTF-8" />
    <title>cr</title>
  </head>

  
  
      <div class="columns" >
        <div class="column is-fixed is-full " :class="{'is-half':!fullscreen}">

      <section >
          <!--figure class="pb-5">
          <iframe src="http://192.168.2.158:5601/app/kibana#/dashboard/87c18520-b337-11e8-b3e4-11404c6637fe?_g=(refreshInterval:(pause:!t,value:0),time:(from:now-15m,to:now))&_a=(description:'Kibana%20dashboard%20for%20DSIEM',filters:!(),fullScreenMode:!f,options:(darkTheme:!f,hidePanelTitles:!f,useMargins:!t),panels:!((embeddableConfig:(),gridData:(h:10,i:'2',w:18,x:0,y:9),id:ed4a2ca0-b335-11e8-b3e4-11404c6637fe,panelIndex:'2',type:visualization,version:'7.6.1'),(embeddableConfig:(spy:!n),gridData:(h:9,i:'7',w:22,x:12,y:0),id:a0f5c810-b339-11e8-b3e4-11404c6637fe,panelIndex:'7',type:visualization,version:'7.6.1'),(embeddableConfig:(vis:(legendOpen:!f)),gridData:(h:10,i:'8',w:16,x:18,y:9),id:'56c8e620-b337-11e8-b3e4-11404c6637fe',panelIndex:'8',type:visualization,version:'7.6.1'),(embeddableConfig:(),gridData:(h:9,i:'9',w:14,x:34,y:0),id:b4844b80-b45c-11e8-b3e4-11404c6637fe,panelIndex:'9',type:visualization,version:'7.6.1'),(embeddableConfig:(vis:(defaultColors:('0%20-%2020':'rgb(0,104,55)','20%20-%2050':'rgb(255,255,190)','50%20-%20100':'rgb(165,0,38)'),legendOpen:!t)),gridData:(h:9,i:'10',w:12,x:0,y:0),id:'217b62e0-b45e-11e8-b3e4-11404c6637fe',panelIndex:'10',type:visualization,version:'7.6.1'),(embeddableConfig:(),gridData:(h:16,i:'11',w:11,x:0,y:19),id:'820da8f0-b465-11e8-b3e4-11404c6637fe',panelIndex:'11',type:visualization,version:'7.6.1'),(embeddableConfig:(title:Alarms),gridData:(h:10,i:'12',w:14,x:34,y:9),id:'9badafd0-c009-11e8-b3e4-11404c6637fe',panelIndex:'12',title:Alarms,type:visualization,version:'7.6.1'),(embeddableConfig:(),gridData:(h:17,i:'14',w:48,x:0,y:35),id:c7aa9f10-e365-11e8-9c9b-556fd2a389b2,panelIndex:'14',type:search,version:'7.6.1'),(embeddableConfig:(),gridData:(h:16,i:'15',w:37,x:11,y:19),id:'334c77b0-b338-11e8-b3e4-11404c6637fe',panelIndex:'15',type:search,version:'7.6.1')),query:(language:lucene,query:''),timeRestore:!f,title:SIEM,viewMode:view)" style="display:block; width:100%; height:100vh;"></iframe>""
          </figure-->
           </section>

           <section class="section"></section>
                      <nav
        class="navbar is-fixed-bottom is-transparent mb-1"
   
        v-if="gameStarted && !gameCompleted"
      >
        <div class="navbar-brand navbar-background is-half">
          <div class="navbar-brand ">
          <a class="navbar-item" v-if="fullscreen">
            <h1 class="title is-json has-text-white ">DigitalTwinCyberrange </h1> </a
          ><br />
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          
            
              <div class="buttons is-left">
                <button class="button is-primary is-static has-background-primary has-text-white">
                  <strong>Points: {{ points }}</strong>
                </button>

                <button class="button is-primary is-static">
                  <strong>Level: {{ level }}</strong>
                </button>

                 <button class="button show-button has-tooltip-arrow has-tooltip-multiline has-tooltip-top" @click="fullscreen=true , document.location.reload(true)" :data-tooltip="'Show SIEM in Fullscreen'" v-if="!fullscreen">
                   <font-awesome-icon :icon="['fa', 'expand']" /> 
                </button>

                <button class="button show-button has-tooltip-arrow has-tooltip-multiline has-tooltip-top" @click="fullscreen=false, document.location.reload(true)" :data-tooltip="'Show Tasks'" v-else>
                   <font-awesome-icon :icon="['fa', 'compress']" /> 
                </button>

                </div>
  </div>
      
        </div>
      </nav>
      
        </div>

        <div class="column right is-half" v-if="!fullscreen">
          <div class="container has-background-white">
            <br />
            <br />
            <br />
          </div>
          <video-tile :infoData="VideoInfo[0]" :order="this.order"> </video-tile>
           <dir-info-1 :order="this.order"> </dir-info-1>
          <question-task :taskData="Task1" @submit-points="submitPoints" @task-completed="markAsCompleted" :unlocked="tasksUnlocked.task1" :order="this.order" > </question-task>
          <video-tile :infoData="VideoInfo[1]" v-if="tasksCompleted>=1" :order="this.order"> </video-tile>
          <dir-info-2 :infoData="Info2" v-if="tasksCompleted>=1" :order="this.order"> </dir-info-2>
          <dir-info-3 :infoData="Info2" v-if="tasksCompleted>=1" :order="this.order"> </dir-info-3>
          <blank-task :taskData="Task2" @submit-points="submitPoints" @task-completed="markAsCompleted"   v-if="tasksCompleted>=1" :order="this.order"> </blank-task>
          <dir-info-4 :infoData="Info4" v-if="tasksCompleted>=2" :order="this.order"> </dir-info-4>
          <video-tile :infoData="VideoInfo[2]"  v-if="tasksCompleted>=2" :order="this.order"> </video-tile>
           <blank-task :taskData="Task3" @submit-points="submitPoints" @task-completed="markAsCompleted" v-if="tasksCompleted>=2" :order="this.order"> </blank-task>
          <dir-info-5 :infoData="Info5" v-if="tasksCompleted>=3" :order="this.order"> </dir-info-5>
          <blank-task :taskData="Task4" v-if="tasksCompleted>=3" @submit-points="submitPoints" @task-completed="markAsCompleted"  :order="this.order"> </blank-task>
          <editor-task :taskData="Task5" v-if="tasksCompleted>=4" @submit-points="submitPoints" @task-completed="markAsCompleted"   :order="this.order"> </editor-task>
          <editor-task :taskData="Task6" v-if="tasksCompleted>=5" @submit-points="submitPoints" @task-completed="markAsCompleted" @finish-game="finishGame"  :order="this.order"> </editor-task>



          <!--video-tile :infoData="VideoInfo[0]" :order="this.order"> </video-tile>
           <dir-info-1 :order="this.order"> </dir-info-1>
          <question-task :taskData="Task1" @submit-points="submitPoints" @task-completed="markAsCompleted" :unlocked="tasksUnlocked.task1" :order="this.order" > </question-task>
          <dir-info-2 :infoData="Info2" v-if="tasksCompleted>=0" :order="this.order"> </dir-info-2>
          <dir-info-3 :infoData="Info2" v-if="tasksCompleted>=0" :order="this.order"> </dir-info-3>
          <blank-task :taskData="Task2" @submit-points="submitPoints" @task-completed="markAsCompleted"   v-if="tasksCompleted>=0" :order="this.order"> </blank-task>
          <dir-info-4 :infoData="Info4" v-if="tasksCompleted>=0" :order="this.order"> </dir-info-4>
           <blank-task :taskData="Task3" @submit-points="submitPoints" @task-completed="markAsCompleted" v-if="tasksCompleted>=0" :order="this.order"> </blank-task>
          <dir-info-5 :infoData="Info5" v-if="tasksCompleted>=0" :order="this.order"> </dir-info-5>
          <blank-task :taskData="Task4" v-if="tasksCompleted>=0" @submit-points="submitPoints" @task-completed="markAsCompleted"  :order="this.order"> </blank-task>
          <editor-task :taskData="Task5" v-if="tasksCompleted>=0" @submit-points="submitPoints" @task-completed="markAsCompleted"   :order="this.order"> </editor-task>
          <editor-task :taskData="Task6" v-if="tasksCompleted>=0" @submit-points="submitPoints" @task-completed="markAsCompleted" @finish-game="finishGame"  :order="this.order"> </editor-task-->
          
           
          
          
         
        </div>
      </div>
       </div>
  </body>
</template>

<script>
import BlankTask from "./components/BlankTask.vue";
import EditorTask from "./components/EditorTask.vue";
import QuestionTask from "./components/QuestionTask.vue";
import VideoTile from "./components/VideoTile.vue";
import DirInfo1 from "./components/DirInfo1.vue";
import DirInfo2 from "./components/DirInfo2.vue";
import DirInfo3 from "./components/DirInfo3.vue";
import DirInfo4 from "./components/DirInfo4.vue";
import DirInfo5 from "./components/DirInfo5.vue";

import Task1 from "./data/questions_task1.js";
import Task2 from "./data/directives_dt_attacker.js";
import Task3 from "./data/directives_dt_mitm.js";
import Task4 from "./data/directives_dt_arp.js";
import Task5 from "./data/directives_dt_log_manipulation.js";
import Task6 from "./data/directives_dt_dos.js";
import Info2 from "./data/info_2.js";
import Info4 from "./data/info_4.js";
import Info5 from "./data/info_5.js";
import VideoInfo from "./data/video_data.js";


export default {
  name: "App",
  components: {
    VideoTile,
    BlankTask,
    EditorTask,
    QuestionTask,
    DirInfo1, DirInfo2, DirInfo3, DirInfo4, DirInfo5
  },

  data() {
    return {
      Task1 : Task1,
      Task2 : Task2,
      Task3 :  Task3,
      Task4 :  Task4,
      Task5 :  Task5,
      Task6 :  Task6,
      VideoInfo : VideoInfo,
      Info2 : Info2,
      Info4 : Info4,
      Info5 : Info5,
      points: 0,
      level_old: 1,
      tasksCompleted: 0,
      gameCompleted: false,
      gameStarted: false,
      traineeName: null,
      taskTimes : [new Date()],
      evaluationData : [],
      tasksUnlocked: {task1: true, task2: false, task3: false, task4: false, task5: false, },
      order: ["video1", "info1","task1","video2", "info2", "info3", "task2", "info4","video3", "task3",  "info5", "task4",  "task5", "task6" ],
      fullscreen: false

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

    markAsCompleted(taskTimes) {
      //save timer information here
      this.tasksCompleted += 1;
      console.log("completed: ", this.gameStarted)
      this.taskTimes.push(taskTimes)


    },

    finishGame(){

        this.gameCompleted = true;
        this.evaluationData.push("ID: "+this.traineeName, "Points: "+this.points, "Level: "+this.level, "Times: ",this.taskTimes);
        this.submitEvaluationData();
    },

    textToClipboard(text) {
      console.log("try to copy")
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
},


    submitEvaluationData(){
          
          this.$http.post(window.location.href.replace("7080", "9090/submit")+JSON.stringify(this.evaluationData)).then((response) => {
  console.log(response.data)
    }) } ,

    prepareEmail(){
    window.open('mailto:magdalena.glas@stud.uni-regensburg.de?subject=TraineeData&body='+this.evaluationData);
    },


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
