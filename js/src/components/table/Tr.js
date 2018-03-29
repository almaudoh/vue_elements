Vue.component('DrupalTr', {

  props: {
    row: Object,
  },

  render(h) {
    return h('tr', { attrs: this.row.attributes },
      this.row.cells.map(function (item) {
        return h('DrupalCell', {
          props: {
            cell: item,
          }
        });
      }));
    }

});
