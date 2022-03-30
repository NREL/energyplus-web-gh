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
}];

export const latestRelease: CurrentRelease = {
  version: '22.1.0',
  date: 'March 31, 2022',
  mac: 'https://github.com/NREL/EnergyPlus/releases/download/v22.1.0/EnergyPlus-22.1.0-ed759b17ee-Darwin-macOS10.15-x86_64.dmg',
  windows_main: 'https://github.com/NREL/EnergyPlus/releases/download/v22.1.0/EnergyPlus-22.1.0-ed759b17ee-Windows-x86_64.exe',
  windows_32: 'https://github.com/NREL/EnergyPlus/releases/download/v22.1.0/EnergyPlus-22.1.0-ed759b17ee-Windows-i386.exe',
  ubuntu_main: 'https://github.com/NREL/EnergyPlus/releases/download/v22.1.0/EnergyPlus-22.1.0-ed759b17ee-Linux-Ubuntu20.04-x86_64.run',
  ubuntu_18: 'https://github.com/NREL/EnergyPlus/releases/download/v22.1.0/EnergyPlus-22.1.0-ed759b17ee-Linux-Ubuntu18.04-x86_64.run'
}
