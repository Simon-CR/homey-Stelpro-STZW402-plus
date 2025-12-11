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

    this.registerCapability('stelpro_thermostat_state', 'THERMOSTAT_OPERATING_STATE', {
      get: {
        'Idle': 'Idle',
        'Heating': 'Heating',
      },
      report: 'THERMOSTAT_OPERATING_STATE_REPORT',
      reportParser: report => {
        if (report && report.hasOwnProperty('Level')) {
          if (report['Level'] === 'Heating') return 'Heating';
          return 'Idle';
        }
        return null;
      }
    });

    // Register flow action
    this.homey.flow.getActionCard('set_outside_temperature')
      .registerRunListener(async (args, state) => {
        return this._sendOutsideTemperature(args.temperature);
      });
  }

  async _sendOutsideTemperature(temperature) {
    this.log(`Sending outside temperature: ${temperature}`);
    try {
      // Construct SENSOR_MULTILEVEL_REPORT
      // Byte 0: Sensor Type = 0x01 (Air Temperature)
      // Byte 1: Level = Precision (3 bits) | Scale (2 bits) | Size (3 bits)
      //         Precision = 2, Scale = 0 (Celsius), Size = 2
      //         (2 << 5) | (0 << 3) | 2 = 0x42
      // Byte 2-3: Value (2 bytes)

      const buffer = Buffer.alloc(4);
      buffer.writeUInt8(0x01, 0);
      buffer.writeUInt8(0x42, 1);
      buffer.writeInt16BE(Math.round(temperature * 100), 2);

      await this.node.CommandClass.COMMAND_CLASS_SENSOR_MULTILEVEL.sendCommand('SENSOR_MULTILEVEL_REPORT', buffer);
    } catch (err) {
      this.error('failed_to_send_outside_temperature', err);
      throw err;
    }
  }
}

module.exports = StelproSTZW402PlusDevice;
