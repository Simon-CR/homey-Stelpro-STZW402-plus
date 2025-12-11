'use strict';

const { ZWaveDevice } = require('homey-zwavedriver');

class StelproSTZW402PlusDevice extends ZWaveDevice {
  /**
   * onNodeInit is called when the device is initialized.
   */
  async onNodeInit() {
    this.log('StelproSTZW402PlusDevice has been initialized');

    // Register capabilities
    this.registerCapability('measure_temperature', 'SENSOR_MULTILEVEL');
    this.registerCapability('target_temperature', 'THERMOSTAT_SETPOINT');
    this.registerCapability('thermostat_mode', 'THERMOSTAT_MODE', {
      get: {
        'Off': 'off',
        'Heat': 'heat',
        'Energy Save Heat': 'eco',
      },
      set: {
        'off': 'Off',
        'heat': 'Heat',
        'eco': 'Energy Save Heat',
      },
    });
  }
}

module.exports = StelproSTZW402PlusDevice;
