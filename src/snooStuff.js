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

function latestComment() {
  return commentsArray[0];
}

async function allComments() {
  return r.getNew('aww').then(async results => parseResults(results));
}

async function parseResults(results) {
  const output = {};
  results.forEach(submission => {
    output[submission.id] = {
      title: submission.title,
      author: submission.author.name,
      url: submission.url,
      media: submission.media,
      created_at: new Date(submission.created_utc * 1000),
    }
  });

  return output;
}

function startConnection() {
  try {
    // TODO: start connection here
    console.log('Starting connection to reddit');
    isUp = true;
    return true;
  } catch (err) {
    isUp = false;
    return false;
  }
}

function killConnection() {
  try {
    // TODO: kill connection here
    console.log('Killing connection to reddit');
    isUp = false;
    return true;
  } catch (err) {
    isUp = true;
    return false;
  }
}

function checkConnection() {
  return isUp;
}

module.exports = { latestComment, allComments, startConnection, killConnection, checkConnection, r };
