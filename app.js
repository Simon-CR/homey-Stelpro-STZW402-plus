'use strict';

const Homey = require('homey');

class StelproApp extends Homey.App {
  async onInit() {
    this.log('StelproApp has been initialized');
  }
}

module.exports = StelproApp;
