<script>
export default {
    props: {
        label: String,
        variant: String,
        text: String,
    },

}
</script>

<template>
    <v-textarea :label="label" :variant="variant">
        {{ text }}
    </v-textarea>
</template>

<style lang="scss" scoped>
</style>
