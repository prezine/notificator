# [Notificator](https://github.com/prezine/notificator)

[![Build Status](https://travis-ci.org/sindresorhus/pageres.svg?branch=master)](https://travis-ci.org/sindresorhus/pageres) [![Coverage Status](https://coveralls.io/repos/sindresorhus/pageres/badge.svg?branch=master)](https://coveralls.io/r/sindresorhus/pageres?branch=master) [![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)

Send Important Messages, Updates, Newslaters, to users who turned on Notification. A good way to make sure your user get updated. It's speedy and dynamic. It can also be used over web sockets.

## Usage

```html
<button onclick="notificator._run()" 
        id="notificator" 
        data-title="Hello world" 
        data-icon="https://avatars3.githubusercontent.com/u/20226789?s=460&v=4" 
        data-message="Hey there! You've been notified!" 
        data-callback="https://github.com/prezine/notificator">
  Notify me!
</button>
```

```js
    let notificator = new Notificator(1);
    notificator.notif();
```

## API

### Notificator([options])

#### options

Type: `object`

##### data-*

Type: `string` &  `boolean`

Notificator allows data- attribute define the action of the notification.<br>
For example `data-title="Hello world"` Outputs a notification with that title

Available datasets:

- `titles`: The title of the notification
- `icon`: Notification icons.
- `message`: This is the message that comes through the notification `100 words`
- `callback`: This is a URL when clicked on the notification, should redirect you to
- `image`: Image added to the notification
- `timestamp`: Allow user see when the action they're been notified about took place

## Contributor
        Precious Tom
        Kebin Kito
