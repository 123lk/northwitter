import {expect} from 'chai';
import * as data from './data';
import * as helpers from './helpers';
const extractUser = helpers.extractUser;
const user = data.user;


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



