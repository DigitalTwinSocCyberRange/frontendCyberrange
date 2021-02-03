

<template>
  <div class="is-task" :id="taskData.taskNo">
   

    <div class="is-directive" >
      <text  v-if="!task_completed">
        <text class="title is-json is-text-red">{{taskData.title}}</text> {{taskData.subtitle}}
      </text>

        <div v-else>
      <div>
      <text class="is-primary-darker title is-json" >
        TaskCompleted.
    </text> 
        <text>Your directive is now applied to the SIEM system. <strong class="is-text-red">Refresh Kibana </strong> to see the upcoming alarms in a few seconds. You can now also view the directive in plain JSON. Try the button!</text>
    
    <div class="notification notification-green is-light error-message " >
      <span class="is-primary-darker is-size-5 mb-3 "> You earned {{this.pointsOverall}} points. </span>
</div> 




    </div>
      <div class="buttons has-addons is-left pt-5"> 
      <button @click="viewJson=false" class="button is-rounded" :class="{'is-red-br':!viewJson}">Task</button>
      <button @click="viewJson=true"  class="button is-rounded" :class="{'is-red-br':viewJson}" >Plain Json</button>
      </div>  

      <div class="buttons is-left"> 
      <button @click="scrollToElement(this.taskData.nextSection)" class="button is-rounded submit-button">Proceed</button>
      </div>  

      
      
      
      
      </div> <br>
    

      <div v-if="!viewJson" class="pt-5" :class="{'directive-completed': task_completed}">
      <span class="has-text-black is-json is-size-7">
        directives[{{ Object.keys(directive).length }}]:
      </span>
      <div class="directive-header">
        <div v-for="(item, index) in json_header" :key="item">
          <json-field :name="index" :value="item"></json-field>
        </div>

        <span class="has-text-black is-json is-size-7">
          rules[{{ rules.length }}]:
        </span>

        <div class="is-rule " v-for="(rule, index) in rules" :key="rule" :class="{'is-rule-level-2': index==1, 'is-rule-level-3': index==2}" >
        <div v-for="(item, index_inner) in rule" :key="item" >
          <div v-if="checkBlank(index_inner, index) != null">
            <blank :blanks="blanks[checkBlank(index_inner, index)]" @blank-completed="completeTask"> </blank>
          </div>
          <div v-else>
            <json-field :name="index_inner" :value="item"></json-field>
          </div>
        </div>
        </div>
      </div>
    </div>
    

    <div v-else>
    <vue-json-editor
      class="is-background-white"
      lang="en"
      :value="directive"
      :mode="'code'"
    >
    </vue-json-editor>
  </div>
  </div>
    <div :id="endOfTask"> </div>
  </div>
  
</template>

  <script>

import Blank from "./Blank.vue";
import JsonField from "./JsonField.vue";
export default {
  name: "BlankTask",
  props: {
    taskData: {
      type: Object,
      required: true
    }
  },
  data() {


    return {
      directive: this.taskData.directive,

      json_header: Object.fromEntries(
        Object.entries(this.taskData.directive.directives[0]).slice(0, 7)
      ),
      rules: this.taskData.directive.directives[0].rules,
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
    JsonField,
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
    checkBlank(index_inner, stage) {
      for (var i = 0; i < Object.keys(this.blanks).length; i++) {

        if (index_inner == this.blanks[i].name && (stage+1 == this.blanks[i].stage)){
            
            return i;
        } }
        return null;
        
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