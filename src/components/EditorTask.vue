

<template>
  <div class="is-task" :id="taskData.taskNo">
    <div class="is-directive is-directive-editor">
      <text v-if="!task_completed">
        <text class="title is-json is-text-red">{{taskData.title}}</text> {{taskData.subtitle}}
      </text>

      <div v-else>
        <text class="is-primary-darker title is-json"> TaskCompleted. </text>
        <text
          >Your directive is now applied to the SIEM system.
          <strong class="is-text-red">Refresh Kibana </strong> to see the
          upcoming alarms in a few seconds. You can now also view the directive
          in plain JSON. Try the button!</text
        >
        <div class="notification notification-green is-light error-message " >
      <span class="is-primary-darker is-size-5 mb-3 "> You earned {{guessesLeft}} points. </span>
</div> 
<div class="buttons is-left" v-if="this.taskData.nextSection != null"> 
      <button @click="scrollToElement(this.taskData.nextSection)" class="button is-rounded submit-button">Proceed</button>
      </div> 
     
      </div>
      <br />

  
        

           


      <div :class="{'directive-completed': task_completed}">



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
      <p class="is-primary-darker is-size-6 mt-2"> You have <strong> {{guessesLeft}} </strong>  guesses left. </p>

        
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
    }
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
      guessesLeft: 5,
      wrongGuess: false,
      rightGuess: false,
      endOfTask: this.taskData.taskNo + "end"
    };
  },

  components: {},

  methods: {
    completeTask(points) {
      console.log(points);
      return false;
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

      this.mismatches.length = 0;
      if (
        !this.object_equals(value.directives[0], this.directive.directives[0])
      ) {
        this.scrollToElementBottom(this.endOfTask);
        this.wrongGuess = true;
        this.guessesLeft -= 1
        if(this.guessesLeft == 0){
          this.scrollToElement(this.taskData.taskNo);
          this.task_completed = true;
        }
        
      } else {
        this.task_completed = true;
        this.wrongGuess = false;
        this.rightGuess = true;
        this.scrollToElement(this.taskData.taskNo);
        this.$emit('submit-points', this.guessesLeft)
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
    console.log("element",el)

    if (el) {
      el.scrollIntoView({behavior: 'smooth'});
    }
  },

  scrollToElementBottom(id) {
    //const el = document.getElementsByClassName(className)[0];
    const el = document.getElementById(id);
    console.log("element",el)

    if (el) {
      el.scrollIntoView(false, {behavior: 'smooth'});
    }
  }


  },
};
</script>