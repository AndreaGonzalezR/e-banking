//const { assert } = require("console");
//const { default: $ } = require("webdriverio/build/commands/browser/$");

describe ('TestLogin', () => {

   
    it('Login  with correct username and correct password', async () => {

        var expect = require('chai').expect;

        await browser.url('');
        
        let username = await $('[id = "username"]');
        await username.setValue('jsmith@demo.io');
        
        let password = await $('[id = "password"]');
        await password.setValue('Demo123!');
        
        let submit = await $('[id = "submit"]');
        await submit.click();
        
        await expect(await $('#menuToggle')).to.exist; 
        
    });
    

    
    it ('Log in with incorrect username and correct password', async () => {

        var expect = require('chai').expect;

        await browser.url('');
        
        let username = await $('[id = "username"]');
        await username.setValue('andrea@demo.io');

        let password = await $('[id = "password"]');
        await password.setValue('Demo123!');
        
        let submit = await $('[id = "submit"]');
        await submit.click();

        await expect(await $('badge badge-pill badge-danger')).to.exist;
        
    });

    
    it ('Log in with correct username and incorrect password', async () => {

        var expect = require('chai').expect;

        await browser.url('');

        let username = await $('[id = "username"]');
        await username.setValue('jsmith@demo.io');

        let password = await $('[id = "password"]');
        await password.setValue('Abc');

        let submit = await $('[id = "submit"]');
        await submit.click();

        await expect(await $('badge badge-pill badge-danger')).to.exist;
        
    });
    
    
    it('Login with correct credentials and Remember me chechbox', async () => {

        var expect = require('chai').expect;

        await browser.url('');

        let username = await $('[id = "username"]');
        await username.setValue('jsmith@demo.io');

        let password = await $('[id = "password"]');
        await password.setValue('Demo123!');

        let elemento = await $('[id = "remember-me"]');
        await elemento.click();

        let submit = await $('[id = "submit"]');
        await submit.click();

        await expect(await $('#menuToggle')).to.exist; 

    });
    

});