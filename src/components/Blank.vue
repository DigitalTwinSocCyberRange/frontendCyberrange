  <template>
  <form @submit.prevent="validateInput">
    <span class="control" id="mom">
      <label class="has-text-primary has-text-weight-bold input-label-2">
        {{ blanks.name }}:</label
      >
      <div v-if="!blanks.rightGuess && blanks.guessesLeft > 0">
        <input
          class="input input-short"
          v-model="t1_q1"
          placeholder="name of event type"
          id="t1_q1"
          :class="{ 'input-wrong': blanks.wrongGuess }"
        />
        <button
          class="button info-button is-rounded is-small has-tooltip-arrow has-tooltip-multiline has-tooltip-top"
          data-tooltip="This field requires the name of the event type, e.g. ICMP-RESPOND"
        >
          <span class="icon is-large">
            <i class="fas fa-2x fa-info-circle"></i
          ></span>
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
        <input class="input input-short" :value="blanks.answer" readonly />
      </div>
    </span>
    <div
      class="has-text-danger"
      v-if="blanks.wrongGuess && blanks.guessesLeft > 0"
    >
      You were wrong. You have {{ blanks.guessesLeft }} guesses left.
    </div>
    <div class="has-text-warning" v-else-if="blanks.rightGuess">
      Great guess! You earned {{ blanks.guessesLeft }} point(s).
    </div>
    <div class="has-text-danger" v-else-if="blanks.guessesLeft == 0">
      Sorry. You have no guesses left.
    </div>
  </form>
</template>

  

<script>
export default {
  name: "Blank",

  data() {
    return {
      t1_q1: null,
      answers: ["FIREWALL-WARNING"],
    };
  },

  props: {
    blanks: {
      type: Object,
      required: true,
    },
  },
  methods: {
    validateInput() {
      t1_q1 = this.t1_q1;
      if (t1_q1 != this.blanks.answer) {
        this.blanks.guessesLeft -= 1;
        this.blanks.wrongGuess = true;
        console.log("NOT ok");
      } else {
        this.blanks.rightGuess = true;
        this.blanks.wrongGuess = false;
        console.log(this.blanks.rightGuess);
      }
    },
  },

  computed: {
    completed() {
      var i;
      completed = true;
      for (i = 0; i < this.blanks.length; i++) {
        if (this.blanks.guessesLeft > 0 && !this.blanks.rightGuess) {
          return false;
        }
      }
      return true;
    },
  },
};
</script>

