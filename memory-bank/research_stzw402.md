# Stelpro STZW402+ (Ki Thermostat) Z-Wave Specifications

## Device Identification
- **Manufacturer:** Stelpro
- **Manufacturer ID:** `0x0239` (Decimal: 569)
- **Product Type ID:** `0x0001`
- **Product ID:** `0x0001`
- **Z-Wave Alliance ID:** 1603

## Supported Command Classes
Confirmed via SmartThings driver fingerprint (`0x5E,0x86,0x72,0x40,0x43,0x31,0x85,0x59,0x5A,0x73,0x20,0x42`):
- `0x5E` COMMAND_CLASS_ZWAVEPLUS_INFO (V2)
- `0x86` COMMAND_CLASS_VERSION (V2)
- `0x72` COMMAND_CLASS_MANUFACTURER_SPECIFIC (V2)
- `0x5A` COMMAND_CLASS_DEVICE_RESET_LOCALLY (V1)
- `0x73` COMMAND_CLASS_POWERLEVEL (V1)
- `0x20` COMMAND_CLASS_BASIC (V1)
- `0x40` COMMAND_CLASS_THERMOSTAT_MODE (V2)
    - Supported Modes: Heat, Energy Save Heat (Eco)
    - Note: Off mode is not supported by the device hardware (it's always on), though some drivers simulate it.
- `0x43` COMMAND_CLASS_THERMOSTAT_SETPOINT (V2)
    - Setpoint Type: Heating 1
- `0x42` COMMAND_CLASS_THERMOSTAT_OPERATING_STATE (V1)
    - States: Idle, Heating
- `0x31` COMMAND_CLASS_SENSOR_MULTILEVEL (V5)
    - Reports: Air Temperature
    - Accepts: External Temperature (via `SENSOR_MULTILEVEL_REPORT` sent TO the device)
- `0x85` COMMAND_CLASS_ASSOCIATION (V2)
- `0x59` COMMAND_CLASS_ASSOCIATION_GRP_INFO (V1)

**NOT Supported:**
- COMMAND_CLASS_METER (No power measurement)
- COMMAND_CLASS_PROTECTION (No keypad lock)
- COMMAND_CLASS_CONFIGURATION (No configuration parameters)

## Configuration Parameters
The Stelpro STZW402+ **does not support the Configuration Command Class**. 
- There are **NO** Z-Wave configuration parameters.
- **Temperature Format** (C/F) is handled via the `THERMOSTAT_SETPOINT` command class or local menu.
- **Outdoor Temperature Display:** The device can display an outdoor temperature if a Z-Wave controller sends a `SENSOR_MULTILEVEL_REPORT` to it.

## Association Groups
| Group ID | Name | Max Nodes | Description |
| :--- | :--- | :--- | :--- |
| 1 | Lifeline | 5 | Reports Device Reset Locally, Thermostat Mode, Thermostat Setpoint, Sensor Multilevel, and Thermostat Operating State. |

## Resources
- **Manual:** [Z-Wave Alliance Product Manual](https://products.z-wavealliance.org/ProductManual/File?folder=&filename=MarketCertificationFiles/1603/INS_STZW402_1215_EN.pdf)
- **SmartThings Driver:** [Source Code](https://raw.githubusercontent.com/SmartThingsCommunity/SmartThingsPublic/master/devicetypes/stelpro/stelpro-ki-thermostat.src/stelpro-ki-thermostat.groovy)
