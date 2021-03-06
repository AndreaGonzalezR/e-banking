//const { assert } = require("console");


import LoginPage from '../pages/login.page';
import HomePage from '../pages/home.page';

describe ('TestLogin', async () => {

    it('Should login successfully', async () => {

        await LoginPage.open('login');
        await LoginPage.loginAs('jsmith@demo.io', 'Demo123!');
        await expect(HomePage.welcomeUser).toHaveTextContaining('Welcome Josh');
        
    });

    it('Should login successfully with Remember me chechbox selected', async () => {

        await LoginPage.open('login');
        await LoginPage.selectRememberMe();
        await LoginPage.loginAs('jsmith@demo.io', 'Demo123!');
        await expect(HomePage.welcomeUser).toHaveTextContaining('Welcome Josh');
        
    });

    it ('Should not login with invalid username and correct password', async () => {

        await LoginPage.open('login');
        await LoginPage.loginAs('andrea@demo.io', 'Demo123!');
        await expect(LoginPage.statusMessage).toHaveTextContaining('Error');
        
    });

    it ('Should not login with correct username and invalid password', async () => {
       
        await LoginPage.open('login');
        await LoginPage.loginAs('jsmith@demo.io', 'Demo');
        await expect(LoginPage.statusMessage).toHaveTextContaining('Error');
        
    });

    it('Should not login with empty credentials', async () => {

        await LoginPage.open('login');
        await LoginPage.loginAs('', '');
        await expect(LoginPage.statusMessage).toHaveTextContaining('Error');

    });
  
    it('Should not login with empty username and correct password', async () => {

        await LoginPage.open('login');
        await LoginPage.loginAs('', 'Demo123!');
        await expect(LoginPage.statusMessage).toHaveTextContaining('Error');

    });

    it('Should not login with correct username and empty password', async () => {

        await LoginPage.open('login');
        await LoginPage.loginAs('jsmith@demo.io', '');
        await expect(LoginPage.statusMessage).toHaveTextContaining('Error');

    });

    it('Should not login with empty username and incorrect password', async () => {

        await LoginPage.open('login');
        await LoginPage.loginAs('', 'Demo');
        await expect(LoginPage.statusMessage).toHaveTextContaining('Error');

    });

    it('Should not login with incorrect username and empty password', async () => {

        await LoginPage.open('login');
        await LoginPage.loginAs('andrea@demo.io', '');
        await expect(LoginPage.statusMessage).toHaveTextContaining('Error');

    });

});

