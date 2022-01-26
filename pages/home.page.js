import BasePage from '../pages/base.page';

class HomePage extends BasePage{

    get welcomeUser(){return $('.active')}

    async getWelcomeUserText(){

        this.welcomeUser().getText();

    }

}

export default new HomePage();