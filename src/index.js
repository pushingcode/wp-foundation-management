//import _ from 'lodash';

import $ from 'jquery';
window.jQuery = $;
window.$ = $;

import Bulma from '@vizuaalog/bulmajs'

import Vue from 'vue';
import i18n from './plugins/i18n';
import App from './App.vue';

require('./appStyle.scss');

//vue ops
new Vue({
  i18n,
  el: '#f-manager',
  render: h => h(App)
});