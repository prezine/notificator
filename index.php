<!DOCTYPE html>
<html>
<head>
	<title> JS Conf </title>
</head>
<body>
	<button onclick="notificator._run()" id="notificator" data-title="Hello world" data-icon="https://avatars3.githubusercontent.com/u/20226789?s=460&v=4" data-message="Hey there! You've been notified!" data-callback="https://github.com/prezine/notificator">Notify me!</button>
	<script src="app/notif.js"></script>
	<script>
		let notificator = new Notificator(1);
		notificator.notif();
	</script>
</body>
</html>