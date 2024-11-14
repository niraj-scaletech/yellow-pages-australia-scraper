# Yellow Pages Australia Scraper

## Overview

The **Yellow Pages Australia Scraper (Product Details)** automates the extraction of essential business information directly from Yellow Pages Australia's website. This tool is designed to collect details like business name, address, contact information, website, and more from individual business listings on Yellow Pages Australia.

## **Extracted Data Fields**

| **Field**              | **Description**                                                               |
|------------------------|-------------------------------------------------------------------------------|
| **Url**                | URL of the Yellow Pages Australia business listing.                           |
| **Listing_ID**         | Unique identifier for the listing, used internally by Yellow Pages.           |
| **Business_name**      | Name of the business as listed on Yellow Pages.                               |
| **Department**         | Specific department or type of service provided by the business.              |
| **Address**            | Full address of the business.                                                 |
| **Latitude**           | Latitude coordinate for the business location.                                |
| **Longitude**          | Longitude coordinate for the business location.                               |
| **Telephone**          | Contact phone number for the business.                                        |
| **Email**              | Email address for contacting the business, if available.                      |
| **Website**            | Official website URL for the business, if available.                          |
| **Opening_hours**      | Operating hours of the business.                                              |
| **ABN**                | Australian Business Number (ABN) of the business, if available.               |
| **ACN**                | Australian Company Number (ACN) of the business, if available.                |
| **Number_of_employees**| Number of employees working in the business, if available.                    |
| **Established**        | Year the business was established.                                            |
| **Also_trade_as**      | Alternative names or aliases under which the business also operates.          |


## Input Parameters

- **Business listing page URLs**:  
    A list of Yellow Pages Australia business listing URLs (one per line) to scrape detailed business information.

  **Example**:  
    - https://www.yellowpages.com.au/act/canberra-city/armageddon-pest-control-1000002896434-listing.html
    - https://www.yellowpages.com.au/act/fyshwick/air-plant-sales-pty-ltd-12250854-listing.html
    - https://www.yellowpages.com.au/act/crace/p1-plumbing-electrical-canberra-15548966-listing.html

## How to Use

1. **Step 1**: Click `Try it!`
2. **Step 2**: Enter business listing page URLs (input ONE URL per line)
3. **Step 3**: Click the `Submit` button to start the scraping process.


## Sample Data Preview

| **Url**                          | **Listing_ID** | **Business_name**                 | **Department**            | **Address**                     | **Latitude** | **Longitude** | **Telephone**    | **Email**                          | **Website**                      | **Opening_hours**     | **ABN**        | **ACN**       | **Number_of_employees**  | **Established** | **Also_trade_as** |
|----------------------------------|----------------|-----------------------------------|---------------------------|---------------------------------|--------------|---------------|------------------|------------------------------------|----------------------------------|-----------------------|----------------|---------------|--------------------------|-----------------|-------------------|
| https://www.yellowpages.com.au...| N/A            | Armageddon Pest Control           | Pest Control              | N/A                             | N/A          | N/A           | (02) 6231 2677   | support@armageddon.com.au          | https://armageddon.com.au/       | Mon: 8:00am-5:00pm... | 77503468387    | N/A           | 1-10                     | 1996            | Armageddon        |
| https://www.yellowpages.com.au...| 12250854       | Air Plant Sales Pty Ltd           | Air Compressors           | 4 Geelong St, Fyshwick ACT 2609 | -35.332506   | 149.167822    | (02) 6280 6822   | sales@airplantsales.com            | https://www.airplantsales.com/   | Mon: 8:00am-5:00pm... | 17008536810    | 008536810     | N/A                      | N/A             | N/A               |
| https://www.yellowpages.com.au...| 15548966       | P1 Plumbing & Electrical Canberra | Plumbers & Gas Fitters    | Crace ACT 2911                  | -35.20125264 | 149.11201459  | 0437 025 971     | info@p1plumbingandelectrical.com.au| N/A                              | Mon: 24 hours...      | 40605979235    | 605979235     | 11-20                    | 2015            | N/A               |


## Notes

For questions regarding the Yellow Pages Australia Scraper or customization requests, please reach out to our support team.

## Is Scraping Yellow Pages Australia Legal?

Web scraping is generally permitted for publicly accessible, non-personal data. Please ensure compliance with relevant laws and consult legal advice if necessary. Read more about web scraping legality in this [article](#).

