  <template>
  <form @submit.prevent="validateInput">
    <span class=" is-json is-size-7 blank-wrapper" >

      <div v-if="!blank.rightGuess && blank.guessesLeft > 0">
        <input class="input is-json input-label-short is-size-8" :value="blank.name" readonly v-if="!labelLong" > 
        <span>
        <input
          class="input input-short is-json is-size-8"
          v-model="t1_q1"
          placeholder="name of event type"
          :class="{ 'input-wrong': blank.wrongGuess, }"
        /> </span>
        <button
          class="button info-button is-rounded is-small has-tooltip-arrow has-tooltip-multiline has-tooltip-top"
          data-tooltip="This field requires the name of the event type, e.g. ICMP-RESPOND"
        >
          <span id="app" class="icon is-large info-button">
            <font-awesome-icon icon="info-circle" />
          </span>
        </button>

        <button
          class="button is-small submit-button is-rounded"
          type="submit"
          value="Submit"
        >
          <span>SUBMIT</span>
        </button>
      </div>
      <div v-else>
        <input class="input input-short" :value="blank.answer" readonly />
      </div>
    </span>
    <div
      class="has-text-danger"
      v-if="blank.wrongGuess && blank.guessesLeft > 0">
      You were wrong. You have {{ blank.guessesLeft }} guess(es) left.
    </div>
    <div class="has-text-primary" v-else-if="blank.rightGuess">
      Great guess! You earned {{ blank.guessesLeft }} point(s).
    </div>
    <div class="has-text-danger" v-else-if="blank.guessesLeft == 0">
      Sorry. You have no guesses left.
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
        if (this.blank.guessesLeft > 0 && !this.blank.rightGuess) {
          return false;
      }
      return true;
      
    },
    validateInput() {
      if (this.t1_q1 != this.blank.answer) {
        this.blank.guessesLeft -= 1;
        this.blank.wrongGuess = true;
     
        
      } else {
        this.blank.rightGuess = true;
        this.blank.wrongGuess = false;

        
        
      }
      if(this.completed()){
          this.$emit('blank-completed', this.blank.guessesLeft) //the trainee gets as many points for the blank as he or she has guesses left
      }
    },


  },

  computed: {
    
  },
};
</script>

