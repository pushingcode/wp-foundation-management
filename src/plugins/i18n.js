import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
    'en': {
        welcomeMsg: 'Welcome to Foundation Manager',
        panHeader: 'Repository',
        menuLevelT1: 'General',
        menuLevelT1E1: 'Dashboard',
        menuLevelT1E2: 'Solicitations',
        menuLevelT2: 'Administration',
        menuLevelT2E1: 'Settings',
        menuLevelT3: 'Transactions',
    },
    'es': {
        welcomeMsg: 'Bienvenidos a Foundation Manager',
        panHeader: 'Repositorio',
        menuLevelT1: 'General',
        menuLevelT1E1: 'Escritorio',
        menuLevelT1E2: 'Solicitudes',
        menuLevelT2: 'Administracion',
        menuLevelT2E1: 'Configuracion',
        menuLevelT3: 'Transacciones',
    }
};

const i18n = new VueI18n({
    locale: 'en', // set locale
    fallbackLocale: 'es', // set fallback locale
    messages, // set locale messages
});

export default i18n;