/**
 * Appened videoplus banner in the mentioned position
 * 
 * This file is to append videoplus banner in the mentioned position
 * 
 * @category Apptha
 * @package Com_Contushdvideoshare
 * @version 3.6
 * @author Apptha Team <developers@contus.in>
 * @copyright Copyright (C) 2014 Apptha. All rights reserved.
 * @license GNU General Public License http://www.gnu.org/copyleft/gpl.html
 */
var jqbanner = jQuery.noConflict();
jqbanner(document)
		.ready(
				function() {
					jqbanner("#featured").tabs({
						fx : {
							opacity : "toggle"
						}
					}).tabs("rotate", 5000, true);
					vid = "fragment-" + videoid;
					sourceCode = document.getElementById(vid).innerHTML;
					embedCode = sourceCode.replace('embecontus', 'embed');
					embedCode = embedCode.replace('iframcontus', 'iframe');
					embedCode = embedCode.replace('videcontus', 'video');
					embedCode = embedCode.replace('objeccontus', 'object');
					if (lt == true) {
						embedCode = sourceCode.replace('EMBECONTUS', 'EMBED');
						embedCode = embedCode.replace('IFRAMCONTUS', 'IFRAME');
						embedCode = embedCode.replace('VIDECONTUS', 'VIDEO');
						embedCode = embedCode.replace('OBJECCONTUS', 'OBJECT');
					}
					document.getElementById("nav-" + vid).className = 'ui-tabs-nav-item ui-tabs-selected';
					document.getElementById('videoPlay').innerHTML = embedCode;
					var get_width = 'auto';
					// Getting the width of the theme to fix the banner fix
					if (get_width == 'auto') {
						var theme_width = jqbanner("#content").css('width');
						var theme_width = jqbanner("#container").css('width');
						var theme_width = jqbanner("#main").css('width');
						var theme_width = jqbanner("#page").css('width');
						var theme_width = jqbanner("#wrapper").css('width');

					} else {
						var theme_width = get_width;
					}
					if (theme_width == undefined) {
						var theme_width = '990';
						// alert('Banner width doesn`t match with your current
						// theme.Please Go to Settings and change the width of
						// your banner to matach the theme');
					}

					// Getting the theme width and subtracting the border
					var border_width = parseInt('10');
					var actual_width = parseInt(theme_width) - (border_width);

					jqbanner("#featured").css('width', actual_width);
					jqbanner("#slider_banner > ul").tabs({
						fx : {
							opacity : "toggle"
						}
					}).tabs("rotate", '3000', true);
				});
function switchVideo(vid) {
	sourceCode = document.getElementById(vid).innerHTML;
	embedCode = sourceCode.replace('embecontus', 'embed');
	embedCode = embedCode.replace('iframcontus', 'iframe');
	embedCode = embedCode.replace('videcontus', 'video');
	embedCode = embedCode.replace('objeccontus', 'object');
	if (lt == true) {
		embedCode = sourceCode.replace('EMBECONTUS', 'EMBED');
		embedCode = embedCode.replace('IFRAMCONTUS', 'IFRAME');
		embedCode = embedCode.replace('VIDECONTUS', 'VIDEO');
		embedCode = embedCode.replace('OBJECCONTUS', 'OBJECT');
	}
	document.getElementById("nav-" + vid).className = 'ui-tabs-nav-item ui-tabs-selected';

	removeSelectItem = document.getElementById("activeCSS").value;
	document.getElementById("nav-" + removeSelectItem).className = 'ui-tabs-nav-item';
	document.getElementById('videoPlay').innerHTML = embedCode;
	document.getElementById("activeCSS").value = vid;

}
function failed(e) {
	if (txt == 'iPod' || txt == 'iPad' || txt == 'iPhone'
			|| txt == 'Linux armv7I') {
		alert('Player doesnot support this video.');
	}
}
function currentVideo(vid, videoids) {

	for (var i = 0; i < videoids.length; i++) {
		if (videoids[i] != vid) {
			var prev_fragment = document.getElementById('nav-fragment-'
					+ videoids[i]);
			prev_fragment.className = "ui-tabs-nav-item";
		}
	}
	var fragment = document.getElementById('nav-fragment-' + vid);
	fragment.className += "  ui-tabs-selected";
	document.getElementById("activeCSS").value = 'fragment-' + vid;
}