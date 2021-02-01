

<template>
  <div class="box is-task">
   

    <div class="is-directive" >
      <text  v-if="!task_completed">
        <text class="title is-json is-text-red">TaskTwo:</text> Directive "Unknown IP address detected"
      </text>

        <div v-else>
      <div>
      <text class="is-primary-darker title is-json" >
        TaskCompleted.
    </text> 
        <text>Your directive is now applied to the SIEM system. <strong class="is-text-red">Refresh Kibana </strong> to see the upcoming alarms in a few seconds. You can now also view the directive in plain JSON. Try the button!</text>
    
    </div>
      <div class="buttons has-addons is-left pt-5"> 
      <button @click="view_json=false" class="button is-rounded" :class="{'is-red-br':!view_json}">Task</button>
      <button @click="view_json=true"  class="button is-rounded" :class="{'is-red-br':view_json}" >Plain Json</button>
      </div>  </div> <br>
    

      <div v-if="!view_json" class="pt-5" :class="{'directive-completed': task_completed}">
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

        <div class="is-rule" v-for="(item, index) in rules[0]" :key="item">
          <div v-if="check_blank(index) != null">
            <blank :blanks="blanks[check_blank(index)]" @blank-completed="completeTask"> </blank>
          </div>
          <div v-else>
            <json-field :name="index" :value="item"></json-field>
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
</template>

  <script>
import Blank from "./Blank.vue";
import JsonField from "./JsonField.vue";

export default {
  name: "BlankTask",
  props: {
    directive: {
      type: Object,
      required: false,
    },
    blanks: {
      required: true,
    },
    api_id: {
      required: true
    }
  },
  data() {
    return {
      json_header: Object.fromEntries(
        Object.entries(this.directive.directives[0]).slice(0, 7)
      ),
      rules: this.directive.directives[0].rules,
      view_json: false,
      blanks_completed: 0,
      task_completed: false
    };
  
  },

  

  components: {
    Blank,
    JsonField,
  },

 

  methods: {
    completeTask(points){
      console.log(points)
       this.$emit('submit-points', points)
        this.blanks_completed +=1;
        if (this.blanks_completed == Object.keys(this.blanks).length) {
          this.$http.get('http://192.168.2.158:9090/'+this.api_id).then((response) => {
  console.log(response.data)
})
          this.task_completed=true;
        } 
    },
    check_blank(index) {
      for (var i = 0; i < Object.keys(this.blanks).length; i++) {

        if (index == this.blanks[i].name){
            
            return i;
        } }
        return null;
        
    } 
  },
};
</script>