import Ember from 'ember';
import layout from '../templates/components/collapsable-panel';

const { Component } = Ember;

export default Component.extend({
  layout,

  classNames: 'card',

  collapsed: false,
  collapsable: true,
  collapseFooter: true,

  actions: {
    toggle() {
      if (!this.get('collapsable')) {
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
