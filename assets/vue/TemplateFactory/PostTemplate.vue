<template>
    <div class="gap-containe">
        <component v-for="(componentData, index) in components"
                :is="componentData.component"
                v-bind="componentData.props"
                v-on="componentData.on"
                :key="index" />
    </div>
</template>

<script>
import TemplateFactory from '../Factory/TemplateFactory';

export default {
    data() {
        return {
            components: []
        };
    },
    created() {
        const templateData = {
            headline: true,
            title: 'My Headline',
            body: 'My Subtitle',
            textarea: true,
            text: 'Some descriptive text here.',
            label: 'Label text here.',
            buttonName: true,
            buttonText: 'Click Me',
            buttonClick: this.handleButtonClick,
            imageSrc: true,
            image: 'https://via.placeholder.com/150',
            imageAlt: 'Placeholder Image',
        };

        this.components = TemplateFactory.createTemplate(templateData);
    },
    methods: {
        handleButtonClick(buttonLink, buttonText) {
            alert(`You clicked the ${buttonText} button! to go to ${buttonLink}`);
        }
    }
};
</script>

<style lang="scss" scoped></style>
