# Homey Stelpro App

This app adds support for Stelpro Z-Wave devices to Homey.

## Supported Devices

### Stelpro Ki Thermostat (STZW402+)
The Stelpro Ki Thermostat for the Smart Home is the first Z-Wave Plus line voltage thermostat in North America.

**Features:**
- **Current Temperature:** View the current room temperature.
- **Target Temperature:** Set your desired temperature.
- **Thermostat Mode:** Switch between:
  - `Off`: Heater is off.
  - `Heat`: Normal heating mode.
  - `Eco` (Energy Save Heat): Energy-saving mode.

## Installation

1. Install the app from the Homey App Store.
2. Go to the **Devices** tab in the Homey app.
3. Tap **+** (Add Device) and select **Stelpro**.
4. Follow the on-screen instructions to pair your device.

## Pairing Instructions
1. On the thermostat, press the **Up** and **Down** buttons simultaneously for 3 seconds.
2. The device will enter inclusion mode.

## Development

### Prerequisites
- [Homey CLI](https://apps.developer.homey.app/the-basics/getting-started/installing-homey-cli) installed.
- Node.js installed.

### Setup
1. Clone the repository.
2. Run `npm install` to install dependencies.

### Running locally
```bash
homey app run
```

## Changelog

### v1.0.0
- Initial release with support for Stelpro Ki Thermostat (STZW402+).

