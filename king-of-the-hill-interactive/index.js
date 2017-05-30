require('dotenv').config();
const interactive = require('beam-interactive-node2');
const ws = require('ws');

interactive.setWebSocket(ws);

const client = new interactive.GameClient();

// Log when we're connected to interactive
client.on('open', function () { return console.log('Connected to interactive'); });

// Open clinet
client.open({
    authToken: process.env.OAUTH_TOKEN,
    versionId: process.env.VERSION_ID
}).then(function () {
    return client.createControls({
        sceneID: 'default',
        controls: [
          {
            controlID: "king_of_the_hill",
            kind: 'button',
            text: "Who is King of the Hill?",
            cost: 0,
            position: [
                {
                    size: 'large',
                    width: 20,
                    height: 6,
                    x: 30,
                    y: 7
                },
                {
                    size: 'medium',
                    width: 20,
                    height: 6,
                    x: 12,
                    y: 9
                },
                {
                    size: 'small',
                    width: 20,
                    height: 6,
                    x: 5,
                    y: 11
                }
            ]
          }
        ]
    });
}).then(function (controls) {
    controls.forEach(function (control) {
        control.on('mousedown', function (inputEvent, participant) {
            // Log who pushed what
            console.log(participant.username + " pushed, " + inputEvent.input.controlID);
            // Deduct sparks
            if (inputEvent.transactionID) {
                client.captureTransaction(inputEvent.transactionID)
                    .then(function () {
                    console.log("Charged " + participant.username + " " + control.cost + " sparks!");
                });
            }
            // Update the button to say who is the current King of The Hill and increase the cost of the button
            client.updateControls({
              sceneID: 'default',
              controls: [
                {
                  controlID: "king_of_the_hill",
                  kind: 'button',
                  text: participant.username + "\nis King Of The Hill!",
                  etag: control.etag,
                  cost: control.cost + 1,
                  cooldown: (new Date).getTime() + 10000
                }
              ]
          });
        });
    });
    // Render controls
    client.ready(true);
});
