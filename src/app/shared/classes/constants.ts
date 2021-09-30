type Version = `EnergyPlus ${number}.${number}.${number}`;

export type ReleaseItem = {
  version: Version,
  url: string,
};

export type CurrentRelease = {
  version: string,
  date: string,
  mac: string,
  windows_main: string,
  windows_32: string,
  ubuntu_main: string,
  ubuntu_18: string
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
