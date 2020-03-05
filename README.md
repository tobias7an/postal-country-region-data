# postal-country-region-data

Fork of [country-region-data](https://github.com/country-regions/country-region-data) by Ben Keen. This fork focuses on state/country data for postal/shipping addresses.
 
This dataset is heavily modified fromo the original repo. It omits region information not used in addressing, and adds text and codes for use in addresses and APIs. 

Data is specifically structured for use in drop-down forms and validation functions targetting submission to shipping and payment APIs.

Data is cross-referenced between [ISO3166-2](https://en.wikipedia.org/wiki/ISO_3166-2), [Frank's Compulsive Guide to Postal Addresses](http://www.columbia.edu/~fdc/postal/), the [Universal Postal Union Postal Addressing Systems Database](http://www.upu.int/en/activities/addressing/postal-addressing-systems-in-member-countries.html), and [Paypal Developer Documentation - State & Province Codes](https://developer.paypal.com/docs/api/reference/state-codes).

This dataset may not be 100% accurate, complete or up to date, but aims to be sufficiently complete for production use and preferable to available alternatives.  

### Editing
1. Install with `npm install`
2. Edit data in `data.json`
3. Validate JSON with `npm run test`
4. Regenerate `data.js` file using `npm run umdify`

### Changelog
- `2.0.5` - Mar 5, 2020. Changed US Minor Outlying Islands to being a US region per UPU.
- `2.0.4` - Oct 7, 2019. Add lithuania, rearrange ivory coast.
- `2.0.2` - Oct 3, 2019. Removal of territories with postal administration under different country names. Removal of accents and brackets in country names for greater compatbility with APIs.
- `2.0.1` - Oct 2, 2019. Regions not used in postal addressing removed. Paypal state codes added per API documentation. Region address text strings added for relevant countries per UPU. US and French outlying territories that use respective domestic mail services removed from country list. Uninhabited regions removed from country list.     
- `1.5.0` - Oct 1, 2019. Forked from [country-region-data](https://github.com/country-regions/country-region-data) v1.5.0    

### License
MIT.