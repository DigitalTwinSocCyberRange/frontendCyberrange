

    <template>
   
      <text class="has-text-grey has-text-weight-bold"> {{name}}: </text> <span class="is-italic has-text-white">
      {{value}}</span> <br>
    </template>

  <script>
   export default {
  name: 'JsonField',
  props: {
      name: {
        type: String,
        required: true
      },
      value: {
        type: String,
        required: true
      }
  
    }
  }
    
  </script>