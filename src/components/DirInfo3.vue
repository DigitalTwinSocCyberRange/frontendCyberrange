

<template>
  <div class="is-info content" id="info3">
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
          >DirectiveSyntaxTwo.</text
        >
        <br />
        <text class="has-text-grey subtitle nice-subtitle"
          >Name and Plugin_SID</text
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
            The Rules Section of a directive consists of one or more rules.
            Every rule handles the occurrence of one specific
            <strong> Event Type </strong>.
          </p>
          <ul>
            <li>
              <strong class="">name:</strong> The name of a rule corresponds to
              the <strong>title</strong> of an Event Type
            </li>
            <li>
              <strong class="">plugin_sid:</strong> Every Event Type has its own
              ID - this is called the plugin_sid
            </li>
          </ul>
<br>
          <strong class="is-primary-darker">
              Example:
            </strong> <br>
          <p class="is-italic pt-1">
            The rule of the directive on the right will therefore trigger the
            alarm "Sensor 3 disfunction" with the id 15 whenever a SIEM Event of
            the Event Type 
            <strong class="is-json">
              name: <span class="is-primary-darker">"Liquid level (SENSOR 3) is not received. Program is unable to
              proceed properly"</span> - plugin_sid: <span class="is-primary-darker">[6]</span> </strong>
            comes up. 

            
          </p>
          SIEM-Alarm Search:
           <figure class="image">
          <img src="./../assets/Alarm.png" />
        </figure> 

          <div class="buttons is-left mt-5">
            <button
              @click="this.showAdditionalInformation = true"
              class="button is-rounded"
              v-if="!showAdditionalInformation"
            >
              Show More
            </button>
            <button
              @click="this.showAdditionalInformation = false"
              class="button is-rounded"
              v-else
            >
              Show Less
            </button>
          </div>

          <div v-if="showAdditionalInformation">
            <p>
              additional Information?
            </p>

          </div>

          <div class="buttons is-left mt-5"></div>
        </div>
      </div>

      <div class="column is-one-third" v-if="showInfo">
        <div class="pl-3 pt-3 pb-3 pr-3">
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

        <div class="pl-3 pt-3 pb-3 pr-3 border-rule">
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
  name: "DirInfo3",
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
      var nextSection = this.order.indexOf("info3")+1
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