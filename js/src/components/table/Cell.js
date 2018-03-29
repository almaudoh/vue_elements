Vue.component('DrupalCell', {

  props: {
    cell: Object,
  },

  render(h) {
    let tag = 'td';
    if (this.cell.tag && this.cell.tag.toLowerCase() === 'th') {
      tag = 'th';
    }
    return h(tag, { attrs: this.cell.attributes }, this.cell.content);
  }

});
