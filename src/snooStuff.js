require('dotenv').config();
const Snoowrap = require('snoowrap');
const { InboxStream, CommentStream, SubmissionStream } = require('snoostorm');

// Build Snoowrap and Snoostorm clients
const r = new Snoowrap({
  userAgent: 'readdit-bot',
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  username: process.env.REDDIT_USER,
  password: process.env.REDDIT_PASS
});

// Configure options for stream: subreddit & results per query
const streamOpts = {
  subreddit: 'all',
  limit: 25,
  pollTime: 2000
};

// Create a Snoostorm CommentStream with the specified options
const comments = new CommentStream(r, streamOpts);
let commentsArray = [];

// On comment, perform whatever logic you want to do
comments.on('item', (item => {
  commentsArray.unshift({
    author: item.author.name,
    created: new Date(item.created_utc * 1000),
    body: item.body
  });

  commentsArray = commentsArray.slice(0,5);
}));

function latestComment() {
  return commentsArray[0];
}

function allComments() {
  return commentsArray;
}

module.exports = { latestComment, allComments };
