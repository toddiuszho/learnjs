'use strict';

var hostname = location.hostname;
var ahostname = hostname.split('.');
var env = ahostname[0];
document.title = env + " " + location.pathname;

var learnjs = {};

learnjs.problems = [
  {
    description: "What is truth?",
    code: "function problem() { return __; }"
  },
  {
    description: "Simple Math",
    code: "function problem() { return 42 == 6 * __; }"
  }
];

learnjs.applyObject = function(obj, elem) {
  var found
  for (var key in obj) {
    found = elem.find('[data-name="' + key + '"]')
    if (found) {
      found.text(obj[key])
    }
    else {
      console.log('No element with attribute key/value data-name="' + key + '" could be found under ' + elem);
    }
  }
}

learnjs.problemView = function(data) {
  var problemNumber = parseInt(data, 10);
  var view = $('.templates .problem-view').clone();
  var problemData = learnjs.problems[problemNumber - 1];
  var resultFlash = view.find('.result');

  function checkAnswer() {
    var answer = view.find('.answer').val();
    var test = problemData.code.replace('__', answer) + '; problem();';
    return eval(test);
  }

  function checkAnswerClick() {
    if (checkAnswer()) {
      resultFlash.text('Correct!');
    } else {
      resultFlash.text('Incorrect!');
    }
    return false;
  }

  view.find('.check-btn').click(checkAnswerClick);
  view.find('.title').text('Problem #' + problemNumber);
  learnjs.applyObject(problemData, view)
  return view;
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

learnjs.appOnReady = function() {
  window.onhashchange = function() {
    learnjs.showView(window.location.hash);
  }
  learnjs.showView(window.location.hash);
}
