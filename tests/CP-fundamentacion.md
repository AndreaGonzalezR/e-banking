# Test cases in the Login of Digital Bank

### Test case 1: **Should login successfully**

This test case aims to verify that when the user introduces the correct credentials in the Login form of Digital Bank, is redirected to the Home Page.

In this case the correct credentials to login are the following:

* Username: jsmith@demo.io

* Password: Demo123!

The result of this test case is that the user can access to the Digital Bank Home Page.


### Test case 2: **Should login successfully with Remember me chechbox selected**

In this test case the correct credentials are introduced but now the "Remember me" checkbox is selected.

The aim of this test is to verify that is possible to access the Home Page if the checkbox mentioned before is checked.

In this case the correct credentials to login are the following:

* Username: jsmith@demo.io

* Password: Demo123!

The obtained result is that it is possible to access to the Digital Bank site given the previous conditions.


### Test case 3: **Should not login with invalid username and correct password**

In this test case the objective is to verify that it is not possible to Login with a different password than Demo123! even though the username is correct.

In order to run this test case, the following valid username was introduced in the Login form, with the invalid password:

* Username: andrea@demo.io

* Password: Demo123!

The result is that it is impossible to access the web site Home Page with these credentials and an error message is displayed.


### Test case 4: **Should not login with correct username and invalid password**

This test case consists of introducing the correct username with a incorrect password 

* Username: jsmith@demo.io

* Password: Demo

The obtained result is an error message and it is not possible to access the Home Page of Digital Bank.


### Test case 5: **Should not login with empty credential**

This test case consists of trying to access the Home Page of Digital Bank with empty credentials 

* Username: ''
* Password: ''

The expected result is an error message and it is not possible to access the Home Page of Digital Bank.


### Test case 6: **Should not login with empty username and correct password**

The aim of this test case is try to verify if it is possible to access the Home Page of Digital Bank with empty Username and the correct password, with the following credentials:

* Username: ''
* Password: Demo123!

The obteined result is that the user can not access the Home Page of Digital Bank.


### Test case 7: **Should not login with correct username and empty password**

The aim of this test case is try to verify if it is possible to access the Home Page of Digital Bank with valid Username and empty password, with the following credentials:

* Username: jsmith@demo.io
* Password: ''

The obteined result is that the user can not access the Home Page of Digital Bank.


### Test case 8: **Should not login with empty username and incorrect password**

The aim of this test case is try to verify if it is possible to access the Home Page of Digital Bank with empty Username and invalid password, with the following credentials:

* Username: ''
* Password: Demo

The obteined result is that the user can not access the Home Page of Digital Bank.


### Test case 9: **Should not login with incorrect username and empty password**

The aim of this test case is to verify if it is possible to access the Home Page of Digital Bank with invalid Username and empty password, with the following credentials:

* Username: andrea@demo.io
* Password: ''

The obteined result is that the user can not access the Home Page of Digital Bank, and an error message is displayed.



