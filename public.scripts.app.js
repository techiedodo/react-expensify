'use strict';

console.log('app.js running');

var template = React.createElement(
  'p',
  null,
  'First JSX from app.js '
);
var appRoot = document.getElementById('app');
ReactDome.render(template, app);
