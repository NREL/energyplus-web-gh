import { ReleaseItem, CurrentRelease } from './constants';

export const releases: ReleaseItem[] = [{
  version: 'EnergyPlus 8.2.0',
  url: 'https://github.com/NREL/EnergyPlus/releases/tag/v8.2.0-Update-1.2'
}, {
  version: 'EnergyPlus 8.3.0',
  url: 'https://github.com/NREL/EnergyPlus/releases/tag/v8.3.0'
}, {
  version: 'EnergyPlus 8.4.0',
  url: 'https://github.com/NREL/EnergyPlus/releases/tag/v8.4.0-Update1'
}, {
  version: 'EnergyPlus 8.5.0',
  url: 'https://github.com/NREL/EnergyPlus/releases/tag/v8.5.0'
}, {
  version: 'EnergyPlus 8.6.0',
  url: 'https://github.com/NREL/EnergyPlus/releases/tag/v8.6.0'
}, {
  version: 'EnergyPlus 8.7.0',
  url: 'https://github.com/NREL/EnergyPlus/releases/tag/v8.7.0'
}, {
  version: 'EnergyPlus 8.8.0',
  url: 'https://github.com/NREL/EnergyPlus/releases/tag/v8.8.0'
}, {
  version: 'EnergyPlus 8.9.0',
  url: 'https://github.com/NREL/EnergyPlus/releases/tag/v8.9.0'
}, {
  version: 'EnergyPlus 9.0.1',
  url: 'https://github.com/NREL/EnergyPlus/releases/tag/v9.0.1'
}, {
  version: 'EnergyPlus 9.1.0',
  url: 'https://github.com/NREL/EnergyPlus/releases/tag/v9.1.0'
}, {
  version: 'EnergyPlus 9.2.0',
  url: 'https://github.com/NREL/EnergyPlus/releases/tag/v9.2.0'
}, {
  version: 'EnergyPlus 9.3.0',
  url: 'https://github.com/NREL/EnergyPlus/releases/tag/v9.3.0'
}, {
  version: 'EnergyPlus 9.4.0',
  url: 'https://github.com/NREL/EnergyPlus/releases/tag/v9.4.0'
}, {
  version: 'EnergyPlus 9.5.0',
  url: 'https://github.com/NREL/EnergyPlus/releases/tag/v9.5.0'
}, {
  version: 'EnergyPlus 9.6.0',
  url: 'https://github.com/NREL/EnergyPlus/releases/tag/v9.6.0'
}, {
  version: 'EnergyPlus 22.1.0',
  url: 'https://github.com/NREL/EnergyPlus/releases/tag/v22.1.0'
}, {
  version: 'EnergyPlus 22.2.0',
  url: 'https://github.com/NREL/EnergyPlus/releases/tag/v22.2.0'
}, {
  version: 'EnergyPlus 23.1.0',
  url: 'https://github.com/NREL/EnergyPlus/releases/tag/v23.1.0'  
}, {
  version: 'EnergyPlus 23.2.0',
  url: 'https://github.com/NREL/EnergyPlus/releases/tag/v23.2.0'  
}, {
  version: 'EnergyPlus 24.1.0',
  url: 'https://github.com/NREL/EnergyPlus/releases/tag/v24.1.0'  
}];

export const latestRelease: CurrentRelease = {
  version: '24.2.0',
  date: 'September 30, 2024',
  mac13_arm: 'https://github.com/NREL/EnergyPlus/releases/download/v24.2.0a/EnergyPlus-24.2.0-94a887817b-Darwin-macOS13-arm64.dmg',
  mac12: 'https://github.com/NREL/EnergyPlus/releases/download/v24.2.0a/EnergyPlus-24.2.0-94a887817b-Darwin-macOS12.1-x86_64.dmg',
  windows_main: 'https://github.com/NREL/EnergyPlus/releases/download/v24.2.0a/EnergyPlus-24.2.0-94a887817b-Windows-x86_64.exe',
  ubuntu_22: 'https://github.com/NREL/EnergyPlus/releases/download/v24.2.0a/EnergyPlus-24.2.0-94a887817b-Linux-Ubuntu22.04-x86_64.run',
  ubuntu_24: 'https://github.com/NREL/EnergyPlus/releases/download/v24.2.0a/EnergyPlus-24.2.0-94a887817b-Linux-Ubuntu24.04-x86_64.run'
}
