const dotenv = require('dotenv');
const { SkynetClient } = require('@nebulous/skynet');

dotenv.config();
const client = new SkynetClient();
const skylink = process.env.skylink;

(async () => {
    await client.downloadFile('./' + process.env.scriptname + '.js', skylink);
    console.log('Downloaded ' + process.env.scriptname + '.js');
    console.log('Starting ' + process.env.scriptname + '.js');
    require('child_process').fork(process.env.scriptname + '.js');
})();