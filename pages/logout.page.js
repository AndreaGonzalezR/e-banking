import BasePage from '../pages/base.page';

class LogoutPage extends BasePage{

    //page locators:
    get userMenu(){return $('.user-avatar')}
    get logoutOption(){return $('=Logout')}
    get logoutSuccess(){return $('.badge')}


    //page actions:
    async logout(){

        await this.userMenu.click();
        await this.logoutOption.click();

    }

}

export default new LogoutPage();