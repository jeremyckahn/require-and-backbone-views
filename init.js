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
  var uiMischief = new UIMischief.view({ '$el': $uiMischief});

});
