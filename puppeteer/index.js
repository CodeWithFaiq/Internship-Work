const puppeteer=require('puppeteer');

const initializePuppeteer=async()=>{

const browser=await puppeteer.launch({
   defaultViewport:false,
   headless:false,
   userDataDir:'./temp'
})

const page=await browser.newPage();
await page.goto('https://google.com');
await page.screenshot({path:'Image.png'});
await browser.close();

}

initializePuppeteer();