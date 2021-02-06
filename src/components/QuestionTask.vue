

<template>
  <div
    class="is-task"
    :id="taskData.taskNo"
    :class="{ 'directive-completed': !unlocked }"
  >
    <div class="is-directive">
      <text
        class="title is-json is-text-red"
        :class="{ 'has-text-grey': task_completed }"
        >{{ taskData.title }}</text
      >

      <text class="has-text-grey subtitle nice-subtitle">
        {{ taskData.subtitle }}
      </text>

      <div v-if="task_completed" class="is-primary-darker subtitle is-json">
        Completed
      </div>

      <div v-if="!unlocked">
        <text> You need to unlock the task first.</text>
      </div>

      <div v-if="task_completed && unlocked">
        <div class="notification notification-green is-light success-message">
          <span class="is-primary-darker is-size-5 mb-5">
            You earned {{ this.pointsOverall }} points.
          </span>
        </div>


        <div class="buttons is-left mt-5">
          <button @click="proceed()" class="button is-rounded submit-button">
            Proceed
          </button>
          <button
            @click="this.showTask = true"
            class="button is-rounded"
            v-if="!showTask"
          >
            Show Task
          </button>
          <button
            @click="this.showTask = false"
            class="button is-rounded"
            v-else
          >
            Hide Task
          </button>
        </div>
      </div>
      <br />

       <div v-if="showTask && unlocked">

      <div v-if="!viewJson" class="pt-5" :class="{'directive-completed': task_completed}">

      <div v-for="blank in blanks" :key="blank">
        <text class="is-size-6 pt-3 has-text-weight-bold has-text-black">{{
          blank.name
        }}</text>
        <blank
          :blanks="blank"
          :labelLong="true"
          @blank-completed="completeTask"
          class="pt-4 pb-4"
        >
        </blank>
      </div>
    </div>
  </div>
  </div>
  </div>
</template>

  <script>
import Blank from "./Blank.vue";

export default {
  name: "QuestionTask",
  props: {
    taskData: {
      type: Object,
      required: true,
    },
    unlocked: {},
  },
  data() {
    return {
      blanks: this.taskData.blanks,
      viewJson: false,
      blanks_completed: 0,
      task_completed: false,
      pointsOverall: 0,
      endOfTask: this.taskData.taskNo.toString + "end",
      timestamp_before: null,
      timestamp_after: null,
      timeToComplete: null,
      showTask: true,
    };
  },

  components: {
    Blank,
  },

  methods: {
    completeTask(points) {
      if (this.timestamp_before == null) {
        //set start time of task with first submit
        this.timestamp_before = new Date();
      }
      this.$emit("submit-points", points);
      this.pointsOverall += points;
      this.blanks_completed += 1;
      if (this.blanks_completed == Object.keys(this.blanks).length) {
            this.$http.get(window.location.href.replace("7080", "9090") + "/" +this.taskData.apiPath).then((response) => {
  console.log(response.data)
}) 
        this.task_completed = true;
        this.timestamp_after = new Date();
        this.timeToComplete =
          (this.timestamp_after.getTime() - this.timestamp_before.getTime()) /
          1000;
        this.$emit("task-completed", [
          this.timestamp_before,
          this.timestamp_after,
          this.timeToComplete,
        ], this.taskData.nextSection);
        this.scrollToElement(this.taskData.taskNo);
        
      }
      
    },

    proceed() {
this.showTask = false;
  this.scrollToElement(this.taskData.nextSection);
  
    },



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