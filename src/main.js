import Vue from "vue";
import AppNew from "./App.vue";

Vue.config.productionTip = false;

new Vue({
	render: h => h(AppNew),
}).$mount("#app");
