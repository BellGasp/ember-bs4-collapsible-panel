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

  collapsable: true,
  collapsed: false,

  defaultIcon: 'fa fa-minus',
  collapsedIcon: 'fa fa-plus',

  onClick() { },

  style: computed('collapsable', function() {
    return this.get('collapsable') ?
      htmlSafe('cursor: pointer;') :
      htmlSafe('');
  })
});
