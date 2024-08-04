<script>
export default {
    props:{
        image: String,
    },


}
</script>

<template>
    <v-img :width="300" aspect-ratio="16/9" cover  :src="image"></v-img>
</template>

<style lang="scss" scoped></style>
