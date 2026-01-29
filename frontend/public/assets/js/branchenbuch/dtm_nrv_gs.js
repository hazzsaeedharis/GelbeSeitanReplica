function dtmExtractGetValue (param) {
        var match = document.getElementById('nrvs').src.match('[?&]' + param + '=([^&]+)');
        return match ? match[1] : null;
}

function dtmGetCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

// Setup the callback queue
var adition = adition || {}; adition.srq = adition.srq || [];
(function() {
	var script = document.createElement("script"); script.type = "text/javascript";
	script.src = (document.location.protocol === "https:" ? "https:" : "http:") + "//imagesrv.adition.com/js/srp.js";
	script.charset = "utf-8";
	script.async = true;
	var firstScript = document.getElementsByTagName("script")[0]; firstScript.parentNode.insertBefore(script, firstScript);
})()
console.log('1');
adition.srq.push(function(api) {

	var dtmUrlParts = location.href.split("/"); 
	dtmUrlParts.splice(0,3);
	var dtmPath = dtmUrlParts.join("/");


	if (dtmPath == '') {
		api.setProfile('category', 'homepage');
		api.setProfile('section', 'homepage');
	} else if (dtmPath.indexOf('branchenbuch') === 0) {
		api.setProfile('category', 'content');
		api.setProfile('section', 'search');
	} else if (dtmPath.indexOf('ratgeber') === 0) {
		api.setProfile('category', 'content');
		api.setProfile('section', 'ratgeber');
	}
	api.setProfile('layoutclass', dtm_layoutclass);
	
	if (dtm_layoutclass == 'mobile') {
		api.configureRenderSlot("dtm_mobile_top").setContentunitId(4387592);
		api.configureRenderSlot("dtm_mobile_bottom").setContentunitId(4593290);

		if (document.getElementById('dtm_mobile_top')) 
			api.renderSlot('dtm_mobile_top');

		if (document.getElementById('dtm_mobile_bottom')) 
			api.renderSlot('dtm_mobile_bottom');
	} else {
		api.configureRenderSlot("dtm_super").setContentunitId(4387593);
		api.configureRenderSlot("dtm_sky").setContentunitId(4592877);
		api.configureRenderSlot("dtm_rectangle_1").setContentunitId(4592881);
		api.configureRenderSlot("dtm_rectangle_2").setContentunitId(4593288);
		api.configureRenderSlot("dtm_rectangle_3").setContentunitId(4593289);
		if (document.getElementById('dtm_sky')) 
			api.renderSlot('dtm_sky');

		if (document.getElementById('dtm_rectangle_1')) 
			api.renderSlot('dtm_rectangle_1');

		if (document.getElementById('dtm_rectangle_2')) 
			api.renderSlot('dtm_rectangle_2');

		if (document.getElementById('dtm_rectangle_3')) 
			api.renderSlot('dtm_rectangle_3');

	}
	api.registerAdfarm("ad13.adfarm1.adition.com");
	if (document.getElementById('dtm_super')) {
		api.renderSlot('dtm_super');
		document.getElementById('dtm_super').style.textAlign = 'center'
	}

	const dtmParts = ("; " + document.cookie).split("; __cmpconsentx15760=");
	let dtmCookieTcString;
	if (dtmParts.length === 2) {
		dtmCookieTcString = dtmParts.pop().split(';').shift();
	}
	if (typeof(__tcfapi) !== 'undefined' || typeof(dtmCookieTcString) !== 'undefined') {
	    if ( typeof(__tcfapi) !== 'undefined') {
		__tcfapi('addEventListener', 2, function(tcData, success) {
			if (success && tcData.eventStatus === 'tcloaded') {
				let dtmTcString = tcData.tcString;
				if (typeof(dtmTcString) === 'undefined' && typeof(dtmCookieTcString) !== 'undefined') {
					dtmTcString = dtmCookieTcString;
				}
				if (typeof(dtmTcString) !== 'undefined') {
					try {
						api.consentService.setGdprConsent(dtmTcString)
							.setGdpr(1)
							.setGdprPd(0);
						api.load().completeRendering();
					} catch (e) {
						console.warn('DTM: ' + e);
					}
				}
				__tcfapi('removeEventListener', 2, function(success) {}, tcData.listenerId);
			}
		});
	    } else {
		dtmTcString = dtmCookieTcString;
		if (typeof(dtmTcString) !== 'undefined') {
                	try {
                        	api.consentService.setGdprConsent(dtmTcString)
                                	.setGdpr(1)
                                        .setGdprPd(0);
                                api.load().completeRendering();
                        } catch (e) {
                        	console.warn('DTM: ' + e);
                        }
                 }
                 __tcfapi('removeEventListener', 2, function(success) {}, tcData.listenerId);
	    }
	}
});
