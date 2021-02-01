<template>
  <head>
    <meta charset="UTF-8" />
    <title>cr</title>
  </head>

  <body>
    <div id="app">
      <nav
        class="navbar is-fixed-top"
        role="navigation"
        aria-label="main navigation"
      >
        <div class="navbar-brand">
          <a class="navbar-item">
            <h1 class="title is-json">DigitalTwinCyberrange</h1> </a
          ><br />
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <a class="button is-primary">
                  <strong>Points: {{ points }}</strong>
                </a>

                <a class="button is-primary is-light">
                  <strong>Level: {{ level }}</strong>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div class="columns">
        <div class="column is-half is-fixed">
          <!--figure>
          <iframe src="http://192.168.2.158:5601/app/kibana#/dashboard/87c18520-b337-11e8-b3e4-11404c6637fe?_g=(refreshInterval:(pause:!t,value:0),time:(from:now-15m,to:now))&_a=(description:'Kibana%20dashboard%20for%20DSIEM',filters:!(),fullScreenMode:!f,options:(darkTheme:!f,hidePanelTitles:!f,useMargins:!t),panels:!((embeddableConfig:(),gridData:(h:10,i:'2',w:18,x:0,y:9),id:ed4a2ca0-b335-11e8-b3e4-11404c6637fe,panelIndex:'2',type:visualization,version:'7.6.1'),(embeddableConfig:(spy:!n),gridData:(h:9,i:'7',w:22,x:12,y:0),id:a0f5c810-b339-11e8-b3e4-11404c6637fe,panelIndex:'7',type:visualization,version:'7.6.1'),(embeddableConfig:(vis:(legendOpen:!f)),gridData:(h:10,i:'8',w:16,x:18,y:9),id:'56c8e620-b337-11e8-b3e4-11404c6637fe',panelIndex:'8',type:visualization,version:'7.6.1'),(embeddableConfig:(),gridData:(h:9,i:'9',w:14,x:34,y:0),id:b4844b80-b45c-11e8-b3e4-11404c6637fe,panelIndex:'9',type:visualization,version:'7.6.1'),(embeddableConfig:(vis:(defaultColors:('0%20-%2020':'rgb(0,104,55)','20%20-%2050':'rgb(255,255,190)','50%20-%20100':'rgb(165,0,38)'),legendOpen:!t)),gridData:(h:9,i:'10',w:12,x:0,y:0),id:'217b62e0-b45e-11e8-b3e4-11404c6637fe',panelIndex:'10',type:visualization,version:'7.6.1'),(embeddableConfig:(),gridData:(h:16,i:'11',w:11,x:0,y:19),id:'820da8f0-b465-11e8-b3e4-11404c6637fe',panelIndex:'11',type:visualization,version:'7.6.1'),(embeddableConfig:(title:Alarms),gridData:(h:10,i:'12',w:14,x:34,y:9),id:'9badafd0-c009-11e8-b3e4-11404c6637fe',panelIndex:'12',title:Alarms,type:visualization,version:'7.6.1'),(embeddableConfig:(),gridData:(h:17,i:'14',w:48,x:0,y:35),id:c7aa9f10-e365-11e8-9c9b-556fd2a389b2,panelIndex:'14',type:search,version:'7.6.1'),(embeddableConfig:(),gridData:(h:16,i:'15',w:37,x:11,y:19),id:'334c77b0-b338-11e8-b3e4-11404c6637fe',panelIndex:'15',type:search,version:'7.6.1')),query:(language:lucene,query:''),timeRestore:!f,title:SIEM,viewMode:view)" style="display:block; width:100%; height:100vh;"></iframe>""
          </figure-->
        </div>

        <div class="column is-half right">
          <div class="container has-background-white">
            <br />
            <br />
            <br />
          </div>
          
          <blank-task :directive="json[0]" :blanks="blanks" :api_id="api_ids[0]" @submit-points="submitPoints"> </blank-task>
          <editor-task :directive="json[0]" :directive_similar="json[1]" :api_id="api_ids[0]"> </editor-task>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
import BlankTask from "./components/BlankTask.vue";
import EditorTask from "./components/EditorTask.vue";

export default {
  name: "App",
  components: {
    BlankTask,
    EditorTask
  },

  data() {
    return {

      api_ids: ["attacker", "mitm", "arp", "log_manipulation", "dos"],
    
      json: [{
        directives: [
          {
            id: 1,
            name: "ATTACKER",
            priority: 3,
            disabled: false,
            all_rules_always_active: false,
            kingdom: "Exploitation & Installation",
            category: "Intrusion Detection",
            rules: [
              {
                name: "FIREWALL-WARNING",
                stage: 1,
                plugin_id: 1008,
                plugin_sid: "BLANK: [9]",
                occurrence: 1,
                from: "ANY",
                to: "ANY",
                type: "PluginRule",
                port_from: "ANY",
                port_to: "ANY",
                protocol: "ANY",
                reliability: 10,
                timeout: 0,
              },
            ],
          },
        ],
      }, {directives: [
          {
            id: 1,
            name: "SECOND_DIRECTIVE",
            priority: 3,
            disabled: false,
            all_rules_always_active: false,
            kingdom: "Exploitation & Installation",
            category: "Intrusion Detection",
            rules: [
              {
                name: "FIREWALL-WARNING",
                stage: 1,
                plugin_id: 1008,
                plugin_sid: "BLANK: [9]",
                occurrence: 1,
                from: "ANY",
                to: "ANY",
                type: "PluginRule",
                port_from: "ANY",
                port_to: "ANY",
                protocol: "ANY",
                reliability: 10,
                timeout: 0,
              },
            ],
          },
        ],
      }], 

      points: 8,
      level_old: 1,
      blanks: [
        {
          name: "name",
          answer: "FIREWALL-WARNING",
          guessesLeft: 3,
          placeholder: "name of event type",
          wrongGuess: false,
          rightGuess: false,
        },
        {
          name: "plugin_sid",
          answer: "11",
          placeholder: "id of event type",
          guessesLeft: 3,
          wrongGuess: false,
          rightGuess: false,
        },
      ],
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
