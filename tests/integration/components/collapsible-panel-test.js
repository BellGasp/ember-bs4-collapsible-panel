import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('collapsible-panel', 'Integration | Component | collapsible panel', {
  integration: true
});

test('it renders', function(assert) {

  // Template block usage:
  this.render(hbs`
    {{#collapsible-panel}}
      template block text
    {{/collapsible-panel}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
