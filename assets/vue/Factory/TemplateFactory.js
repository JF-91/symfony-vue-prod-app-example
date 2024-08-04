import TemplateTitle from "../components/Title.vue";
import TemplateText from "../components/Textarea.vue";
import TemplateButton from "../components/ButtonMain.vue";
import TemplateImage from "../components/ImageSrc.vue";

class TemplateFactory {
     createTemplate(data) {
        const components = [];

        if (data.title) {
            components.push({
                component: TemplateTitle,
                props: { title: data.title, body: data.body },
            });
        }

        if (data.text) {
            components.push({
                component: TemplateText,
                props: { text: data.text, label: data.label, text: data.text },
            });
        }

        if (data.buttonName) {
            components.push({
                component: TemplateButton,
                props: { buttonText: data.buttonText },
                on: { click: data.buttonClick },
            });
        }

        if (data.imageSrc) {
            components.push({
                component: TemplateImage,
                props: { image: data.image },
            });
        }



        return components;
    }
}

export default new TemplateFactory();
