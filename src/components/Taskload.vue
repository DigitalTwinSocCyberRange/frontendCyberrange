

<template >

<div v-if="!completed" class="mt-5">

      <strong> How mentally demanding was the task? </strong> 
      

<form @submit.prevent="validateInput" >
<div class="control">
    <label class="radio mr-2">
    <em>little</em>
  </label>
  <label class="radio">
    <input type="radio" name="answer" value="1" v-model="tlx_q1">
    1 
  </label>
  <label class="radio">
    <input type="radio" name="answer" value="2" v-model="tlx_q1">
    2
  </label>
    <label class="radio">
    <input type="radio" name="answer" value="3" v-model="tlx_q1">
    3
  </label>
    <label class="radio">
    <input type="radio" name="answer" value="4" v-model="tlx_q1">
    4
  </label>
    <label class="radio">
    <input type="radio" name="answer" value="5" v-model="tlx_q1">
    5 
  </label>

  <label class="radio ml-3">
    <em>high</em>
  </label>

</div>
</form>

 <strong> How hurried or rushed was the pace of the task? </strong> 

<form @submit.prevent="validateInput" >
<div class="control">
    <label class="radio mr-2">
    <em>little</em>
  </label>
  <label class="radio">
    <input type="radio" name="answer" value="1" v-model="tlx_q2">
    1 
  </label>
  <label class="radio">
    <input type="radio" name="answer" value="2" v-model="tlx_q2">
    2
  </label>
    <label class="radio">
    <input type="radio" name="answer" value="3" v-model="tlx_q2">
    3
  </label>
    <label class="radio">
    <input type="radio" name="answer" value="4" v-model="tlx_q2">
    4
  </label>
    <label class="radio">
    <input type="radio" name="answer" value="5" v-model="tlx_q2">
    5 
  </label>

  <label class="radio ml-3">
    <em>high</em>
  </label>

</div>
</form>

 <strong> How insecure, discouraged, irritated, stressed, and annoyed were you?
 </strong> 

<form @submit.prevent="validateInput" >
<div class="control">
    <label class="radio mr-2">
    <em>little</em>
  </label>
  <label class="radio">
    <input type="radio" name="answer" value="1" v-model="tlx_q3">
    1 
  </label>
  <label class="radio">
    <input type="radio" name="answer" value="2" v-model="tlx_q3">
    2
  </label>
    <label class="radio">
    <input type="radio" name="answer" value="3" v-model="tlx_q3">
    3
  </label>
    <label class="radio">
    <input type="radio" name="answer" value="4" v-model="tlx_q3">
    4
  </label>
    <label class="radio">
    <input type="radio" name="answer" value="5" v-model="tlx_q3">
    5 
  </label>

  <label class="radio ml-3">
    <em>high</em>
  </label>

</div>
</form>

<strong> How successful were you in accomplishing what you were asked to do? </strong> 

<form @submit.prevent="validateInput" >
<div class="control">
 <label class="radio mr-2">
    <em>good</em>
  </label>
  <label class="radio">
    <input type="radio" name="answer" value="1" v-model="tlx_q4">
    1
  </label>
  <label class="radio">
    <input type="radio" name="answer" value="2" v-model="tlx_q4">
    2
  </label>
    <label class="radio">
    <input type="radio" name="answer" value="3" v-model="tlx_q4">
    3
  </label>
    <label class="radio">
    <input type="radio" name="answer" value="4" v-model="tlx_q4">
    4
  </label>
    <label class="radio">
    <input type="radio" name="answer" value="5" v-model="tlx_q4">
    5
  </label>

  <label class="radio mr-2">
    <em>poor</em>
  </label>

</div>

 <div
      class="has-text-danger"
      v-if="emptyInput">
      Please give an answer to all statements.
    </div>

 <button
          class="button submit-button is-rounded mt-5 mb-3"
          type="submit"
          value="Submit"

        >
          <span> 	SUBMIT
</span>
        </button>


</form>
</div>
</template>

  <script>


export default {
  name: "Taskload",
  props: {
    
  },
  data() {
    return {
      tlx_q1: "",
      tlx_q2: "",
      tlx_q3: "",
      tlx_q4: "",
      emptyInput: false,
      completed: false,
    
    };
  },

  methods: {
      submitTlx(rating){
          this.$emit('submit-tlx', rating);
      },
      validateInput() {
           if(this.tlx_q1 == "" || this.tlx_q2 == "" || this.tlx_q3 == "" || this.tlx_q3 == ""){
        this.emptyInput=true;
      }
      else {
          this.submitTlx([this.tlx_q1, this.tlx_q2, this.tlx_q3, this.tlx_q4])
          this.completed=true;
      }
      }
  }




};
</script>