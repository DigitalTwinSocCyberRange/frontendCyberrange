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
            <h1 class="title">DigitalTwinCyberrange</h1>
          </a>
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
        <div class="column is-half">
          <!--figure>
          <iframe src="http://192.168.2.158:5601/app/kibana#/dashboard/87c18520-b337-11e8-b3e4-11404c6637fe?_g=(refreshInterval:(pause:!t,value:0),time:(from:now-15m,to:now))&_a=(description:'Kibana%20dashboard%20for%20DSIEM',filters:!(),fullScreenMode:!f,options:(darkTheme:!f,hidePanelTitles:!f,useMargins:!t),panels:!((embeddableConfig:(),gridData:(h:10,i:'2',w:18,x:0,y:9),id:ed4a2ca0-b335-11e8-b3e4-11404c6637fe,panelIndex:'2',type:visualization,version:'7.6.1'),(embeddableConfig:(spy:!n),gridData:(h:9,i:'7',w:22,x:12,y:0),id:a0f5c810-b339-11e8-b3e4-11404c6637fe,panelIndex:'7',type:visualization,version:'7.6.1'),(embeddableConfig:(vis:(legendOpen:!f)),gridData:(h:10,i:'8',w:16,x:18,y:9),id:'56c8e620-b337-11e8-b3e4-11404c6637fe',panelIndex:'8',type:visualization,version:'7.6.1'),(embeddableConfig:(),gridData:(h:9,i:'9',w:14,x:34,y:0),id:b4844b80-b45c-11e8-b3e4-11404c6637fe,panelIndex:'9',type:visualization,version:'7.6.1'),(embeddableConfig:(vis:(defaultColors:('0%20-%2020':'rgb(0,104,55)','20%20-%2050':'rgb(255,255,190)','50%20-%20100':'rgb(165,0,38)'),legendOpen:!t)),gridData:(h:9,i:'10',w:12,x:0,y:0),id:'217b62e0-b45e-11e8-b3e4-11404c6637fe',panelIndex:'10',type:visualization,version:'7.6.1'),(embeddableConfig:(),gridData:(h:16,i:'11',w:11,x:0,y:19),id:'820da8f0-b465-11e8-b3e4-11404c6637fe',panelIndex:'11',type:visualization,version:'7.6.1'),(embeddableConfig:(title:Alarms),gridData:(h:10,i:'12',w:14,x:34,y:9),id:'9badafd0-c009-11e8-b3e4-11404c6637fe',panelIndex:'12',title:Alarms,type:visualization,version:'7.6.1'),(embeddableConfig:(),gridData:(h:17,i:'14',w:48,x:0,y:35),id:c7aa9f10-e365-11e8-9c9b-556fd2a389b2,panelIndex:'14',type:search,version:'7.6.1'),(embeddableConfig:(),gridData:(h:16,i:'15',w:37,x:11,y:19),id:'334c77b0-b338-11e8-b3e4-11404c6637fe',panelIndex:'15',type:search,version:'7.6.1')),query:(language:lucene,query:''),timeRestore:!f,title:SIEM,viewMode:view)" style="display:block; width:100%; height:100vh;"></iframe>""
          </figure-->
        </div>

        <div class="column is-half">
          <div class="container has-background-white">
            <br />
            <br />
            <br />
          </div>
          <div class="box">
            <h1 class="subtitle">Welcome. This is a Cyber Range</h1>

            <div class="columns">
              <div class="box is-demo-directive has-text-white column is-half">
                <div class="is-directive">
                  <json-field :name="'id'" :value="'1'"></json-field>
                  <json-field
                    :name="'name'"
                    :value="'Unknown IP address detected'"
                  ></json-field>
                  <json-field
                    :name="'all_rules_always_active:'"
                    :value="'false'"
                  ></json-field>
                  <json-field
                    :name="'kingdom'"
                    :value="'Attack detection'"
                  ></json-field>
                  <json-field
                    :name="'category'"
                    :value="'Malicous insider'"
                  ></json-field>

                  <div class="is-rule">
                    <json-field :name="'stage'" :value="'1'"></json-field>
                    <json-field
                      :name="'plugin_id'"
                      :value="'1008'"
                    ></json-field>
                    <json-field :name="' occurrence'" :value="'1'"></json-field>
                    <json-field :name="'from'" :value="'ANY'"></json-field>
                    <json-field :name="'to'" :value="'ANY'"></json-field>
                    <json-field
                      :name="'type'"
                      :value="'PluginRule'"
                    ></json-field>
                    <json-field :name="'port_from'" :value="'ANY'"></json-field>
                    <json-field :name="'port_to'" :value="'ANY'"></json-field>
                    <json-field :name="'protcol'" :value="'ANY'"></json-field>
                    <json-field :name="'reliabilty'" :value="'10'"></json-field>
                    <json-field :name="'timeout'" :value="'0'"></json-field>
                  </div>
                </div>
              </div>

              <div class="column is-half">hello</div>
            </div>
          </div>

          <div class="box has-background-black has-text-white">
            <div>
              <text class="subtitle has-text-white is-family-code">
                Task 1: Complete the directive
              </text>
              <br />
              <text class="is-family-code">
                Complete
                <strong class="has-text-primary is-family-code">name</strong>
                and
                <strong class="has-text-primary is-family-code"
                  >plugin-sid</strong
                >
                in the following directive.
              </text>
              <br />
            </div>
            <br />

            <div class="is-directive">
              <h2 class="has-text-primary subtitle">
                Directive 1: Unknown IP address detected
              </h2>
              <json-field :name="'id'" :value="'1'"></json-field>
              <json-field
                :name="'name'"
                :value="'Unknown IP address detected'"
              ></json-field>
              <json-field
                :name="'all_rules_always_active:'"
                :value="'false'"
              ></json-field>
              <json-field
                :name="'kingdom'"
                :value="'Attack detection'"
              ></json-field>
              <json-field
                :name="'category'"
                :value="'Malicous insider'"
              ></json-field>

              <div class="is-rule">
                <blank :blanks="blanks[0]"></blank>
                <json-field :name="'stage'" :value="'1'"></json-field>
                <json-field :name="'plugin_id'" :value="'1008'"></json-field>
                <blank :blanks="blanks[1]"></blank>
                <json-field :name="' occurrence'" :value="'1'"></json-field>
                <json-field :name="'from'" :value="'ANY'"></json-field>
                <json-field :name="'to'" :value="'ANY'"></json-field>
                <json-field :name="'type'" :value="'PluginRule'"></json-field>
                <json-field :name="'port_from'" :value="'ANY'"></json-field>
                <json-field :name="'port_to'" :value="'ANY'"></json-field>
                <json-field :name="'protcol'" :value="'ANY'"></json-field>
                <json-field :name="'reliabilty'" :value="'10'"></json-field>
                <json-field :name="'timeout'" :value="'0'"></json-field> <br />
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
import Blank from "./components/Blank.vue";
import JsonField from "./components/JsonField.vue";

export default {
  name: "App",
  components: {
    Blank,
    JsonField,
  },

  data() {
    return {
      active: [false, false],
      points: 34,
      level: 2,

      blanks: [
        {
          name: "name",
          answer: "FIREWALL-WARNING",
          guessesLeft: 3,
          wrongGuess: false,
          rightGuess: false,
        },
        {
          name: "plugin_sid",
          answer: "11",
          guessesLeft: 3,
          wrongGuess: false,
          rightGuess: false,
        },
      ],
    };
  },
};
</script>

<style>
@import './../css/bulma.css';
</style>
