'use strict';

const Homey = require('homey');

class StelproSTZW402PlusDriver extends Homey.Driver {
  async onInit() {
    this.log('StelproSTZW402PlusDriver has been initialized');
  }
}

module.exports = StelproSTZW402PlusDriver;
