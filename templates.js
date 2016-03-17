var templates = {};

templates.bitts = [
"<h2><%= title %></h2>",
"<h3><%= user %><h3>",
"<p><%= bitt %><p>"
"<h4><%= date %><h4>",
"<button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
  Delete
</button>"

].join('');

templates.add = [
  "<input type="text" name="title" value="" placeholder="Title">",
  "<input type="text" name="user" value="" placeholder="User">",
  "<input type="text" name="tweet" value="" placeholder="Bitt">",
  "<input type="text" name="tweet" value="" placeholder="Date">",
  "<button class="mdl-button mdl-js-button mdl-js-ripple-effect">
Add
</button>",
].join('');
