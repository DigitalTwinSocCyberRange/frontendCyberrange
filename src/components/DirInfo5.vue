

<template>
  <div class="is-info content" id="info5">
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
          >x04.1 IP addresses:to and from</text
        >
        <br />
        <text class="has-text-grey subtitle nice-subtitle"
          ></text
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
            Destination IP <strong class="is-json">(from)</strong> and Source IP <strong class="is-json">(to)</strong> of a SIEM Event can be used to specify a directive.
            Possible values are:
          
          </p>
              <ul>
                <li><strong class="is-json">"ANY":</strong> allow any IP address</li>
                <li>Defined IP address, e.g. <strong class="is-json">"192.168.2.1"</strong> </li>
                <li>IP address from previous stage e.g. <strong class="is-json">":1"</strong></li> only consider the IP address from Stage 1
              </ul>

          <strong class="is-primary-darker">Example:</strong> 
          <ul class="is-italic">
                  <li> <strong>Stage 1:</strong> SIEM Events of Event Type "ARP-REQUEST" with from any source ip with any destination ip is considered (<strong class="is-json">from: <span class="is-primary-darker">ANY</span> to: <span class="is-primary-darker">ANY</span> </strong>)
                  </li> <br>
                  <li> <strong>Stage 2:</strong> "ARP-REQUEST"s are only considered if they have the Source IP that was registered <strong class="is-primary-darker">in Stage 1</strong> (<strong class="is-json">from: <span class="is-primary-darker">:1</span> </strong>)
                  </li> <br>

                  If a ARP-REQUEST from a device with e. g. IP-address 10.0.0.1 was registered within Stage 1 the alarm is only set off if Stage 2 detects three more ARP-REQUESTs from 10.0.0.1.
                 
             
                </ul>

           
       
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
              additional Information about the other rule properties?
            </p>

          </div>

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
  name: "DirInfo5",
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