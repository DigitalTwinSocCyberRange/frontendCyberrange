

<template>
  <div class="is-task" :id="taskData.tileNo" >

    
   

    <div class="is-directive" >
      
        <text class="title is-json is-text-red" :class="{'has-text-grey': task_completed}" >{{taskData.title}}</text> 
        
        <text class="has-text-grey subtitle nice-subtitle " >
        {{taskData.subtitle}} </text>

        <div v-if="task_completed" class="is-primary-darker subtitle is-json ">Completed</div>  

      
        

       

        <div v-if="task_completed ">

              <div class="notification notification-green is-light success-message " >
      <span class="is-primary-darker is-size-5 mb-5 "> You earned {{this.pointsOverall}} points. </span>
</div> 
      
        <text class="subtitle mb-5">The correct directive is now applied to the SIEM system. <strong class="is-text-red">Refresh Kibana </strong> to see the upcoming alarms in a few seconds. You can now also view the directive in plain JSON. Try the button!</text>




 <div class="buttons is-left mt-5"> 
      <button @click="proceed()" class="button is-rounded submit-button">Proceed</button>
      <button @click="this.showTask=true;" class="button is-rounded " v-if="!showTask">Show Task</button>
      <button @click="this.showTask=false;" class="button is-rounded " v-else>Hide Task</button>
      </div> 
    

      
      
      </div> <br>
    
      <div v-if="showTask ">
      <div class="buttons has-addons is-left pt-5" v-if="task_completed"> 
      <button @click="viewJson=false" class="button is-rounded " :class="{'is-red-br':!viewJson}">Task</button>
      <button @click="viewJson=true"  class="button is-rounded" :class="{'is-red-br':viewJson}" >Plain Json</button>
      </div>  
      
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
  </div>
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
    },
    order: {}
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
      timestamp_before: null,
      timestamp_after: null,
      timeToComplete: null,
      showTask: true,
    };

  
  },



  components: {
    Blank,
    JsonField,
  },

 

  methods: {
    completeTask(points){
      if (this.timestamp_before == null) { //set start time of task with first submit
        this.timestamp_before = new Date()
      }
       this.$emit('submit-points', points)
       this.pointsOverall += points;
       this.blanks_completed +=1;
        if (this.blanks_completed == Object.keys(this.blanks).length) {
           this.$http.get(window.location.href.replace("7080", "9090") +this.taskData.apiPath).then((response) => {
  console.log(response.data)
}) 

  /* this.$http.get("http://192.168.2.158:9090/" +this.taskData.apiPath).then((response) => {
  console.log(response.data)
}) */
          this.task_completed=true;
          
          this.timestamp_after = new Date()
          this.timeToComplete = (this.timestamp_after.getTime() - this.timestamp_before.getTime())/1000
         
            this.$emit('task-completed',[this.timestamp_before, this.timestamp_after, this.timeToComplete]);
          this.scrollToElement(this.taskData.tileNo);
          
       

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
    
    setTimeout(() => {
    el.scrollIntoView({behavior: 'smooth',alignToTop: true});
});

  },

  proceed(){
    
this.showTask = false;
   var nextSection = this.order.indexOf(this.taskData.tileNo)+1
      this.scrollToElement(this.order[nextSection]);

  
  

  },

  format_time(s) {
  const dtFormat = new Intl.DateTimeFormat('de-DE', {
    //timeStyle: 'medium',
    //timeZone: 'GMT'
  });
  
  return dtFormat.format(new Date(s * 1e3));
}

  }
  
};
</script>