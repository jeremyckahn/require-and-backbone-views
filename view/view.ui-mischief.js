/*jslint nomen: true, plusplus: true, undef: true, todo: true, white: true,
  browser: true, indent: 2, maxlen: 80 */
/*global Backbone: false, _: false, $: false */

define(['exports'], function (UIMischief) {

  'use strict';

  // This is just generally useful.
  var $win = $(window);


  // PRIVATE UTILITY FUNCTIONS
  //
  // Only publicly expose functionality that code outside of the View should be
  // concerned with.  Other functions should be made private up here and called
  // from the View instance's various methods as needed.


  /**
   * Prepares button elements for size modification.
   * @param {UIMischiefView} uiMischief An instance of UIMischief.view.
   */
  function initButtons (uiMischief) {
    uiMischief._$growBtn.data('scale', 1);
    uiMischief._$shrinkBtn.data('scale', 1);
  }


  /**
   * Changes an element's scale based on it's current `scale` data and
   * specified delta.
   * @param {jQuery} $el
   * @param {number} delta A positive or negative value.
   */
  function changeElScale ($el, delta) {
    var currentScale = $el.data('scale');
    var newScale = currentScale += delta;
    $el.css('transform', 'scale(' + newScale + ')');
    $el.data('scale', newScale);
  }


  UIMischief.View = Backbone.View.extend({

    'events': {
      'click button.grow': 'onClickGrowButton'
      ,'click button.shrink': 'onClickShrinkButton'
    }


    /**
     * @param {Object} opts
     *   @param {jQuery} $el This View assumes that $el is passed to the
     *       constuctor.
     * @constructor
     */
    ,'initialize': function (opts) {
      // This call to `extend` is a useful peice of init-time boilerplate.  It
      // takes all options passed to the View constructor and attaches them
      // directly to the View instance.  These are also saved as
      // viewInstance.options, but it is slightly faster and easier to just
      // reference properties attached directly to `this`.
      _.extend(this, opts);

      // If you know that this View is going to be working with a particular
      // child node a lot, cache it privately in `initialize`.  The
      // _$leadingUnderscore convention denotes that this is a jQuery instance
      // and is not part of the public API.

      /** @type {jQuery) */
      this._$growBtn = this.$el.find('button.grow');

      /** @type {jQuery) */
      this._$shrinkBtn = this.$el.find('button.shrink');

      initButtons(this);
    }


    // EVENT HANDLERS
    //
    // Event handlers should have as little logic as possible.  If lots of
    // logic should be run when a given event fires, move it to a new function.
    // Event handlers are for wiring functionality to input, not the
    // functionality itself.


    /**
     * @param {jQuery.Event} evt
     */
    ,'onClickGrowButton': function (evt) {
      changeElScale(this._$growBtn, .2);
    }


    /**
     * @param {jQuery.Event} evt
     */
    ,'onClickShrinkButton': function (evt) {
      changeElScale(this._$shrinkBtn, -.2);
    }

  });

});
