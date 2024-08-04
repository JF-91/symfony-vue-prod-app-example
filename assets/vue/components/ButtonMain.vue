<script>
export default {
    props: {
        buttonText: String,
    },
}
</script>

<template>
    <v-btn :disabled="loading" :loading="loading" class="text-none mb-4" color="indigo-darken-3" size="x-large"
        variant="flat" block @click="loading = !loading">
        {{ buttonText }}
    </v-btn>
</template>

<style lang="scss" scoped></style>
