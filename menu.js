var mouse_x = 0;
var mouse_y = 0;
menu_obj = document.getElementById("menu");

function mousemove(event) {
	if (document.attachEvent != null) {
		mouse_x = window.event.pageX;
		mouse_y = window.event.pageY;
	} else if (!document.attachEvent && document.addEventListener) {
		mouse_x = event.pageX;
		mouse_y = event.pageY;
	}
}

function show_menu(e) {
	mousemove(e);
	menu_obj.style.left = mouse_x + "px";
	menu_obj.style.top = mouse_y + "px";
	menu_obj.style.visibility = "visible";
	return false;
}

function hide_menu(e) { menu_obj.style.visibility = "hidden"; }

function jump(e) { window.location=e.getAttribute("url"); }

document.oncontextmenu = show_menu;
document.onclick = hide_menu;