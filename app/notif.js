class Notificator {
	constructor(type) {
		/*{ 
		* 	Types of notification
		* 	1 : The icon and text (web)
		* 	2 : Action options (web)
		* 	3 : Image (web)
		* 	4 : Mobile Badge (mobile)
		* 	5 : Vibration (mobile)
		* } */
		this.type = type;
	}
	notif() {
		// request permission on page load
		document.addEventListener('DOMContentLoaded', function () {
		  if (!Notification) {
		    alert('Desktop notifications not available in your browser. Try Chromium.'); 
		    return;
		  }
		  if (Notification.permission !== 'granted')
		    Notification.requestPermission();
		});
	}
	_data() {
		let button = document.querySelector('#notificator');
		var options = {
			title: button.dataset.title, 
			icon: button.dataset.icon, 
			message: button.dataset.message,
			callback: button.dataset.callback
		};
		return options;
	}
	_iconNtext() {
		let data = this._data();
		if (Notification.permission !== 'granted')
			Notification.requestPermission();
		else {
			var notification = new Notification(data['title'], {
				icon: data['icon'],
				body: data['message']
			});
			notification.onclick = function () {
				window.open(data['callback']);
			};
		}
	}
	_run() {
		if (this.type == 1) {
			// 1 : The icon and text (web)
			this._iconNtext();
		} else {
			// 2 - 5 Coming soon
			return;
		}
	}
}