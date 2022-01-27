const PAGE_TIMEOUT = 10000
export default class BasePage{
    
    /**
     * Open page
     * @param{String} route to get access
     * 
     */

    async open(url) {

        await browser.url(url);

    }

    /**
     * Wait for an element to be clickable and click it
     * @param{Object} element to click
     */

    async clickElement(element){

        await element.waitForClickable({ timeout: PAGE_TIMEOUT });
        await element.click();

    }

    /**
     * Method for sending text to an element
     * @param{Object} element that will receive the text
     * @param{String} text to send
     * 
     */

     async emptyFieldAndSendText(element, text){
        await element.waitForClickable({ timeout: PAGE_TIMEOUT });
        await element.setValue(text);
   }
}
