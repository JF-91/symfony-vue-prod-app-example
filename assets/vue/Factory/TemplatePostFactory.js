import TemplateTitle from "../components/Title.vue";
import TemplateText from "../components/Textarea.vue";
import TemplateButton from "../components/ButtonMain.vue";
import TemplateImage from "../components/ImageSrc.vue";

class TemplatePostFactory {
    #components;
    constructor() {
        this.#components = [];
    }

    createTemplate(data) {
        if (data.headline) {
            this.#components.push({
                component: TemplateTitle,
                props: { title: data.title, body: data.body },
            });
        }

        if (data.textarea) {
            this.#components.push({
                component: TemplateText,
                props: { text: data.text, label: data.label },
            });
        }

        if (data.buttonName) {
            this.#components.push({
                component: TemplateButton,
                props: { buttonText: data.buttonText },
                on: { click: data.buttonClick },
            });
        }

        if (data.imageSrc) {
            this.#components.push({
                component: TemplateImage,
                props: { image: data.image },
            });
        }

        return this.#components;
    }

}

export default new TemplatePostFactory();
