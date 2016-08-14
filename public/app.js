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
    '#problem': learnjs.problemView
  };
  var splits = hash.split('-');
  var lookup = splits[0];
  var index = splits[1];
  var viewFn = routes[lookup];
  if (viewFn) {
    var viewContainer = $('.view-container');
    viewContainer.empty().append(viewFn(index));
  }
}
