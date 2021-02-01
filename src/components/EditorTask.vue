

<template>
  <div class="box is-task">
   
    <div class="is-directive" >
      <text  v-if="!task_completed">
        <text class="title is-json is-text-red">TaskFive:</text> Directive "Log File Manipulation"
      </text>

        <div v-else>
      <text class="is-primary-darker title is-json" >
        TaskCompleted.
    </text> 
        <text>Your directive is now applied to the SIEM system. <strong class="is-text-red">Refresh Kibana </strong> to see the upcoming alarms in a few seconds. You can now also view the directive in plain JSON. Try the button!</text>
  
       </div> <br>

    <vue-json-editor
      class="is-background-white"
      lang="en"
      :value="directive_similar"
      :show-btns="true" 
      :mode="'code'" 
      @json-save="onJsonSave" 
      @has-error="onError">  
    >
    </vue-json-editor>
     <button type="button" @click="resetJson">reset</button>
  </div>
  </div>
  
</template>

  <script>


export default {
  name: "EditorTask",
  props: {
    directive_similar: {
      type: Object,
      required: false,
    },
     directive: {
      type: Object,
      required: false,
    },
    api_id: {
      required: true
    }
  },
  data() {
    return {
      task_completed: false
    };
  
  },

  

  components: {

  },

 

  methods: {
    completeTask(points){
        console.log(points)
      return false;
    },
    
    
    onJsonSave (value) {
        console.log(this.directive.directives[0].name);
      
      if(JSON.stringify(this.directive.directives[0].name)==JSON.stringify(value.directives[0].name)){
        console.log("SAME");
        console.log(this.task_completed);
        this.task_completed=true;
        console.log(this.task_completed);
      }
    },
    onError (value) {
      console.log('value:', value);
    },
    resetJson () {
      this.json = [
        {"name": "Dirk", "age": 1234},
        {"name": "Jason"}
      ]
    },
  }
  
};
</script>