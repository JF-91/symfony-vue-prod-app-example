import Vue from 'vue';
import Router from 'vue-router';
import TemplateTitle from "../components/Title.vue";
import TemplateText from "../components/Textarea.vue";
import TemplateButton from "../components/ButtonMain.vue";
import TemplateImage from "../components/ImageSrc.vue";
import DynamicPage from '../components/DynamicPage.vue';

Vue.use(Router);

class PageFactory {
  constructor(router) {
    this.router = router;
  }

  createPage(route, data) {
    this.router.addRoutes([
      {
        path: route,
        component: DynamicPage,
        props: { componentsData: data }
      }
    ]);
  }


}

export default PageFactory;
