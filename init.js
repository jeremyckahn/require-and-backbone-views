/*jslint nomen: true, plusplus: true, undef: true, todo: true, white: true,
  browser: true, indent: 2, maxlen: 80 */
/*global Backbone: false, _: false, $: false */
// These are just my preferred JSLint options.  Use whatever you please, but do
// consider using some kind of static analysis tool.

require([

    // List your views here to import them.
    'view/view.ui-mischief'
    ], function (UIMischief) {

  var $uiMischief = $('.ui-mischief');
  var uiMischiefs = [];

  // It's generally easier to have a Backbone View representing a single DOM
  // element, not many.  Iterate through the jQuery collection and instantiate
  // a new View instance for each one.
  $uiMischief.each(function (i, el) {
    uiMischiefs.push(new UIMischief.View( { '$el': $(el) } ));
  });

  console.log(uiMischiefs);

});
