import BasePage from '../pages/base.page';

class HomePage extends BasePage{

    get welcomeUser(){return $('.active')}
    
}

export default new HomePage();