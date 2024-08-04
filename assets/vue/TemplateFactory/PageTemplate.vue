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
            title: true,
            text: 'Some descriptive text here.',
            body: 'body descriptive text here.',
            buttonName: true,
            buttonText: 'Click Me',
            buttonClick: this.handleButtonClick,
            imageSrc: 'https://via.placeholder.com/150',
            imageAlt: 'Placeholder Image',
            linkText: 'Learn More',
            linkHref: 'https://example.com'
        };

        this.components = TemplateFactory.createTemplate(templateData);
    },
    methods: {
        handleButtonClick() {
            alert('Button clicked!');
        }
    }
};
</script>

<style lang="scss" scoped>
</style>
