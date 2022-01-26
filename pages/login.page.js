import BasePage from '../pages/base.page';

class LoginPage extends BasePage{

    get userNameInput(){return $('#username')}
    get passWordInput(){return $('#password')}
    get loginButton(){return $('#submit')}
    get rememberMe(){return $('#remember-me')}
    

    async loginAs(userName, passWord){

        await this.userNameInput.setValue(userName);
        await this.passWordInput.setValue(passWord);
        await this.loginButton.click();

    }

    async selectRememberMe(userName, passWord){

        await this.userNameInput.setValue(userName);
        await this.passWordInput.setValue(passWord);
        await this.rememberMe.click();
        await this.loginButton.click();

    }
}

export default new LoginPage();