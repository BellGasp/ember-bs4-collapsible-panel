import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

const { run } = Ember;

moduleForComponent('panel-header', 'Integration | Component | panel header', {
  integration: true
});

test('it renders using the default params', function(assert) {
  assert.expect(5);

  this.render(hbs `
    {{#panel-header}}
      Title
    {{/panel-header}}
  `);

  assert.equal(this.$('div.card-header').length, 1);
  assert.equal(this.$('div.card-header-text.d-inline-block').length, 1);
  assert.equal(this.$('div.card-actions.d-inline-block.pull-right').length, 1);
  assert.equal(this.$('div.card-actions i').attr('class'), 'fa fa-minus');
  assert.equal(this.$('.card-header .card-header-text').text().trim(), 'Title');
});

test('it renders using the expanded state state', function(assert) {
  assert.expect(5);

  this.render(hbs `
      {{#panel-header collapsed=false}}
        Title
      {{/panel-header}}
    `);

  assert.equal(this.$('div.card-header').length, 1);
  assert.equal(this.$('div.card-header-text.d-inline-block').length, 1);
  assert.equal(this.$('div.card-actions.d-inline-block.pull-right').length, 1);
  assert.equal(this.$('div.card-actions i').attr('class'), 'fa fa-minus');
  assert.equal(this.$('.card-header .card-header-text').text().trim(), 'Title');
});

test('it renders using the collapsed state', function(assert) {
  assert.expect(5);

  this.render(hbs `
      {{#panel-header collapsed=true}}
        Title
      {{/panel-header}}
    `);

  assert.equal(this.$('div.card-header').length, 1);
  assert.equal(this.$('div.card-header-text.d-inline-block').length, 1);
  assert.equal(this.$('div.card-actions.d-inline-block.pull-right').length, 1);
  assert.equal(this.$('div.card-actions i').attr('class'), 'fa fa-plus');
  assert.equal(this.$('.card-header .card-header-text').text().trim(), 'Title');
});

test('it doesn\'t render the actions div when it\'s not collapsable', function(assert) {
  assert.expect(4);

  this.render(hbs `
      {{#panel-header collapsable=false}}
        Title
      {{/panel-header}}
    `);

  assert.equal(this.$('div.card-header').length, 1);
  assert.equal(this.$('div.card-header-text.d-inline-block').length, 1);
  assert.equal(this.$('div.card-actions').length, 0);
  assert.equal(this.$('.card-header .card-header-text').text().trim(), 'Title');
});

test('it fires the action when it\'s clicked', function(assert) {
  assert.expect(1);

  this.set('stub', () => assert.equal(1, 1));

  this.render(hbs `
      {{#panel-header onClick=(action stub)}}
        Title
      {{/panel-header}}
    `);

  this.$('div.card-header').click();
});

test('it renders using the collapsed state', function(assert) {
  assert.expect(2);

  this.set('collapsed', false);

  this.render(hbs `
      {{#panel-header
        collapsed=collapsed
        defaultIcon="default-icon-class"
        collapsedIcon="collapsed-icon-class"
      }}
        Title
      {{/panel-header}}
    `);

  assert.equal(this.$('div.card-actions i').attr('class'), 'default-icon-class');

  run(() => this.set('collapsed', true));

  assert.equal(this.$('div.card-actions i').attr('class'), 'collapsed-icon-class');
});
