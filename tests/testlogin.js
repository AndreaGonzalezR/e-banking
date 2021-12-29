const { assert } = require("console");

describe ('TestLogin', () => {

    it('Login  with correct username and correct password', async () => {

        await browser.url('');

        let username = await $('[id = "username"]');
        await username.setValue('smith@demo.io');

        await assert.equal(await username.getValue(), 'jsmith@demo.io', 'Error: no se mostró el texto esperado en la barra de búsqueda');

        let password = await $('[id = "password"]');
        await password.setValue('Demo123!');

        await assert.equal(await password.getValue(), 'Demo123!', 'Error: no se ingreso la password valida');

        let submit = await $('[id = "submit"]');
        await submit.click();

        
        
    });


    it ('Log in with incorrect username and correct password', async () => {

        await browser.url('');
        
        let username = await $('[id = "username"]');
        await username.setValue('andrea@demo.io');

        let password = await $('[id = "password"]');
        await password.setValue('Demo123!');

        let submit = await $('[id = "submit"]');
        await submit.click();

        
        
    });

    
    it ('Log in with correct username and incorrect password', async () => {

        await browser.url('');

        let username = await $('[id = "username"]');
        await username.setValue('jsmith@demo.io');

        let password = await $('[id = "password"]');
        await password.setValue('Abc');

        let submit = await $('[id = "submit"]');
        await submit.click();
        
    });


    it('Login with correct credentials and Remember me chechbox', async () => {

        await browser.url('');

        let username = await $('[id = "username"]');
        await username.setValue('jsmith@demo.io');

        let password = await $('[id = "password"]');
        await password.setValue('Demo123!');

        let elemento = await $('[id = "remember-me"]');
        await elemento.click();

        let submit = await $('[id = "submit"]');
        await submit.click();

    });

});