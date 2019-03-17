
const LoginPage = require('../pages/login-page');
const HomePage = require('../pages/home-page');
const CreateAnAccountPage = require('../pages/create-account-page');
const AccountPage = require('../pages/account-page');

describe('Since I accessed the page to create an account', function(){

   const login_page = new LoginPage();
   const home_page = new HomePage();
   const create_account = new CreateAnAccountPage();
   const account_page = new AccountPage();

    beforeEach(function(){
     browser.get(login_page.path);
     home_page.access_sign_in();

    });

    afterAll(function(){
      home_page.button_signout_is_visible();
     });

      cenario = {
                 first_name: 'First user Test',
                 last_name:'Last user test',
                 password:'teste12345',
                 address:'Test Address', 
                 city:'Recife', 
                 state:'Alabama',
                 zipcode:'00000', 
                 country:'United States',
                 phone_mobile:'81999999999', 
                 address_alias:'Test Address Alias', 
                 email_test_error:'test22_mcsj@teste.com',
                 email_register: 'test43S_mcsj@teste.com'
                };

      it('when I fill in the First Name with special character', function(){
      
        login_page.create_an_account(cenario.email_test_error);
        create_account.fill_in_required_fields('First_Name', cenario.last_name, cenario.password, cenario.address, cenario.city, cenario.state, cenario.zipcode, cenario.country, cenario.phone_mobile, cenario.address_alias);
        create_account.register_click_on();
        
        expect(create_account.alert.getText()).toContain('There is 1 error');  
        expect(create_account.error.getText()).toEqual('firstname is invalid.');
      });

      it('when I fill in the First Name with numerical values', function(){
      
        login_page.create_an_account(cenario.email_test_error);
        create_account.fill_in_required_fields('First1', cenario.last_name, cenario.password, cenario.address, cenario.city, cenario.state, cenario.zipcode, cenario.country, cenario.phone_mobile, cenario.address_alias);
        create_account.register_click_on();
       
        expect(create_account.alert.getText()).toContain('There is 1 error');  
        expect(create_account.error.getText()).toEqual('firstname is invalid.'); 
      });

      it('when I fill in the First Name with blank value', function(){
      
        login_page.create_an_account(cenario.email_test_error);
        create_account.fill_in_required_fields('', cenario.last_name, cenario.password, cenario.address, cenario.city, cenario.state, cenario.zipcode, cenario.country, cenario.phone_mobile, cenario.address_alias);
        create_account.register_click_on();
       
        expect(create_account.alert.getText()).toContain('There is 1 error');  
        expect(create_account.error.getText()).toEqual('firstname is required.'); 
      });

});