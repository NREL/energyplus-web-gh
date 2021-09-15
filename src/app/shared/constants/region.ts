export const allRegions = [
  'africa_wmo_region_1',
  'asia_wmo_region_2',
  'south_america_wmo_region_3',
  'north_and_central_america_wmo_region_4',
  'southwest_pacific_wmo_region_5',
  'europe_wmo_region_6'
] as const;

export type Region = typeof allRegions[number];

export const Regions: { [key in Region]: string } = {
  africa_wmo_region_1: 'Africa (WMO Region 1)',
  asia_wmo_region_2: 'Asia (WMO Region 2)',
  south_america_wmo_region_3: 'South America (WMO Region 3)',
  north_and_central_america_wmo_region_4: 'North and Central America (WMO Region 4)',
  southwest_pacific_wmo_region_5: 'Southwest Pacific (WMO Region 5)',
  europe_wmo_region_6: 'Europe (WMO Region 6)'
} as const;
