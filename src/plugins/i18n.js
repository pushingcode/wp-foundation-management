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
        menuLevelT2E2: 'Invitations',
        menuLevelT2E3: 'Cloud Storage Environment Settings',
        menuLevelT2E4: 'Authentication',
        menuLevelT3: 'Transactions',
        menuLevelT3E1: 'Payments',
        menuLevelT3E2: 'Transfers',
        menuLevelT3E3: 'Balance'
    },
    'es': {
        welcomeMsg: 'Bienvenidos a Foundation Manager',
        panHeader: 'Repositorio',
        menuLevelT1: 'General',
        menuLevelT1E1: 'Escritorio',
        menuLevelT1E2: 'Solicitudes',
        menuLevelT2: 'Administracion',
        menuLevelT2E1: 'Configuracion',
        menuLevelT2E2: 'Invitaciones',
        menuLevelT2E3: 'Config Ambiente de Almacenamiento en la Nuve',
        menuLevelT2E4: 'Autentificacion',
        menuLevelT3: 'Transacciones',
        menuLevelT3E1: 'Pagos',
        menuLevelT3E2: 'Transferencias',
        menuLevelT3E3: 'Balance'
    }
};

const i18n = new VueI18n({
    locale: 'en', // set locale
    fallbackLocale: 'es', // set fallback locale
    messages, // set locale messages
});

export default i18n;