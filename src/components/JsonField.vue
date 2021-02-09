

    <template>
  <text class="has-text-black is-json is-size-7" :class="{
    'has-text-weight-bold': highlighted,
     'has-text-grey': grey,
      

    }">{{ name }}: </text>
  <span
    class="is-text-green is-json is-size-7"
    :class="{
      'has-text-weight-bold': highlighted,
      'is-text-yellow': is_boolean(value),
      'is-text-red': is_number(value),
   
      'has-text-grey': grey,
 
    }"
  >
    {{ value }}</span
  >
  <br />
</template>

  <script>
export default {
  name: "JsonField",


   
  
  data() {
    return {
      boolean_strings: "true",
      boolean: "boolean"
    };
  },

  methods: {
    is_boolean(value) { 
   
      if (typeof value=="boolean"){
      return true;
  } 
    return false;
    },

    is_number(value) { 
  
      if (typeof value=="number"){
      return true;
  } 
    return false;
    },


  },
 

  props: {
    name: {

      required: true,
    },
    value: {

      required: true,
    },
     grey: {},
     highlighted: {}
  },
};
</script>