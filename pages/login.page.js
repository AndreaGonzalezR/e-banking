import BasePage from '../pages/base.page';

class LoginPage extends BasePage{

    get userNameInput(){return $('#username')}
    get passWordInput(){return $('#password')}
    get loginButton(){return $('#submit')}
    get rememberMe(){return $('#remember-me')}
    get statusMessage(){return $('.badge')}

    async loginAs(userName, passWord){

        await this.userNameInput.setValue(userName);
        await this.passWordInput.setValue(passWord);
        await this.loginButton.click();

    }

    async selectRememberMe(){
        
        await this.rememberMe.click();

    }
}

export default new LoginPage();