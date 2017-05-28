require('dotenv').config();
const interactive = require('beam-interactive-node2');
const ws = require('ws');

interactive.setWebSocket(ws);

const client = new interactive.GameClient();

client.open({
    authToken: process.env.OAUTH_TOKEN,
    versionId: process.env.VERSION_ID
}).then(function () {
    client.createControls({
        sceneID: 'default',
        controls:
        [
          {
            controlID: "hello_world",
            kind: 'button',
            text: "Hello World!",
            position: [
                { size: 'large', width: 10, height: 5, x: 1, y: 1 },
                { size: 'medium', width: 10, height: 5, x: 1, y: 1 },
                { size: 'small', width: 10, height: 5, x: 1, y: 1 }
            ],
          }
        ],
    });

    client.ready(true);
});

// Log when we're connected to interactive
client.on('open', function () { return console.log('Connected to interactive'); });
