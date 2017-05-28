# Quick Start Examples
These are a few examples using [Mixer's Interactive Libraries and API](https://dev.mixer.com/).

## Examples
[Hello World Interactive](hello-interactive)

## A Few Things You Might Need...
### Generating an OAuth Token
You can quickly generate an OAuth token using [Mixer Dev Tools](https://mixerdevtools.com/gettoken). Here's how:
  1. Go to [Mixer Dev Tools](https://mixerdevtools.com)
  1. Click 'Generate OAuth Token'
  1. Choose the scopes you need for your project.
  1. Click 'Generate OAuth Token' and you will be redirected to Mixer.
  1. Click 'Allow' to allow Mixer Dev Tools to generate an OAuth token on your behalf.
  1. You'll be redirected back to Mixer Dev Tools where your token will be waiting for you!


*Note: This tool uses the implicit grant flow to generate an OAuth token. This means that the token is never sent to the server and will be lost once you close your browser window. For more information on the implicit grant flow go [here](https://tools.ietf.org/html/rfc6749#section-1.3.2).*

For information on fully implementing OAuth for your project check out [Mixer's OAuth Documentation](https://dev.mixer.com/reference/oauth/)

### Creating an Interactive Project (and Getting Version ID)
1. Go to the [Mixer Studio](https://mixer.com/i/studio).
1. Click the plus sign by 'Your Projects'.
1. Enter a title and click 'SAVE'.
1. Click on 'Code' in the menu in the upper left corner.
1. Your Version ID of your interactive project will appear. Copy it!
