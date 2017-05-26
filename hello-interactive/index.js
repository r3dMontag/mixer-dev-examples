const interactive = require('beam-interactive-node2');
const ws = require('ws');

interactive.setWebSocket(ws);

const client = new interactive.GameClient();

client.open({
    authToken: '<OAuth Token>',
    versionId: 1234,
});
