# Hello World Interactive
A basic example using [Mixer's Interactive Node library](https://github.com/mixer/interactive-node) to render a button. 

## Prerequisites
You will need:

1. [Node](https://nodejs.org/)
1. OAuth token with the following scope `interactive:robot:self`. You can quickly generate a OAuth token here: [Mixer Dev Tools](http://www.mixerdevtools.com/gettoken)
1. Version ID of your interactive project from [Mixer's Interactive Studio](https://mixer.com/i/studio)

## Get Started
1. cd into the hello-interactive directory.
1. Run `npm install`.
1. Create .env: `cp env.template .env` .
1. Edit .env and replace 'your\_oauth\_token' with your OAuth token and 'your\_version\_id' with the Version ID of your interactive project.
1. Open your channel: http://mixer.com/yourchannel .
1. Run `node index.js`.
1. :tada: Tada! :tada: