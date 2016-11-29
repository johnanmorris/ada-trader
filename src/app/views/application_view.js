import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

import QuoteView from 'app/views/quote_view';

var ApplicationView = Backbone.View.extend({
  initialize: function(options) {
    this.quoteData = options.quoteData;
    this.quoteTemplate = _.template($('#tmpl-quote-view').html());
    this.listElement = this.$('.quotes');
    this.itemList = [];
    this.quoteData.forEach(function(quote) {
      var item = new QuoteView({
        quote: quote,
        template: this.quoteTemplate
      });
      this.itemList.push(item);
    }, this);
  },

  render: function() {
    this.listElement.empty();
    this.itemList.forEach(function(item) {
      item.render();
      this.listElement.append(item.$el);
    }, this);

    return this;
  }
});

export default ApplicationView;
