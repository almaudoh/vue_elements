Vue.component('DrupalTable', {
  template: `<table v-bind="attributes">
    <caption v-if="caption">{{ caption }}</caption>

    <DrupalColgroup v-for="colgroup in colgroups" :colgroup="colgroup"/>

    <template v-if="header">
    <thead>
      <tr >
        <DrupalCell v-for="cell in header" :cell="cell"/>
      </tr>
    </thead>
    </template>

    <tbody v-if="rows">
      <DrupalTr v-for="row in rows" :row="row"/>
    </tbody>
    <tbody v-else>
      <tr>
        <td :colspan="header_columns">{{ empty }}</td>
      </tr>
    </tbody>

    <tfoot v-if="footer">
      <DrupalTr v-for="row in footer" :row="row"/>
    </tfoot>
  </table>`,

  data() {
    return {
      attributes: {},
      caption: '',
      colgroups: [],
      header: [],
      sticky: false,
      rows: [],
      footer: [],
      empty: '',
      no_striping: false,
      header_columns: 0,
      slotProps: null,
    }
  },

  mounted() {
    this.attributes = this.getDefaultProp('attributes');
    this.caption = this.getDefaultProp('caption');
    this.colgroups = this.getDefaultProp('colgroups');
    this.header = this.getDefaultProp('header');
    this.sticky = this.getDefaultProp('sticky');
    this.rows = this.getDefaultProp('rows');
    this.footer = this.getDefaultProp('footer');
    this.empty = this.getDefaultProp('empty');
    this.no_striping = this.getDefaultProp('no_striping');
    this.header_columns = this.getDefaultProp('header_columns');
  },

  methods: {
    getDefaultProp(name) {
      if (this.slotProps === null) {
        if (this.$slots.initializer !== null && this.$slots.initializer[0].children !== null) {
          this.slotProps = JSON.parse(this.$slots.initializer[0].children[0].text);
        }
      }
      return this.slotProps[name];
    }
  }

});
