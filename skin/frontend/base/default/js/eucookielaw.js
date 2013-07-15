// Creare's 'Implied Consent' EU Cookie Law Banner v:2.2

function createDiv(){
	var bodytag = document.getElementsByTagName('body')[0];
	var div = document.createElement('div');
	div.setAttribute('id','cookie-law');
	div.innerHTML = '<p>'+privacyMessage+' <a href="'+privacyUrl+'" rel="nofollow" title="'+privacyLinkText+'">'+privacyLinkText+'</a>.</p>';	
	
	// bodytag.appendChild(div); // Adds the Cookie Law Banner just before the closing </body> tag
	// or
	bodytag.insertBefore(div,bodytag.firstChild); // Adds the Cookie Law Banner just after the opening <body>
	
	document.getElementsByTagName('body')[0].className+=' cookiebanner'; //Adds a class tothe <body> tag when the banner is visible
	
	createCookie(window.cookieName,window.cookieValue, window.cookieDuration); // Create the cookie
}


function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000)); 
		var expires = "; expires="+date.toGMTString(); 
	}
	else var expires = "";
	if(window.dropCookie) { 
		document.cookie = name+"="+value+expires+"; path=/"; 
	}
}

function checkCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function eraseCookie(name) {
	createCookie(name,"",-1);
}