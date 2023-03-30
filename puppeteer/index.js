const puppeteer=require('puppeteer');

const initializePuppeteer=async()=>{
 const browser=await puppeteer.launch({
    headless:false,
    defaultViewport:false,
    userDataDir:'./temp'
    
 });
  const page=await browser.newPage();
await page.goto('https://www.amazon.com/s?k=gaming+hats&pd_rd_r=c554cab5-44f6-4b28-b212-e9582bfd951b&pd_rd_w=4n2iv&pd_rd_wg=42nRP&pf_rd_p=09483392-9ac6-434a-a3d7-39d83662f54a&pf_rd_r=623EV31FF8DN7B28Z96J&ref=pd_gw_unk');
await browser.close();
}

initializePuppeteer();