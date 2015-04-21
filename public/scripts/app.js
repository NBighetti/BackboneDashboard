$(document).ready(function(event) {

  var halfCardView = Backbone.View.extend({

    tagName: "article",
    className: "block-half shadow",
    template: _.template("<h3><%= title %></h3><%= content %><span class='close'>(x) dismiss</span>"),
    initialize: function(data) {
      this.render(data);
    },
    render: function(data) {
      this.$el.html(this.template(data));
      $('body').append(this.$el);
      var row = $('.row')[1];
      $(row).append(this.$el);
    }
  });

  var quarterCardView = Backbone.View.extend({

    tagName: "article",
    className: "block-quarter shadow",
    template: _.template("<h3><%= title %></h3><%= content %><span class='close'>(x) dismiss</span>"),
    initialize: function(data) {
      this.render(data);
    },
    render: function(data) {
      this.$el.html(this.template(data));
      $('body').append(this.$el);
      var row = $('.row')[2];
      $(row).append(this.$el);
    }
  });

  var thirdCardView = Backbone.View.extend({

    tagName: "article",
    className: "block-third shadow",
    template: _.template("<h3><%= title %></h3><%= content %><span class='close'>(x) dismiss</span>"),
    initialize: function(data) {
      this.render(data);
    },
    render: function(data) {
      this.$el.html(this.template(data));
      $('body').append(this.$el);
      var row = $('.row')[3];
      $(row).append(this.$el);
    }
  });

  var dataHalfOne = { title: "Half Card 1", content: "Half Card 1"};
  var halfCardOne = new halfCardView(dataHalfOne);

  var dataHalfTwo = { title: "Half Card 2", content: "Half Card 2"};
  var halfCardTwo = new halfCardView(dataHalfTwo);


  var dataQtrOne = { title: "Quarter Card 1", content: "Quarter Card 1"};
  var QtrCardOne = new quarterCardView(dataQtrOne);

  var dataQtrTwo = { title: "Quarter Card 2", content: "Quarter Card 2"};
  var QtrCardTwo = new quarterCardView(dataQtrTwo);

  var dataQtrThree = { title: "Quarter Card 3", content: "Quarter Card 3"};
  var QtrCardThree = new quarterCardView(dataQtrThree);

  var dataQtrFour = { title: "Quarter Card 4", content: "Quarter Card 4"};
  var QtrCardFour = new quarterCardView(dataQtrFour);


  var dataThirdOne = { title: "Third Card 1", content: "Third Card 1"};
  var ThirdCardViewOne = new thirdCardView(dataThirdOne);

  var dataThirdTwo = { title: "Third Card 2", content: "Third Card 2"};
  var ThirdCardViewTwo = new thirdCardView(dataThirdTwo);

  var dataThirdThree = { title: "Third Card 3", content: "Third Card 3"};
  var ThirdCardViewThree = new thirdCardView(dataThirdThree);
});
