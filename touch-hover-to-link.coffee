$ = jQuery

$.fn.extend
  touchHoverToLink: (options) ->
    _dataLinkSet = false
    item         = this
    $item        = $(item)

    setupTouchLinkItem = () ->
      $item.attr('data-href', $item.attr('href'))
      $item.attr('href', "#touch_click_link")

    bindTouchLinkClickEvent = () ->
      $item.on 'click', (event) ->
        event.preventDefault()
        if $(event.currentTarget).attr('data-linkSet') == "true"
          window.location.href = $(event.currentTarget).attr('data-href')
          _dataLinkSet = false
        else
          $item.attr('data-linkSet', "false")
          $(event.currentTarget).attr('data-linkSet', "true")
          _dataLinkSet = true

    bindCloseHoverToBodyClick = () ->
      $('body').on 'click', (event) ->
        unless $(event.target).hasClass(item.selector.substring(1))
          if _dataLinkSet == true
            $item.attr('data-linkSet', "false")
            _dataLinkSet = false

    setupTouchLinkItem()
    bindTouchLinkClickEvent()
    bindCloseHoverToBodyClick()

$ ->
  $('.touch_hover_click').touchHoverToLink() if $('.touch_hover_click').length