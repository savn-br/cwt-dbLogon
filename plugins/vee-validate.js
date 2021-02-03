// https://logaretm.github.io/vee-validate/guide/rules.html#rules

import Vue from 'vue';
import { ValidationProvider, ValidationObserver, extend, configure } from 'vee-validate';
import { required, alpha } from 'vee-validate/dist/rules';
import { localize } from 'vee-validate';
import pt_BR from 'vee-validate/dist/locale/pt_BR.json';


extend('required', required);
extend('alpha', alpha);

localize('pt_BR', pt_BR);

configure({
  classes: {
    invalid: 'is-danger'
  }
});


Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

