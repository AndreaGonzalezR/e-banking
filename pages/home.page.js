import BasePage from '../pages/base.page';

class HomePage extends BasePage{

    get welcomeUser(){return $('.active')}
    get userMenuButton(){return $('.user-area dropdown')}
    get logoutMenuOption(){return $('Logout')}
    
}

export default new HomePage();
