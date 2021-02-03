<template>
  <body>
        <section>
        <nav
        class="navbar is-fixed-bottom is-transparent"
        role="navigation"
        aria-label="main navigation"
      >
        <div class="navbar-brand">
          <a class="navbar-item">
            <h1 class="title is-json">DigitalTwinCyberrange</h1> </a
          ><br />
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          
            <div class="navbar-item">
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
      </section>

      <head>
    <meta charset="UTF-8" />
    <title>cr</title>
  </head>

  
      <div class="columns ">
        <div class="column is-half is-fixed ">
          <!--figure class="pb-5">
          <iframe src="http://192.168.2.158:5601/app/kibana#/dashboard/87c18520-b337-11e8-b3e4-11404c6637fe?_g=(refreshInterval:(pause:!t,value:0),time:(from:now-15m,to:now))&_a=(description:'Kibana%20dashboard%20for%20DSIEM',filters:!(),fullScreenMode:!f,options:(darkTheme:!f,hidePanelTitles:!f,useMargins:!t),panels:!((embeddableConfig:(),gridData:(h:10,i:'2',w:18,x:0,y:9),id:ed4a2ca0-b335-11e8-b3e4-11404c6637fe,panelIndex:'2',type:visualization,version:'7.6.1'),(embeddableConfig:(spy:!n),gridData:(h:9,i:'7',w:22,x:12,y:0),id:a0f5c810-b339-11e8-b3e4-11404c6637fe,panelIndex:'7',type:visualization,version:'7.6.1'),(embeddableConfig:(vis:(legendOpen:!f)),gridData:(h:10,i:'8',w:16,x:18,y:9),id:'56c8e620-b337-11e8-b3e4-11404c6637fe',panelIndex:'8',type:visualization,version:'7.6.1'),(embeddableConfig:(),gridData:(h:9,i:'9',w:14,x:34,y:0),id:b4844b80-b45c-11e8-b3e4-11404c6637fe,panelIndex:'9',type:visualization,version:'7.6.1'),(embeddableConfig:(vis:(defaultColors:('0%20-%2020':'rgb(0,104,55)','20%20-%2050':'rgb(255,255,190)','50%20-%20100':'rgb(165,0,38)'),legendOpen:!t)),gridData:(h:9,i:'10',w:12,x:0,y:0),id:'217b62e0-b45e-11e8-b3e4-11404c6637fe',panelIndex:'10',type:visualization,version:'7.6.1'),(embeddableConfig:(),gridData:(h:16,i:'11',w:11,x:0,y:19),id:'820da8f0-b465-11e8-b3e4-11404c6637fe',panelIndex:'11',type:visualization,version:'7.6.1'),(embeddableConfig:(title:Alarms),gridData:(h:10,i:'12',w:14,x:34,y:9),id:'9badafd0-c009-11e8-b3e4-11404c6637fe',panelIndex:'12',title:Alarms,type:visualization,version:'7.6.1'),(embeddableConfig:(),gridData:(h:17,i:'14',w:48,x:0,y:35),id:c7aa9f10-e365-11e8-9c9b-556fd2a389b2,panelIndex:'14',type:search,version:'7.6.1'),(embeddableConfig:(),gridData:(h:16,i:'15',w:37,x:11,y:19),id:'334c77b0-b338-11e8-b3e4-11404c6637fe',panelIndex:'15',type:search,version:'7.6.1')),query:(language:lucene,query:''),timeRestore:!f,title:SIEM,viewMode:view)" style="display:block; width:100%; height:100vh;"></iframe>""
          </figure-->
        </div>

        <div class="column is-half right">
          <div class="container has-background-white">
            <br />
            <br />
            <br />
          </div>

          <question-task :taskData="Task1" @submit-points="submitPoints" > </question-task>
          <blank-task :taskData="Task2" @submit-points="submitPoints"> </blank-task>
          <blank-task :taskData="Task3" @submit-points="submitPoints"> </blank-task>
          <blank-task :taskData="Task4" @submit-points="submitPoints"> </blank-task>
          
          <editor-task :taskData="Task5" @submit-points="submitPoints"> </editor-task>
          <editor-task :taskData="Task6" @submit-points="submitPoints"> </editor-task>
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
