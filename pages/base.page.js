const PAGE_TIMEOUT = 10000
export default class BasePage{
    
    /**
     * Abrir pagina
     * @param{String} ruta a la cual acceder
     * 
     */

    async open(url) {

        await browser.url(url);

    }

    /**
     * Esperar a que un elemento sea clickeble y hacer click
     * @param{Object} elemento a clickear
     */

    async clickElement(element){

        await element.waitForClickable({ timeout: PAGE_TIMEOUT });
        await element.click();

    }

    /**
     * Metodo para enviar texto a un elemento
     * @param{Object} elemento que recibira el texto
     * @param{String} texto a enviar
     * 
     */

    async emptyFieldAndSendText(element, text){

        await element.waitForClickable({ timeout: PAGE_TIMEOUT });
        await element.clearValue();
        await element.click();
        await element.keys(text);

    }

}
