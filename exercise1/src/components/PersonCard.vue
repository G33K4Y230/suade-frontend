<template>
  <br/>
  <div class="details" @click="$emit('personClick', person)">
    <h4> {{ person.name }} </h4>
    <b>Age:</b> {{ person.age }} <br/>
    <b>Eye Color:</b> {{ person.eyeColour }} <br/>
    <b>Gender:</b> {{ person.gender }} <br/>
  </div>
  <br/>
  <br/>
  <br/>
  <br/>
</template>

<script>
  export default {
    name: 'PersonCard',
    emits: ['personClick'],
    props: {
      person: {
        type: Object,
        default: () => {},
      },
      class: {
        type: String,
      },
      personClick: {
        type: Function,
      },
    },
  };
</script>

<style scoped>

</style>
