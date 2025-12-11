'use strict';

const { ZWaveDevice } = require('homey-zwavedriver');

class StelproSTZW402PlusDevice extends ZWaveDevice {
  async onNodeInit() {
    this.log('StelproSTZW402PlusDevice has been initialized');

    this.registerCapability('measure_temperature', 'SENSOR_MULTILEVEL');
    this.registerCapability('target_temperature', 'THERMOSTAT_SETPOINT');
    this.registerCapability('thermostat_mode', 'THERMOSTAT_MODE');
  }
}

module.exports = StelproSTZW402PlusDevice;
