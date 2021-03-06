// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import "es6-promise/auto"; // プロミスをポリフィルする
import App from "./App";
import ErrorBoundary from "./ErrorBoundary.vue"; // エラーを捕捉するコンポーネント
import router from "./router";
import store from "./store"; // Vuexのストアインスタンスをインポート

Vue.config.productionTip = false;
Vue.config.performance = true;

// ErrorBoundaryコンポーネントのインストール
Vue.component(ErrorBoundary.name, ErrorBoundary);

Vue.config.errorHandler = (err, vm, info) => {
  console.error("errorHandler err:", err);
  console.error("errorHandler vm:", vm);
  console.error("errorHandler info:", info);
};

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store, // インポートしたストアインスタンスを`store`オプションとして指定
  components: { App },
  template: "<App/>"
});
