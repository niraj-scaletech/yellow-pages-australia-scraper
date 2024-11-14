import { apikey, sequence_id } from "./config";
import { browser } from "@crawlora/browser";
import { Page } from "puppeteer-extra-plugin/dist/puppeteer";

export default async function ({
  urls,
}: {
  urls: string;
}) {
  const formedData = urls.trim().split("\n").map(v => v.trim());

  await browser(async ({ page, wait, output, debug }) => {
    for await (const url of formedData) {
      await page.goto(url, { waitUntil: 'domcontentloaded' });

      debug(`Navigating to: ${url}`);

      await wait(2)

      const details = await extractProductDetails(page)
      console.log("🚀 ~ forawait ~ details:", details);

      await output.create({
        sequence_id,
        sequence_output: { ...details, Url: url }
      })
    }
  }, { apikey })

}


export async function extractProductDetails(page: Page) {
  return await page.evaluate(() => {
    const getTextContent = (element: Document | Element | null, selector: string) =>
      element?.querySelector(selector)?.textContent?.trim() || 'N/A';

    const getAttribute = (element: Document | Element | null, selector: string, attribute: string) =>
      element?.querySelector(selector)?.getAttribute(attribute)?.trim() || 'N/A';

    const contactDetails = document.querySelector('div.contact-details');

    const rawOpeningHourText = document.querySelector('div.opening-hours-all-days')
      ?.textContent?.replace(/[\n\t\s]+/g, '')?.trim() || 'N/A';

    const openingHours = rawOpeningHourText !== 'N/A'
      ? Array.from(rawOpeningHourText.matchAll(/(Mon|Tue|Wed|Thu|Fri|Sat|Sun)(24hours|[0-9:apm-]+-[0-9:apm]+|[^MonTueWedThuFriSatSun]*)/g))
        .reduce((acc, [_, day, hours]) => {
          const cleanedHours = hours.trim();
          const formattedHours = cleanedHours === "24hours" ? "24 hours"
            : /^[0-9:apm-]+-[0-9:apm]+$/.test(cleanedHours) ? cleanedHours
              : "Closed";
          return { ...acc, [day]: formattedHours };
        }, {})
      : 'N/A';

    const formattedOpeningHours = openingHours !== 'N/A'
      ? Object.entries(openingHours)
        .map(([day, hours]) => `${day}: ${hours}`)
        .join(', ')
      : 'N/A';

    return {
      Listing_ID: getAttribute(contactDetails, 'div.listing-address', 'data-listing-id'),
      Business_name: getTextContent(contactDetails, 'h1 .listing-name'),
      Department: getTextContent(contactDetails, 'h2.listing-heading'),
      Address: getTextContent(contactDetails, 'div.listing-address'),
      Latitude: getAttribute(contactDetails, 'div.listing-address', 'data-geo-latitude'),
      Longitude: getAttribute(contactDetails, 'div.listing-address', 'data-geo-longitude'),
      Telephone: getTextContent(document, 'div.contacts .desktop-display-value'),
      Email: getAttribute(document, 'div.contacts [data-email]', 'data-email'),
      Website: (document.querySelector('div.contacts .contact-url') as HTMLAnchorElement)?.href || 'N/A',
      Opening_hours: formattedOpeningHours,
      ABN: getTextContent(document, 'dd.abn').replace(/[\t\s]+/g, ''),
      ACN: getTextContent(document, 'dd.acn').replace(/[\t\s]+/g, ''),
      Number_of_employees: getTextContent(document, 'dd.number-of-employees'),
      Established: getTextContent(document, 'dd.established'),
      Also_trade_as: getTextContent(document, 'dd.trading-aliases'),
    }
  })
}