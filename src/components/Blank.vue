  <template>
  <form @submit.prevent="validateInput">
    <span class=" is-json is-size-7 blank-wrapper" >

      <div v-if="!blank.rightTry && blank.triesLeft > 0">
        <div class="table-wrapper" >
        <input class="input is-json input-label-short is-size-8" :value="blank.name+': '" readonly v-if="!labelLong" > 
        <span>
        <input
          class="input blank-input is-short is-json is-size-8"
          v-model="t1_q1"
          :placeholder="blank.placeholder"
          :class="{ 'input-wrong': blank.wrongTry, }"
        /> 
        
         <span   class="icon has-tooltip-arrow has-tooltip-multiline has-tooltip-top" :data-tooltip="blank.dataTooltip">
            <font-awesome-icon v-if="blank.dataTooltip != null" icon="info-circle" />
          </span>
        </span>
      
        
         

          <button
          class="button is-small submit-button is-rounded"
          type="submit"
          value="Submit"
        >
          <span>SUBMIT</span>
        </button>
   

        
      </div>
      </div>
      <div v-else>
         <input class="input is-json input-label-short is-size-8" :value="blank.name+ ': '" readonly v-if="!labelLong"> 
        <input class="input blank-input is-short" :value="blank.answer" readonly />
      </div>
    </span>
    <div
      class="has-text-danger"
      v-if="blank.wrongTry && blank.triesLeft > 0">
      You were wrong. You have {{ blank.triesLeft }} Tries left.
    </div>
    <div class="has-text-primary" v-else-if="blank.rightTry">
      Great Try! You earned {{ blank.triesLeft }} point(s).
    </div>
    <div class="has-text-danger" v-else-if="blank.triesLeft == 0">
      Sorry. You have no tries left.
    </div>

  </form>
</template>

  

<script>



export default {
  name: "Blank",

  data() {
    return {
      t1_q1: "",
      blank: this.blanks,
    };
  },

  props: {
    blanks: {
      required: true,
    },
    labelLong: {}
  },

  methods: {
    completed() {
        if (this.blank.triesLeft > 0 && !this.blank.rightTry) {
          return false;
      }
      return true;
      
    },
    validateInput() {
      if (this.t1_q1 != this.blank.answer) {
        this.blank.triesLeft -= 1;
        this.blank.wrongTry = true;
     
        
      } else {
        this.blank.rightTry = true;
        this.blank.wrongTry = false;

        
        
      }
      if(this.completed()){
          this.$emit('blank-completed', this.blank.triesLeft) //the trainee gets as many points for the blank as he or she has tries left
      }
    },


  },

  computed: {
    
  },
};
</script>

