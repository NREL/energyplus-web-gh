type Version = `${number}.${number}.${number}`;

export type ReleaseItem = {
  version: `EnergyPlus ${Version}`,
  url: string,
};

export type CurrentRelease = {
  version: Version,
  date: string,
  mac12: `${string}.dmg`,
  mac12_arm: `${string}.dmg`,
  mac11: `${string}.dmg`,
  windows_main: `${string}.exe`,
  ubuntu_22: `${string}.run`,
  ubuntu_20: `${string}.run`,
};

export type Reference = {
  id: number;
  title: string,
  authors: string,
  research_org: string,
  publication_date: string,
  source_title: string,
  osti_id: number,
  doi: string,
  url: string,
  description: string,
  resource_type: string, // document_type;
  sponsoring_org: string,
  subject: string,
  volume: string,
  issue: string,
  page_start: number,
  page_end: number
};
