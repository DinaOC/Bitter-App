var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
var BitterView = require('./bittermodelview');

module.exports =  Backbone.View.extend({
  el: '.main',
  initialize: function () {
    this.addAll();

    this.listenTo(this.collection, 'update', this.addAll);
    this.listenTo(this.collection, 'change', this.addAll);

  },
  addOne: function (el) {

      var modelView = new BitterView({model: el});
      this.$el.append(modelView.render().el);
  },
  addAll: function () {
    this.$el.html('');
    _.each(this.collection.models, this.addOne, this);
  }
});
