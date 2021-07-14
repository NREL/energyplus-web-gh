
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
}