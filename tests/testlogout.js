import LoginPage from '../pages/login.page';
import HomePage from '../pages/home.page';
import LogoutPage from '../pages/logout.page';
//import { expect } from 'chai';

describe ('TestLogout', async () => {

    it('Should login and logout successfully', async () => {

        await LoginPage.open('login');
        await LoginPage.loginAs('jsmith@demo.io', 'Demo123!');
        await expect(HomePage.welcomeUser).toHaveTextContaining('Welcome Josh');
        
        await LogoutPage.logout();

    });

});