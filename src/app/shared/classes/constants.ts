
type Version = `EnergyPlus ${number}.${number}.${number}`;
export type ReleaseItem = {
    version: Version,
    url: string,
};

export type ReferenceItem = {
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

export type Regions = {
    region: string,
    region_name: string,
    countries: Countries[],
};

export type Countries = {
    acronym: string,
    name: string,
    locations: Locations[],
};

export type Locations = {
    title: string,
    region: string,
    country: string,
    state_route: string,
    state_name: string,
    epw: string,
    ddy: string,
    stat: string,
    mos: string,
    all: string
};
