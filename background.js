var enabled = true;
chrome.webRequest.onBeforeRequest.addListener(
	function(details) {
		return {cancel: enabled };
	},
	{urls: blocked_domains},
	["blocking"]
);
function changecontent() {
    document.getElementById('card_headline_text').style.visibility = 'hidden';
}
