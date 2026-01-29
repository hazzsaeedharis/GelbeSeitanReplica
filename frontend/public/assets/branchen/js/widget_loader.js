function terminServiceLoader() {
  var that = this,
      MESSAGE_DELIMITER = 'xPYMx';
  this.iframe = null;
  this.findBaseURL = function() {
    var scripts = document.getElementsByTagName('script');
    var loaderString = "/widget/widget_loader.js";
    for(var i = 0, l = scripts.length; i < l; i++){
      if (scripts[i].src.indexOf(loaderString, scripts[i].src.length - loaderString.length) !== -1) {
        return scripts[i].getAttribute('src').replace("widget_loader.js","")
      }
    }
    return null;
  };

  this.load = function(terminServiceData) {
    this.terminServiceData = terminServiceData;
    this.iFrameBaseURL = this.findBaseURL();
    this.createIFrame();
  };

  this.iFrameURL = function() {
    return this.iFrameBaseURL + "/client/" + this.terminServiceData.config.auth_token;
  };

  this.targetElement = function() {
    return document.getElementById(this.terminServiceData.config.iframe_holder_id);
  };

  var _makeMessage = function(id, messageType, message) {
      var bits = ['pym', id, messageType, message];
      return bits.join(MESSAGE_DELIMITER);
  };

  var _makeMessageRegex = function(id) {
    var bits = ['pym', id, '(\\S+)', '(.*)'];
    return new RegExp('^' + bits.join(MESSAGE_DELIMITER) + '$');
  };

  this._processMessage = function(e) {
    // First, punt if this isn't from an acceptable domain.
    // if (e.origin !== 'https://terminwunsch.de' &&
    //     e.origin !== 'http://staging.terminwunsch.de' &&
    //     e.origin !== 'http://localhost:3000') {
    //   return;
    // }

    // Discard object messages, we only care about strings
    if (typeof e.data !== 'string') {
      return;
    }

    // Grab the message from the child and parse it.
    var match = e.data.match(_makeMessageRegex(that.targetElement().id));

    // If there's no match or too many matches in the message, punt.
    if (!match || match.length !== 3) {
      return false;
    }

    if (match[1] === 'height') {
      that.iframe.setAttribute('height', parseInt(match[2]) + 'px');
    }
  }

  this._onResize = function() {
    var width = that.targetElement().offsetWidth.toString();
    //this.sendMessage('width', width);
    that.targetElement().getElementsByTagName('iframe')[0].contentWindow
        .postMessage(_makeMessage(that.targetElement().id, 'width', width), '*');
  }

  this.createIFrame = function() {
    // to post a large amount of data to an iframe we'll need a form tag to post the data
    var formElement = document.createElement("form");
    formElement.setAttribute('id', 'terminservice_widget_form');
    formElement.setAttribute('action', this.iFrameURL());
    formElement.setAttribute('method', 'post');
    formElement.setAttribute('target', 'terminservice-widget-iframe');
    formElement.setAttribute('style', 'display: none');

    var hiddenInputTag = document.createElement("input");
    hiddenInputTag.setAttribute('name', 'business');
    hiddenInputTag.setAttribute('value', JSON.stringify(this.terminServiceData.business));
    hiddenInputTag.setAttribute('type', 'hidden');
    formElement.appendChild(hiddenInputTag);

    hiddenInputTag = document.createElement("input");
    hiddenInputTag.setAttribute('name', 'config');
    hiddenInputTag.setAttribute('value', JSON.stringify(this.terminServiceData.config));
    hiddenInputTag.setAttribute('type', 'hidden');
    formElement.appendChild(hiddenInputTag);

    hiddenInputTag = document.createElement("input");
    hiddenInputTag.setAttribute('name', 'meta');
    hiddenInputTag.setAttribute('value', JSON.stringify(this.terminServiceData.meta || {}));
    hiddenInputTag.setAttribute('type', 'hidden');
    formElement.appendChild(hiddenInputTag);

    document.body.appendChild(formElement);

    this.iframe = document.createElement('iframe');
    this.iframe.setAttribute('id','terminservice-widget-iframe');
    this.iframe.setAttribute('name','terminservice-widget-iframe');
    this.iframe.setAttribute('height','100%');
    this.iframe.setAttribute('style','border: 0; background-image:url("https://www.terminwunsch.de/images/spinner.gif"); background-repeat: no-repeat; background-position: center center; width: 100vw; max-width: 100%;');
    this.iframe.setAttribute('scrolling','no');
    this.targetElement().appendChild(this.iframe);
    this.iframe.onload = function() {
      this.style["background-image"] = "none";
    }
    window.addEventListener('message', this._processMessage, false);
    // Add an event listener that will handle redrawing the child on resize.
    window.addEventListener('resize', this._onResize);

    document.forms["terminservice_widget_form"].submit();
  };
}
