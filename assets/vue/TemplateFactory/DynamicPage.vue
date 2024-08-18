<template>
    <div>
      <component
        v-for="(componentData, index) in componentsData"
        :is="componentData.component"
        v-bind="componentData.props"
        v-on="componentData.on"
        :key="index"
      />
    </div>
  </template>
  
  <script>
  export default {
    props: {
      componentsData: {
        type: Array,
        required: true
      }
    }
  };
  </script>
  