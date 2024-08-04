<script>
export default {
    props: {
        title: String,
        body: String,

    }
}
</script>

<template>
  <div class="d-flex justify-center">
    <v-card width="300px">
      <v-card-title class="text-h6 text-md-h5 text-lg-h4">{{ title }}</v-card-title>
      <v-card-text>
        {{ body }}
      </v-card-text>
    </v-card>
  </div>
</template>

<style lang="scss" scoped>
</style>
