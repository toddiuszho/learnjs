'use strict';

/*var hostname = location.hostname;
var ahostname = hostname.split('.');
var env = ahostname[0];
document.title = env + " " + location.pathname;*/

var learnjs = {};

learnjs.problemView = function(problem) {
  return $('<div>', {class: 'problem-view', text: 'Coming soon!'});
}

learnjs.showView = function(hash) {
  var routes = {
    '#problem-1': learnjs.problemView
  };
  var viewFn = routes[hash];
  if (viewFn) {
    var viewContainer = $('.view-container');
    viewContainer.empty().append(viewFn());
  }
}
