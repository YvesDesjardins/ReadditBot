require('dotenv').config();
const Snoowrap = require('snoowrap');
let isUp = false;

// Build Snoowrap client
const r = new Snoowrap({
  userAgent: 'readdit-bot',
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  username: process.env.REDDIT_USER,
  password: process.env.REDDIT_PASS
});

async function getPosts() {
  return r.getNew('aww').then(async results => parseResults(results));
}

async function parseResults(results) {
  const output = {};
  results.forEach(submission => {
    if (submission.url.slice(-4) === '.jpg') {
      output[submission.id] = {
        id: submission.id,
        title: submission.title,
        author: submission.author.name,
        url: submission.url,
        media: submission.media,
        created_at: new Date(submission.created_utc * 1000),
      };
    }
  });

  return output;
}

function startConnection() {
  console.log('Starting connection to reddit');
  isUp = true;
}

function killConnection() {
  console.log('Killing connection to reddit');
  isUp = false;
}

function checkConnection() {
  return isUp;
}

module.exports = { getPosts, startConnection, killConnection, checkConnection, r };
