const puppeteer = require('puppeteer')

let apiGoogleTranslate = async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
  
    var url = `https://translate.google.com.br/?sl=pt&tl=en&text=${encodeURIComponent('text')}&op=translate`;
    await page.goto(url)
    await page.waitForTimeout(10000);
    
    const result = await page.evaluate(() => {
      return document.getElementsByClassName('NqnNQd')[0].innerText;
    })
  
    browser.close()
    return result
}
apiGoogleTranslate().then((value) => {
    console.log(value)
})
