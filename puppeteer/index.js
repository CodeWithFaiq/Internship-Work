const puppeteer=require('puppeteer');

const initializePuppeteer=async()=>{

const browser=await puppeteer.launch({
   defaultViewport:false,
   headless:false,
   userDataDir:'./temp'
})

const page=await browser.newPage();
await page.goto('https://www.amazon.com/b?node=16225009011&pf_rd_r=MSYCE46GSKDSY4W66TYS&pf_rd_p=5232c45b-5929-4ff0-8eae-5f67afd5c3dc&pd_rd_r=d29645e3-9d44-484a-9238-155c32475194&pd_rd_w=wuzgp&pd_rd_wg=gQxkG&ref_=pd_gw_unk');
 const data=await page.$$('h2');
for(let i=0;i<data.length;i++){
   let element=data[i];
   let text=await page.evaluate(ele=>ele.textContent,element);
   console.log(text);
}
await browser.close();

}

initializePuppeteer();