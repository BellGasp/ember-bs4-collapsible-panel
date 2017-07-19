import Ember from 'ember';
import layout from '../templates/components/collapsible-panel';

const { Component } = Ember;

export default Component.extend({
  layout,

  classNames: 'card',

  collapsed: false,
  collapsible: true,
  collapseFooter: true,

  actions: {
    toggle() {
      if (!this.get('collapsible')) {
        return;
      }

      this.toggleProperty('collapsed');
      this.$('.card-block').slideToggle(250);

      if (this.get('collapseFooter')) {
        this.$('.card-footer').slideToggle(250);
      }
    }
  }
});
