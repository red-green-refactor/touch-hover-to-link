var $;

$ = jQuery;

$.fn.extend({
  touchHoverToLink: function(options) {
    var $item, bindCloseHoverToBodyClick, bindTouchLinkClickEvent, item, setupTouchLinkItem, _dataLinkSet;
    _dataLinkSet = false;
    item = this;
    $item = $(item);

    setupTouchLinkItem = function() {
      $item.attr('data-href', $item.attr('href'));
      return $item.attr('href', "#touch_click_link");
    };

    bindTouchLinkClickEvent = function() {
      return $item.on('click', function(event) {
        event.preventDefault();
        if ($(event.currentTarget).attr('data-linkSet') === "true") {
          window.location.href = $(event.currentTarget).attr('data-href');
          _dataLinkSet = false;
        } else {
          $item.attr('data-linkSet', "false");
          $(event.currentTarget).attr('data-linkSet', "true");
          _dataLinkSet = true;
        }
      });
    };

    bindCloseHoverToBodyClick = function() {
      return $('body').on('click', function(event) {
        if (!$(event.target).hasClass(item.selector.substring(1))) {
          if (_dataLinkSet === true) {
            $item.attr('data-linkSet', "false");
            _dataLinkSet = false;
          }
        }
      });
    };

    setupTouchLinkItem();
    bindTouchLinkClickEvent();
    bindCloseHoverToBodyClick();
  }
});
