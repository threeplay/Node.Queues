import { Given, When, Then } from 'cucumber';
import { expect } from 'chai';
import hello from '../src/index';

Given('hello function', function() {
  this.fn = hello;
});

When('I invoke it', function() {
  this.fn_result = this.fn();
});

Then('I should get back {string}', function (string) {
  expect(this.fn_result).to.equal(string);
});

