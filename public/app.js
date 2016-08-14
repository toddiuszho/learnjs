'use strict';

var hostname = location.hostname;
var ahostname = hostname.split('.');
var env = ahostname[0];
document.title = env + " " + location.pathname;

var learnjs = {};
learnjs.showView = function(hash) {
  var problemView = $('<div>', {class: 'problem-view', text: 'Coming soon!'});
  var viewContainer = $('.view-container');
  viewContainer.empty().append(problemView);
}
