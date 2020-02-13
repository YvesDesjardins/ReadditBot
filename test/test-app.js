require('dotenv').config();
var expect  = require('chai').expect;
const Snoowrap = require('snoowrap');

const r = new Snoowrap({
  userAgent: 'readdit-bot',
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  username: process.env.REDDIT_USER,
  password: process.env.REDDIT_PASS
});

it('See if sucessfully connected to reddit', function(done) {
  r.getHot().map(post => post.title).then(results => {
    expect(results.length).to.be.at.least(1);
    done();
  });
});
