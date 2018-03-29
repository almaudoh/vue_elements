(function (Drupal) {

  Drupal.VueElements = {};

  Drupal.VueElements.extractJsonData = function (selector) {
    // Use direct child elements to harden against XSS exploits when CSP is on.
    var dataElement = document.querySelector(selector);

    // Variable that contains JSON settings pushed into the selector.
    var data = {};

    if (dataElement !== null) {
      data = JSON.parse(dataElement.textContent);
    }

    return data;
  }
})(Drupal);
