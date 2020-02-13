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
  results: 25
};

// Create a Snoostorm CommentStream with the specified options
const comments = new CommentStream(r, streamOpts);

console.log("Connected");

// On comment, perform whatever logic you want to do
comments.on('comment', console.log);
