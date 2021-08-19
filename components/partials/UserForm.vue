<template lang="pug">
.user-form-wrapper.tw-max-w-3xl.tw-mx-auto
  form(name='profileForm', ref='form')
    fieldset.tw-my-6.tw-flex.tw-flex-wrap
      b-field.tw-mx-2.tw-w-20(:label='$t("user")')
        b-input(
          v-model='userId',
          size='is-small',
          name='user',
          :disabled='isDisabled'
        )
      b-field.tw-mx-2(:label='$t("manager")')
        b-input(
          v-model='managerName',
          size='is-small',
          name='manager',
          :disabled='isDisabled'
        )
      b-field.tw-mx-2(label='E-mail')
        b-input(
          v-model='email',
          size='is-small',
          name='email',
          type='email',
          :disabled='isDisabled'
        )

      b-field.tw-mx-2(:label='$t("name")')
        b-input(
          v-model='userName',
          size='is-small',
          name='name',
          :disabled='isDisabled'
        )
    fieldset.tw-my-6.tw-flex.tw-flex-wrap
      b-field.tw-mx-2.tw-w-32(:label='$t("phone")')
        b-input(
          v-model='phone',
          size='is-small',
          name='phone',
          autocomplete='off',
          placeholder='(XX) XXXXX-XXXX',
          v-mask='["(##) ####-####", "(##) #####-####"]'
        )
      b-field.tw-mx-2.tw-w-56(:label='$t("company")')
        b-input(
          v-model='company',
          size='is-small',
          name='company',
          autocomplete='off',
          maxlength='30'
        )
      b-field.tw-mx-2.tw-w-32(:label='$t("field")')
        b-input(
          v-model='field',
          name='field',
          size='is-small',
          autocomplete='off',
          maxlength='15'
        )
      b-field.tw-mx-2.tw-w-56(:label='$t("role")')
        b-input(
          v-model='role',
          name='role',
          size='is-small',
          autocomplete='off',
          maxlength='30'
        )
    fieldset.tw-my-6.tw-flex.tw-flex-wrap
      b-field.tw-mx-2.tw-w-20(:label='$t("registration")')
        b-input(
          v-model='employeeNumber',
          name='employeeNumber',
          size='is-small',
          autocomplete='off',
          maxlength='8'
        )
      b-field.tw-mx-2(:label='$t("pointOfSale")')
        b-select(
          :placeholder='$t("selectPointOfSale")',
          size='is-small',
          :value='pointOfSale',
          :expanded='true',
          required,
          @input='(point) => handlePointOfSale(point)'
        )
          option(
            v-for='point in allPointOfSales',
            :value='point.pointOfSaleId',
            :key='point.pointOfSaleId'
          ) {{ point.pointOfSaleName }}
      //- b-field.tw-mx-2(label='Ponto de venda')
      //-   b-autocomplete(
      //-     size='is-small',
      //-     :open-on-focus='true',
      //-     :data='filteredPointOfSales',
      //-     field='pointOfSaleName',
      //-     v-model='selectedPointOfSale',
      //-     placeholder='Selecione o ponto de venda',
      //-     @select='(point) => handlePointOfSale(point)'
      //-   )
      .wrapper-checkboxs.tw-flex.tw-flex-wrap.tw-mx-3
        b-field.tw-m-5
          b-checkbox(v-model='emergencyFlag', name='emergencyFlag') {{ $t("emergency") }}
        b-field.tw-m-5
          b-checkbox(v-model='vipFlag', name='vipFlag') VIP Desk
    slot(name='content')
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex'
export default {
  name: 'UserForm',
  components: {},
  props: {
    isDisabled: {
      type: Boolean,
      default: () => true,
    },
  },
  data() {
    return {
      searchName: '',
    }
  },
  computed: {
    ...mapState(['userData', 'allPointOfSales']),
    ...mapState({
      pointOfSale: (state) => state.userData.pointOfSale,
    }),
    userId: {
      get() {
        return this.userData.userId
      },
      set(value) {
        this.setUserDataTerm({ key: 'userId', value })
      },
    },
    email: {
      get() {
        return this.userData.email
      },
      set(value) {
        this.setUserDataTerm({ key: 'email', value })
      },
    },
    userName: {
      get() {
        return this.userData.userName
      },
      set(value) {
        this.setUserDataTerm({ key: 'userName', value })
      },
    },
    company: {
      get() {
        return this.userData.company
      },
      set(value) {
        this.setUserDataTerm({ key: 'company', value })
      },
    },
    managerName: {
      get() {
        return this.userData.managerName
      },
      set(value) {
        this.setUserDataTerm({ key: 'managerName', value })
      },
    },
    phone: {
      get() {
        return this.userData.phone
      },
      set(value) {
        this.setUserDataTerm({ key: 'phone', value })
      },
    },
    field: {
      get() {
        return this.userData.field
      },
      set(value) {
        this.setUserDataTerm({ key: 'field', value })
      },
    },
    role: {
      get() {
        return this.userData.role
      },
      set(value) {
        this.setUserDataTerm({ key: 'role', value })
      },
    },
    employeeNumber: {
      get() {
        return this.userData.employeeNumber
      },
      set(value) {
        this.setUserDataTerm({
          key: 'employeeNumber',
          value,
        })
      },
    },
    emergencyFlag: {
      get() {
        return this.userData.emergencyFlag
      },
      set(value) {
        this.setUserDataTerm({
          key: 'emergencyFlag',
          value,
        })
      },
    },
    vipFlag: {
      get() {
        return this.userData.vipFlag
      },
      set(value) {
        this.setUserDataTerm({ key: 'vipFlag', value })
      },
    },
    // filteredPointOfSales() {
    //   return this.allPointOfSales.filter((point) =>
    //     point.pointOfSaleName
    //       .toString()
    //       .toLowerCase()
    //       .includes(this.searchName.toLowerCase())
    //   )
    // },
    // selectedPointOfSale: {
    //   get() {
    //     const currentPoint = this.allPointOfSales.find(
    //       (point) => point.pointOfSaleId === this.pointOfSale
    //     )
    //     return (
    //       (!!currentPoint && currentPoint.pointOfSaleName) || this.searchName
    //     )
    //   },
    //   set(value) {
    //     this.searchName = value
    //   },
    // },
  },
  watch: {},
  async mounted() {
    await this.getAllPointOfSales()
  },
  created() {},
  methods: {
    ...mapMutations(['setUserDataTerm']),
    ...mapActions(['getAllPointOfSales']),

    handlePointOfSale(point) {
      if (point) this.setUserDataTerm({ key: 'pointOfSale', value: point })
    },
  },
}
</script>

<style lang="scss" scoped>
.user-form-wrapper {
  .fields {
    grid-template-columns: repeat(auto-fill, minmax(px2rem(300), 1fr));
    @media screen and(min-width: px2rem(1500)) {
      grid-template-columns: repeat(4, minmax(px2rem(300), 1fr));
    }
  }
}
</style>

<style lang="scss">
.user-form-wrapper {
  label {
    font-size: 0.75rem;
  }
}
</style>
