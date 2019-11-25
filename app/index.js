import Vue from 'vue';
import App from './components/App.vue';
import SimpleUpload from './components/SimpleUpload.vue';

new Vue({
    render: h => h(App)
}).$mount('#app');

new Vue({
    render: h => h(SimpleUpload)
}).$mount('#simpleUpload');
