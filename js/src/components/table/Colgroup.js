Vue.component('DrupalColgroup', {

  props: {
    colgroup: Object,
  },

  render(h) {
    if (this.colgroup.cols) {
      return h('colgroup', {attrs: this.colgroup.attributes},
        this.colgroup.cols.map(function (col) {
          return h('col', {attrs: col.attributes}, '');
        }));
    }
    else {
      return h('colgroup');
    }
  }

});
