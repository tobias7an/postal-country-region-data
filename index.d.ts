declare module 'postal-country-region-data' {
    export interface Region {
        name: string;
        shortCode: string;
        addressText: string;
        paypalCode: string;
    }

    export interface Country {
        countryName: string;
        countryShortCode: string;
        regions: Region[];
    }

    const postalCountryRegionData: Country[];

    export default postalCountryRegionData;
}
