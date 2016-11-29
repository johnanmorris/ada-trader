import Backbone from 'backbone';
import ApplicationView from 'app/views/application_view';

var QuoteView = Backbone.View.extend({
  initialize: function(options) {
    this.quote = options.quote;
    this.template = options.template;
  },

  render: function() {
    var html = this.template({quote: this.quote});
    this.$el.html(html);

    // Enable chained calls
    return this;
  },

  events: {
  'click .btn-sell': 'decreasePrice',
    'click .btn-buy': 'increasePrice'
  },

  decreasePrice: function(event) {
    event.preventDefault();
    this.quote.price -= 1;
    this.render();
    console.log("decreasePrice to " + this.quote.price);
  },

  increasePrice: function(event) {
    event.preventDefault();
    this.quote.price += 1;
    this.render();
    console.log("increasePrice to " + this.quote.price);
  }

});


export default QuoteView;
