import Ember from 'ember';
import layout from '../templates/components/panel-header';

const {
  Component,
  computed,
  String: {
    htmlSafe
  }
} = Ember;

export default Component.extend({
  layout,
  tagName: '',

  collapsible: true,
  collapsed: false,

  defaultIcon: 'fa fa-minus',
  collapsedIcon: 'fa fa-plus',

  onClick() { },

  style: computed('collapsible', function() {
    return this.get('collapsible') ?
      htmlSafe('cursor: pointer;') :
      htmlSafe('');
  })
});
