import {expect} from 'chai';
import * as data from './data';
import * as helpers from './helpers';
const extractUser = helpers.extractUser;
const user = data.user;
const extractTweetData = helpers.extractTweetData;
const tweetData = data.tweetData;

describe('extractUser', () => {
  it('is a function', () => {
    expect(extractUser).to.be.a('function');
  });
  it('returns an object', () => {
    expect(extractUser(user)).to.be.an('object');
  });
  it('returns the correct data', () => {
    expect(extractUser(user).handle).to.equal('@northcoders');
    expect(extractUser(user).followers).to.equal(1354);
    expect(extractUser(user).tweets).to.equal(879);
  });
});

describe('extractTweetData', () => {
  it('is a function', () => {
    expect(extractTweetData).to.be.a('function');
  });
  it('returns an array', () => {
    expect(extractTweetData(tweetData)).to.be.an('array');
  });
  it('orders the tweets by date, starting with the most recent', () => {
    let expected = extractTweetData(tweetData);
    expect(expected[0].id).to.equal(3);
  });
});



