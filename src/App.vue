<template>
  <div id="app" class="container">
    <div class="buttons are-small is-pulled-right">
        <button class="button is-dark" v-for="entry in lang" :key="entry.title" @click="changeLocale(entry.language)">
          {{entry.title}}
        </button>
    </div>
    <br>
    <MainApp msg="Welcome to Foundation Manager"></MainApp>

  </div>
</template>

<script>
    import MainApp from './components/MainApp.vue';
    import i18n from './plugins/i18n';

export default {
  name: 'app',
  components: {
    MainApp
  },
  data() {
    return {
      lang: [
        { flag: 'us', language: 'en', title: 'English' },
        { flag: 'es', language: 'es', title: 'Español' }
      ]
    };
  },
  methods: {
            changeLocale(locale) {
                i18n.locale = locale;
                i18n.locale = locale;
            }
        }
}
</script>
