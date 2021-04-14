<template lang="pug">
.checkable-recursive-collapse-wrapper(:style='`--padding:${padding}`')
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
          .c-card-header-note.tw-w-24
            b-checkbox(v-model='leaf.active', @set='setChildren') ativo
          .c-card-header-system.tw-flex.tw-items-center(class='tw-w-2/4')
            a.c-card-header-icon
              b-icon(:icon='props.open ? "menu-down" : "menu-up"')
            p.c-card-header-title
              .c-card-header-system-content {{ leaf.sistema }}
      .c-card-content
        checkable-recursive-collapse(
          :tree='leaf.children',
          :padding='`${parseInt(padding) + 1}`'
        )
    .content.tw-flex.tw-items-center(v-else)
      .content-note.tw-w-24
        b-checkbox(v-model='leaf.active') ativo
      .content-system {{ leaf.sistema }}
</template>

<script>
export default {
  name: 'CheckableRecursiveCollapse',
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
    return {
      teste: false,
    }
  },
  computed: {},
  watch: {},
  mounted() {},
  created() {},
  methods: {
    setChildren() {
      console.log('AAAAA')
    },
  },
}
</script>

<style lang="scss" scoped>
.checkable-recursive-collapse-wrapper {
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
