<template >
<div class="c-toast c-toast--success">
  <div class="c-toast-container ">
    <span class="c-toast-message ">Okay</span>
    <div class="c-toast-close ">&#x2715</div>
  </div>
</div>
</template>

<script>
export default {
  name: 'TheToast',
  components: {},
  props: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  mounted() {},
  created() {},
  methods: {},
}
</script>

<style lang="scss" scoped>
/* Animations to fade the snackbar in and out */
@-webkit-keyframes fadein {
  from {
    top: 0;
    opacity: 0;
  }
  to {
    top: 40px;
    opacity: 1;
  }
}

@keyframes fadein {
  from {
    top: 0;
    opacity: 0;
  }
  to {
    top: 40px;
    opacity: 1;
  }
}

@-webkit-keyframes fadeout {
  from {
    top: 40px;
    opacity: 1;
  }
  to {
    top: 0;
    opacity: 0;
  }
}

@keyframes fadeout {
  from {
    top: 40px;
    opacity: 1;
  }
  to {
    top: 0;
    opacity: 0;
  }
}
.c-toast {
  top: 40px;
  -webkit-animation: fadeout 0.5s;
  animation: fadeout 0.5s;
}
.c-toast.show {
  -webkit-animation: fadein 0.5s;
  animation: fadein 0.5s;
  visibility: visible;
}
</style>
