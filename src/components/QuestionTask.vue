

<template>
  <div
    class="is-task"
    :id="taskData.tileNo"

  >
    <div class="is-directive">
      <text
        class="title is-json is-text-red"
        :class="{ 'has-text-grey': task_completed || completedBefore}"
        >{{ taskData.title }} </text
      >

      <text class="has-text-grey subtitle nice-subtitle">
        {{ taskData.subtitle }}
      </text>
     
      <div v-if="task_completed" class="is-primary-darker subtitle is-json">
        Completed 
      </div>


      <div v-if="task_completed">
        <div v-if="task_completed" class="notification notification-green is-light success-message">
          <span class="is-primary-darker is-size-5 mb-5">
            You earned {{ this.pointsOverall }} points.
          </span>
        </div>



        <div class="buttons is-left mt-5" v-if="tlx_completed || completedBefore"> <!--NEW-->
          <button @click="proceed()" class="button is-rounded submit-button">
            CONTINUE
          </button>
          <button
            @click="this.showTask = true"
            class="button is-rounded is-light is-red-br"
            v-if="!showTask"
          >
            Show
          </button>
          <button
            @click="this.showTask = false"
            class="button is-rounded is-light"
            v-else
          >
            Hide
          </button>
        </div>
      </div>
      <br />


       <button
            @click="this.submitStartTime()"
            class="button is-rounded submit-button mt-5"
            v-if="!taskStarted && !completedBefore"
          >
            START
          </button> <!--NEW-->

       <div v-if="showTask ">

      <div v-if="!viewJson" :class="{'directive-completed': task_completed || completedBefore }">



      


      <div v-for="(blank, index) in blanks" :key="blank">
        <text class="is-size-6 pt-3 has-text-weight-bold has-text-black">{{
          blank.name
        }}</text>
        <blank
          :blanks="blank"
          :index="index" 
          :tileNo="taskData.tileNo"
          :labelLong="true"
          :completedBefore="completedBefore"
          @blank-completed="completeTask"
          class="pt-4 pb-4"
          @buy-hint="buyHint"
        >  <!--NEW-->
        </blank>
      </div>
    </div>
  </div>
   <taskload v-if="showTlx" @submit-tlx="submitTlx"></taskload> <!-- NEW -->


  </div>
  </div>
</template>

  <script>
import Blank from "./Blank.vue";
import Taskload from "./Taskload.vue";

export default {
  name: "QuestionTask",
  props: {
    taskData: {
      type: Object,
      required: true,
    },
    tasksCompleted: {},
    order: {}
    
    
  },
  data() {
    return {
      blanks: this.taskData.blanks,
      viewJson: false,
      blanks_completed: 0,
      task_completed: false,
      pointsOverall: 0,
      timestamp_before: null,
      timestamp_after: null,
      timeToComplete: null,
      showTask: false,
      rating: null, //NEW
      tlxCompleted: false, //NEW
      showTlx: false, //NEW
      taskStarted: false //NEW
    };
  },

  components: {
    Blank, Taskload
  },

  computed: {
    completedBefore() {
      if(this.taskData.level<this.tasksCompleted){
        return true;
      } else{
        return false;
      }
    }

  },

  methods: {

    buyHint(){ //NEW
      this.$emit("submit-points", -1);
       try {
                    var hints = JSON.parse(localStorage.getItem("hints"));
                    hints[this.taskData.tileNo] = hints[this.taskData.tileNo] + 1;
                    localStorage.setItem("hints", JSON.stringify(hints));
                }
                catch (err) {
                    console.log("localStorage empty")
                }

    },

    
    submitStartTime(){ //NEW
    this.showTask= true;
    this.taskStarted= true;
      this.timestamp_before = new Date();
      this.$emit("submit-task-data", this.taskData.tileNo+"_start", String(this.timestamp_before))

    },

    submitOverallPoints(){//NEW

      this.$emit("submit-task-data", this.taskData.tileNo+"_points", this.pointsOverall)

    },

    submitHint(){//NEW

    var hints = JSON.parse(localStorage.getItem("hints"));
     var totalHints = hints[this.taskData.tileNo];
   this.$emit("submit-task-data", this.taskData.tileNo+"_hints", totalHints)

    },

    submitEndTime(){//NEW

      this.timestamp_after = new Date();
      this.$emit("submit-task-data", this.taskData.tileNo+"_end", String(this.timestamp_after))

    },
    
    /*startTask(){
        if (this.timestamp_before == null) {
        //set start time of task with first submit
        this.timestamp_before = new Date();
      }
    }, */

    submitTlx(rating){ //NEW

      this.rating = [];
      var fieldname = this.taskData.tileNo+"_tlx"
      for (const element of rating) {
      this.rating.push(element) }
      this.$emit('submit-task-data', fieldname, this.rating)
      this.tlxCompleted=true
        
        
        this.$emit("task-completed", [
          this.taskData.tileNo, //NEW
          this.timestamp_before,
          this.timestamp_after,
          this.timeToComplete,
        ]);
        
        this.scrollToElement(this.taskData.tileNo);

    },
    completeTask(points) {

      this.blanks_completed += 1;
      
      this.$emit("submit-points", points);
      this.pointsOverall += points;
      
      if (this.blanks_completed == Object.keys(this.blanks).length) {
        this.task_completed = true;
        this.submitOverallPoints()
        this.submitEndTime()
        this.submitHint()
        this.showTlx=true;
        this.scrollDown(this.taskData.tileNo) 
      
        
      }
      
    },

    proceed() {
this.showTask = false;
        var nextSection = this.order.indexOf(this.taskData.tileNo)+1
  
      this.scrollToElement(this.order[nextSection]);
  
    },

     scrollDown(id){
const el = document.getElementById(id);
                 setTimeout(() => {
                    el.scrollIntoView(false);
                }); },



    scrollToElement(id) {
      //const el = document.getElementsByClassName(className)[0];
      const el = document.getElementById(id);
          setTimeout(() => {
    el.scrollIntoView({behavior: 'smooth',alignToTop: true});
});
    },
  },
};
</script>