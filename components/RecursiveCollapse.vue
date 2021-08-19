<template lang="pug">
.recursive-collapse-wrapper(:style='`--padding:${padding}`')
  .collapse-wrapper(v-for='(leaf, index) in tree')
    b-collapse(
      v-if='!!leaf.children',
      :open='false',
      animation='slide',
      aria-id='contentID'
    )
      template(#trigger='props')
        .c-card-header.tw-flex.tw-items-center(
          role='button',
          aria-controls='contentID'
        )
          .c-card-header-system.tw-flex.tw-items-center(class='tw-w-2/4')
            a.c-card-header-icon
              b-icon(:icon='props.open ? "menu-down" : "menu-up"')
            p.c-card-header-title
              .c-card-header-system-content {{ leaf.sistema }}
          .c-card-header-note(class='tw-w-2/4') {{ leaf.nota }}
      .c-card-content
        recursive-collapse(
          :tree='leaf.children',
          :padding='`${parseInt(padding) + 1}`'
        )
    .content.tw-flex.tw-items-center(v-else)
      .content-system(class='tw-w-2/4') {{ leaf.sistema }}
      .content-note(class='tw-w-2/4') {{ leaf.nota }}
</template>

<script>
export default {
  name: 'RecursiveCollapse',
  components: {},
  props: {
    tree: {
      type: Array,
      default: () => [],
    },
    padding: {
      type: String,
      default: () => '0',
    },
  },
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
.recursive-collapse-wrapper {
  .c-card-header,
  .content {
    border-bottom: 1px solid #e4e4e4;
    padding-top: px2rem(10);
    padding-bottom: px2rem(10);
    @media screen and (max-width: 526px) {
      flex-direction: column;
      align-items: flex-start;
      .c-card-header-system,
      .c-card-header-note,
      .content-system,
      .content-note {
        width: 100%;
      }
      .c-card-header-note,
      .content-note {
        text-align: right;
      }
    }
  }
  .c-card-header-system {
    padding-left: (calc(var(--padding) * 15px));
  }
  .content-system {
    padding-left: (calc(var(--padding) * 15px + 10px));
  }
}
</style>
