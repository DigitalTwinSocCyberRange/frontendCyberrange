

<template>
  <div class="is-info content" :id="infoData.tileNo">
    <!--text
      class="title  has-text-yellow"
      :class="{ 'has-text-grey': task_completed }"
      >{{ infoData.title }}</text
    >

    <text class="has-text-grey subtitle nice-subtitle">
      
    </text-->


      <div
        class=" mr-2 content is-size-6 has-text-justified"
      >
        <text class="has-text-yellow has-text-left title is-json"
          >{{this.infoData.title}}</text
        > <br>
        <text class="has-text-grey subtitle nice-subtitle md-3"
          >Introduction</text
        > 

        




         <div class="buttons is-left mt-5"> 
   <button class="button is-rounded submit-button " @click="proceed()">Proceed</button>
   <button @click="this.showInfo=true;" class="button is-rounded " v-if="!showInfo">Show Info</button>
      <button @click="this.showInfo=false;" class="button is-rounded " v-else>Hide</button>

      </div> 

<div class="videoWrapper " v-if="showInfo">
    <!-- Copy & Pasted from YouTube -->
    <iframe class=" is-video" width="560" height="349" :src="infoData.url" frameborder="0" allowfullscreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>


</div>

   
      </div>

    </div>

 
</template>

  <script>



export default {
  name: "VideoTile",


  props: {
      infoData: {
          required: true
      },
      order: {}

  },
  data() {
    return {

      showAdditionalInformation: false,
      showDirective: true,
      showHghlights: false,
      showInfo: true,
    };
  },

  methods: {


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