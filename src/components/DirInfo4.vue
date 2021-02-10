

<template>
  <div class="is-info content" id="info4">
    <!--text
      class="title  has-text-yellow"
      :class="{ 'has-text-grey': task_completed }"
      >{{ infoData.title }}</text
    >

    <text class="has-text-grey subtitle nice-subtitle">
      
    </text-->

    <div class="columns mt-3 mr-1">
      <div
        class="column is-two-thirds mr-2 content has-border-right is-size-6 has-text-justified"
      >
        <text class="has-text-yellow has-text-left title is-json"
          >DirectiveSyntaxThree.</text
        >
        <br />
        <text class="has-text-grey subtitle nice-subtitle"
          >Stages, Occurrences and Timeouts.</text
        >

        <div class="buttons is-left mt-5">
          <button class="button is-rounded submit-button" @click="proceed()" >Proceed</button>
          <button
            @click="this.showInfo = true"
            class="button is-rounded"
            v-if="!showInfo"
          >
            Show Info
          </button>
          <button
            @click="this.showInfo = false"
            class="button is-rounded"
            v-else
          >
            Hide
          </button>
        </div>

        <div v-if="showInfo" class="pt-4">
          <p>
            If a directive shall be designed to detect the occurrence of more than one Security Event, it needs to contain  <strong> multiple rules</strong>. Hereby the following properties need to be considered:
           
          </p>
          <ul>
            <li>
              <strong class="">stage:</strong> every rule is given a stage, starting by 1. If the condition of the rule at stage 1 is met, it moves up to the next stage and so on. Like that, an alarm is only set off when every rule condition is fulfilled (in the given order).
            </li>
            <li>
              <strong class="">occurrence:</strong> states how many SIEM Events of the given Event Type need to occur to fulfil the rule.
              
              <strong class="is-text-red">Attention: </strong> Within Stage 1, only <strong class="is-json"> occurrence: 1 </strong> is valid.
            </li>
             <li>
              <strong class="">timeout:</strong> timespan (in seconds) how long a rule is valid. Timeout only applies when occurrence>1, so <strong class="is-json"> occurrence: 1 </strong> always goes along with <strong class="is-json"> timeout: 0 </strong>
            </li>  <br>
           
              <strong class="is-primary-darker">Example:</strong> 
           
         
              
                <ul class="is-italic">
                  <li> <strong>Stage 1:</strong> Fulfilled when one Event of the Event Type "Liquid Level of tank (SENSOR 1) under LowerBound" is detected. Stage 1, so always <strong class="is-json">occurrence: 1, timeout: 0 </strong> <br>
                 <span>&#8594;</span>  Moving up to Stage 2
                  </li> <br>
                  <li> <strong>Stage 2:</strong> Fulfilled when <strong class="is-primary-darker"> five </strong> Events (<strong class="is-json">occurrence: <span class="is-primary-darker">5</span></strong>) of the given Event Type are detected in the next<strong class="is-primary-darker"> 30 seconds </strong>
                  (<strong class="is-json">timeout: <span class="is-primary-darker">30</span></strong>) <span>&#8594;</span>  Moving up to Stage 3
                  </li> <br>
                  <li> <strong>Stage 3:</strong> Fulfilled when <strong class="is-primary-darker"> one </strong> Event (<strong class="is-json">occurrence: <span class="is-primary-darker">1</span></strong>) of the Event Type "Flow level (SENSOR 2) under SENSOR2_THRESH" is detected in the next<strong class="is-primary-darker"> 60 seconds </strong>
                  (<strong class="is-json">timeout: <span class="is-primary-darker">60</span> </strong>) <span>&#8594;</span>  Setting off alarm "Out of liquid"
                  </li>
             
                </ul>

           
          </ul>



     


          <div class="buttons is-left mt-5"></div>
        </div>
      </div>

      <div class="column is-one-third" v-if="showInfo">
        <div class="pl-1 pt-3 pb-3 pr-3">
          <div v-for="(item, index) in json_header" :key="item">
            <json-field
              v-if="showHighlights"
              :name="index"
              :value="item"
              :grey="true"
            ></json-field>
            <json-field v-else :name="index" :value="item"></json-field>
          </div>
        </div>

        <div class="pl-1 pt-3 pb-3 pr-3 border-rule">
          <span
            class="has-text-black is-json is-size-7"
            :class="{ 'has-text-grey': showHighlights }"
          >
            rules[{{ rules.length }}]:
          </span>

          <div
            class="is-rule"
            v-for="(rule, index) in rules"
            :key="rule"
            :class="{
              'is-rule-level-2': index == 1,
              'is-rule-level-3': index == 2,
            }"
          >
            <div>
              <div v-for="(item, index_inner) in rule" :key="item">
                <div v-if="checkHighlight(index_inner, index) != null">
                    <json-field :name="index_inner" :value="item" :highlighted="true"></json-field>
                
                </div>
            
                <json-field v-else json-field :name="index_inner" :value="item" grey="true"></json-field>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

</template>

  <script>
import JsonField from "./JsonField.vue";

export default {
  name: "DirInfo4",
  components: {
    JsonField,
  },
  props: {
    infoData: {
      type: Object,
      required: true,
    },
    order:{}
  },
  data() {
    return {
      directive: this.infoData.directive,

      json_header: Object.fromEntries(
        Object.entries(this.infoData.directive.directives[0]).slice(0, 7)
      ),
      rules: this.infoData.directive.directives[0].rules,
      showAdditionalInformation: false,
      showDirective: true,
      showHighlights: true,
      showInfo: true,
    };
  },

  methods: {
    checkHighlight(index_inner, stage) {
      for (var i = 0; i < Object.keys(this.infoData.highlights).length; i++) {
        if (
          index_inner == this.infoData.highlights[i].name &&
          stage + 1 == this.infoData.highlights[i].stage
        ) {
          return i;
        }
      }
      return null;
    },

     proceed() {
      this.showAdditionalInformation = false;
      var nextSection = this.order.indexOf(this.infoData.tileNo)+1
      this.scrollToElement(this.order[nextSection]);
    },

    scrollToElement(id) {
      //const el = document.getElementsByClassName(className)[0];
      const el = document.getElementById(id);
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth", alignToTop: true });
      });
    },
  },
};
</script>