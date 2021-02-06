

<template>
  <div class="is-task" :id="taskData.taskNo" :class="{'directive-completed': !unlocked}">

    
   

    <div class="is-directive" >
      
        <text class="title is-json is-text-red" :class="{'has-text-grey': task_completed}" >{{taskData.title}}</text> 
        
        <text class="has-text-grey subtitle nice-subtitle " >
        {{taskData.subtitle}} </text>

        <div v-if="task_completed" class="is-primary-darker subtitle is-json ">Completed</div>  

         <div v-if="!unlocked">

          <text> You need to unlock the task first.</text>  

        </div> 
      
        

       

        <div v-if="task_completed && unlocked">

        <div class="notification notification-green is-light success-message " >
      <span class="is-primary-darker is-size-5 mb-5 "> You earned {{this.pointsOverall}} points. </span>
        </div> 
      
        <text class="subtitle mb-5">The correct directive is now applied to the SIEM system. <strong class="is-text-red">Refresh the SIEM Dashboard </strong> to see the upcoming alarms in a few seconds. You can now also view the directive in plain JSON. Try the button!</text>




 <div class="buttons is-left mt-5"> 
      <button @click="proceed()" class="button is-rounded submit-button" v-if="this.taskData.taskNo != 5">Proceed</button>
      <button @click="this.showTask=true;" class="button is-rounded " v-if="!showTask">Show Task</button>
      <button @click="this.showTask=false;" class="button is-rounded " v-else>Hide Task</button>
      </div> 
    

      
      
      </div> <br>
    

           


      <div :class="{'directive-completed': task_completed}" v-if="showTask">



      <vue-json-editor
        class="is-background-white mt-5"
        lang="en"
        :value="json"
        :show-btns="false"
        :mode="'code'"
        @json-save="onJsonSave"
        @json-change="onJsonChange"
        @has-error="onError"
      >
        
      </vue-json-editor>

      </div>

       <div class="notification is-danger is-light error-message " v-if="wrongGuess">
      <p class="is-red is-size-6 mb-3"> <strong> Not quite there yet. </strong>  Please correct the following lines: </p>
     
  <div v-for="error in this.mismatches" :key="error" class="ml-5">
          <li class="has-text-grey is-size-6"> {{error[0]}} : <strong class="is-json is-size-6">{{error[1]}}</strong></li>
        </div>
      <p class="is-primary-darker is-size-6 mt-2"> You have <strong> {{triesLeft}} </strong>  tries left. </p>

        
</div> 


      
<div class="buttons is-right mt-4" v-if="!task_completed" >
      <button class="button is-rounded is-small" @click="resetJson">RESET</button>
      <button class="button is-small submit-button is-rounded" @click="onJsonSave(json)">SUBMIT</button>
    </div>

    

     
    </div>
 
        </div>
        <div :id="this.endOfTask"></div>

</template>

  <script>
export default {
  name: "EditorTask",
  props: {
    taskData: {
      type: Object,
      required: true
    },
    unlocked: {}
  },
  data() {
    return {
      mismatches: [],
      task_completed: false,
      directive: this.taskData.directive,

      json_header: Object.fromEntries(
        Object.entries(this.taskData.directive.directives[0]).slice(0, 7)
      ),
      rules: this.taskData.directive.directives[0].rules,
      json: this.taskData.directiveSimilar,
      triesLeft: 5,
      wrongGuess: false,
      rightGuess: false,
      endOfTask: this.taskData.taskNo + "end",
      timestamp_before: null,
      timestamp_after: null,
      timeToComplete: null,
      showTask: true,
    };
  },

  components: {},

  methods: {
    completeTask() {
      this.task_completed = true;
      this.scrollToElement(this.taskData.taskNo);
      this.$emit('submit-points', this.triesLeft*5)
      //API functionalty
      this.$http.get(window.location.href.replace("7080", "9090") + "/" +this.taskData.apiPath).then((response) => {
  console.log(response.data)
}) 

      this.timestamp_after = new Date()
      this.timeToComplete = (this.timestamp_after.getTime() - this.timestamp_before.getTime())/1000
      this.$emit('task-completed',[this.timestamp_before, this.timestamp_after, this.timeToComplete], this.taskData.nextSection)

    },

    getJsonHeader(answer) {
      return Object.fromEntries(Object.entries(answer).slice(0, 7));
    },

    object_equals: function (x, y) {
      var equal = true;

      if (x === y) return true;
      // if both x and y are null or undefined and exactly the same

      if (!(x instanceof Object) || !(y instanceof Object)) equal = false;
      // if they are not strictly equal, they both need to be Objects

      if (x.constructor !== y.constructor) {
        console.log("mismatch in");
        equal = false;
      }
      // they must have the exact same prototype chain, the closest we can do is
      // test there constructor.

      for (var p in y) {
        console.log("test ",p)
        if (x[p] === y[p]) {
          continue;
        }
        // if they have the same strict value or identity then they are equal
        else {
          if (typeof x[p] !== "object") {
            console.log("found a none-Object that doesnt match", p, x[p]);
            if (!(p in x)) {
              this.mismatches.push(["Missing property", p]);
              equal = false;
            
            } else {
              console.log("here with", p)
              this.mismatches.push(["Incorrect value", "\""+p + "\": \"" + x[p] + "\""]);
              equal = false;
            }
          }

          // Numbers, Strings, Functions, Booleans must be strictly equal
          else {
            console.log("recursion")
            if (!this.object_equals(x[p], y[p])) {
              return false;
            }

            // Objects and Arrays must be tested recursively
          }
        }
      }

      for (var v in x) {
        if (!(v in y)) {
          this.mismatches.push(["Incorrect property ", v]);
          equal = false;
        }
      }
      return equal;
    },

    onJsonSave(value) {

      this.mismatches.length = 0; //reset error messages
      if (this.timestamp_before == null) { //set start time of task with first submit
        this.timestamp_before = new Date()  }
      if (
        !this.object_equals(value.directives[0], this.directive.directives[0])
      ) {
        this.scrollToElementBottom(this.endOfTask);
        this.wrongGuess = true;
        this.triesLeft -= 1

        if(this.triesLeft == 0){ //trainee is out of tries
          this.completeTask()
        }
        
      } else { //trainee completes Task successfully
        this.wrongGuess = false;
        this.rightGuess = true;
        this.completeTask()
        
      }
    },


    onJsonChange(value) {
      this.json = value;
    },

    onError(value) {
      console.log("value:", value);
    },
    resetJson() {
      this.json = this.directiveSimilar;
      
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
  this.scrollToElement(this.taskData.nextSection);

  
  

  },

  scrollToElementBottom(id) {
    //const el = document.getElementsByClassName(className)[0];
    const el = document.getElementById(id);

        setTimeout(() => {
   el.scrollIntoView(false, {behavior: 'smooth'});
});
  
  }


  },
};
</script>