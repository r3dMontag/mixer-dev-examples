const ws = require('ws');

interactive.setWebSocket(ws);

const client = new interactive.GameClient();

client.open({
    authToken: /*'yourauthtoken'*/,
    versionId: /*yourversionid*/,
}).then(function () {
    var size = 10;
    // Create Button!
    return client.createControls({
        // Use default scene
        sceneID: 'default',
        controls:
        [
          {
            controlID: "hello_world",
            kind: 'button',
            text: "Hello World!",
            // does not cost sparks as we do not capture transaction on mousedown
            cost: 0,
            position: [
                {
                    size: 'large',
                    width: size,
                    height: size / 2,
                    x: size,
                    y: 1,
                },
                {
                    size: 'medium',
                    width: size,
                    height: size,
                    x: size,
                    y: 1,
                },
                {
                    size: 'small',
                    width: size,
                    height: size / 2,
                    x: size,
                    y: 1,
                },
            ],
          }
        ],
    });
}).then(function (controls) {
    controls.forEach(function (control) {
        // mousedown = button has been pushed
        control.on('mousedown', function (inputEvent, participant) {
            // Logs who pushed the button
            console.log(participant.username + " pushed, " + inputEvent.input.controlID);
        });
    });
    // Controls don't appear unless we tell Interactive that we are ready!
    client.ready(true);
});;

// Log when we're connected to interactive
client.on('open', function () { return console.log('Connected to interactive'); });
