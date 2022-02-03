import LoginPage from '../pages/login.page';
import HomePage from '../pages/home.page';
import LogoutPage from '../pages/logout.page';

describe ('TestLogout', async () => {

    beforeEach(async () => {

        await LoginPage.open('login');
        await LoginPage.loginAs('jsmith@demo.io', 'Demo123!');

    });

    it('Should logout successfully', async () => {
        
        await LogoutPage.logout();

        await expect(LogoutPage.logoutSuccess).toHaveTextContaining('Success');
        

    });

    

});