import LoginPage from '../pages/login.page';
import HomePage from '../pages/home.page';

describe('Test Logout', async () => {

    it('Should login and logout successfully', async () => {

        await LoginPage.open('login');
        await LoginPage.loginAs('jsmith@demo.io', 'Demo123!');
        await expect(HomePage.welcomeUser).toHaveTextContaining('Welcome Josh');
        
        
    });



});