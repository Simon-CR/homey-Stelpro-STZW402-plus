# Stelpro STZW402+ (Ki Thermostat) Z-Wave Specifications

## Device Identification
- **Manufacturer:** Stelpro
- **Manufacturer ID:** `0x0239` (Decimal: 569)
- **Product Type ID:** `0x0001`
- **Product ID:** `0x0001`
- **Z-Wave Alliance ID:** 1603

## Supported Command Classes
Based on Z-Wave Plus certification and OpenZWave/Z-Wave JS definitions:
- COMMAND_CLASS_ZWAVEPLUS_INFO (V2)
- COMMAND_CLASS_VERSION (V2)
- COMMAND_CLASS_MANUFACTURER_SPECIFIC (V2)
- COMMAND_CLASS_DEVICE_RESET_LOCALLY (V1)
- COMMAND_CLASS_POWERLEVEL (V1)
- COMMAND_CLASS_BASIC (V1)
- COMMAND_CLASS_THERMOSTAT_MODE (V2)
- COMMAND_CLASS_THERMOSTAT_SETPOINT (V2)
- COMMAND_CLASS_THERMOSTAT_OPERATING_STATE (V1)
- COMMAND_CLASS_SENSOR_MULTILEVEL (V5) - Air Temperature
- COMMAND_CLASS_ASSOCIATION (V2)
- COMMAND_CLASS_ASSOCIATION_GRP_INFO (V1)

## Configuration Parameters
The Stelpro STZW402+ **does not support the Configuration Command Class**. 
- Settings such as **Temperature Format** (C/F) are typically handled via the `THERMOSTAT_SETPOINT` command class (by sending a setpoint with the desired scale) or locally on the device menu.
- **Backlight Intensity** and **Eco Mode** are often handled locally or via proprietary means, but no standard Z-Wave configuration parameters are exposed for them in the official driver definitions (OpenZWave, Z-Wave JS).

## Association Groups
| Group ID | Name | Max Nodes | Description |
| :--- | :--- | :--- | :--- |
| 1 | Lifeline | 1 (or 5) | Reports Device Reset Locally, Thermostat Mode, Thermostat Setpoint, Sensor Multilevel, and Thermostat Operating State. |

## Resources
- **Manual:** [Z-Wave Alliance Product Manual](https://products.z-wavealliance.org/ProductManual/File?folder=&filename=MarketCertificationFiles/1603/INS_STZW402_1215_EN.pdf)
