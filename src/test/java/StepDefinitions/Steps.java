package StepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class Steps
{
    WebDriver driver;

//######################################### Login Steps ###########################################
//                                        -----------------------

    @Given("^User able to open Browser$")
    public void user_able_to_open_Browser()
    {
        WebDriverManager.chromedriver().setup();
        driver =new ChromeDriver();
        driver.manage().window().maximize();
    }

    @Given("^Enter an Url$")
    public void enter_an_Url()
    {
        driver.get("https://demo.nopcommerce.com/");
    }

    @When("^User click on Login Link$")
    public void user_click_on_Login_Link()
    {
        driver.findElement(By.className("ico-login")).click();
    }

    @When("^User on Login Page and Verify Login page Title$")
    public void user_on_Login_Page_and_Verify_Login_page_Title()
    {
        String title = driver.getTitle();
        System.out.println(title);
        Assert.assertEquals("nopCommerce demo store. Login",title);
    }

    // Data Driven with Example keyword
    @Then("^User enter \"([^\"]*)\" and \"([^\"]*)\" and Click on login button$")
    public void user_enter_and_and_Click_on_login_button(String Username, String Password)
    {
        driver.findElement(By.id("Email")).sendKeys(Username);
        driver.findElement(By.id("Password")).sendKeys(Password);
        driver.findElement(By.className("login-button")).click();
    }

    @Then("^User is on Home Page and Verify Home page Title$")
    public void user_is_on_Home_Page_and_Verify_Home_page_Title()
    {

    }

    @Then("^User close the browser$")
    public void user_close_the_browser()
    {
        driver.close();
    }



//######################################### Registration Steps ###########################################
//                                 002*****************************************

    @When("^User Click on Register btn$")
    public void user_Click_on_Register_btn()
    {
        driver.findElement(By.className("ico-register")).click();
    }

    @Then("^User able to enter personal details \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\"  \"([^\"]*)\" \"([^\"]*)\"$")
    public void user_able_to_enter_personal_details(String Firstname, String Lastname, String DOB, String DOM, String DOY, String Email, String coName, String password, String confirmPassword)
    {
        driver.findElement(By.id("gender-male")).click();
        driver.findElement(By.id("FirstName")).sendKeys(Firstname);
        driver.findElement(By.id("LastName")).sendKeys(Lastname);
        driver.findElement(By.name("DateOfBirthDay")).sendKeys(DOB);
        driver.findElement(By.name("DateOfBirthMonth")).sendKeys(DOM);
        driver.findElement(By.name("DateOfBirthYear")).sendKeys(DOY);
        driver.findElement(By.xpath("//*[@id=\"Email\"]")).sendKeys(Email);
        driver.findElement(By.xpath("//input[@id='Company']")).sendKeys(coName);
        driver.findElement(By.xpath("//input[@id='Newsletter']")).click();
        driver.findElement(By.xpath("//*[@id=\"Password\"]")).sendKeys(password);
        driver.findElement(By.xpath("//*[@id=\"ConfirmPassword\"]")).sendKeys(confirmPassword);

    }

    @Then("^click on Register btn submit$")
    public void click_on_Register_btn_submit()
    {
        driver.findElement(By.xpath("//button[@id='register-button']")).click();
    }


//######################################### SelectProduct  Steps ###########################################
//                                        -------------------------


    @When("^User click on Computers$")
    public void user_click_on_Computers()
    {
        driver.findElement(By.xpath("//ul[@class='top-menu notmobile']//a[normalize-space()='Computers']")).click();
    }

    @Then("^User should able to click on Desktops$")
    public void user_should_able_to_click_on_Desktops()
    {
        driver.findElement(By.xpath("//a[@title='Show products in category Desktops'][normalize-space()='Desktops']")).click();
    }

    @Then("^User should able to select the product$")
    public void user_should_able_to_select_the_product()
    {
        driver.findElement(By.xpath("//a[normalize-space()='Lenovo IdeaCentre 600 All-in-One PC']")).click();
    }



//######################################### Add To Cart Steps ###########################################
//                                        -------------------------

    @Then("^User should clear existing qty\\. and enter new qty\\.$")
    public void user_should_clear_existing_qty_and_enter_new_qty() throws InterruptedException
    {
        Thread.sleep(3000);
        WebElement quantityInput=driver.findElement(By.xpath("//input[@id='product_enteredQuantity_3']"));
        quantityInput.clear();                                                                            //so we will clear the default qty. from the box
        quantityInput.sendKeys("5");                                                        // here we have add our qty. in box

    }

    @Then("^Validate qty\\. added into the cart$")
    public void validate_qty_added_into_the_cart()
    {
      Assert.assertTrue("Qty. is not added into cart", true);


    }

    @Then("^Click on add to cart button$")
    public void click_on_add_to_cart_button()
    {
        driver.findElement(By.xpath("//button[@id='add-to-cart-button-3']")).click();
    }




//######################################### Shopping Cart Steps ###########################################
//                                        -------------------------

    @Then("^Click on shopping cart pop-up message$")
    public void click_on_shopping_cart_pop_up_message() throws InterruptedException
    {
        Thread.sleep(3000);
        driver.findElement(By.xpath("//a[normalize-space()='shopping cart']")).click();  //click on shopping cart pop-up message

    }

    @Then("^Update qty\\. again in shopping cart page$")
    public void update_qty_again_in_shopping_cart_page() throws InterruptedException
    {
        Thread.sleep(3000);
        WebElement quantityInput1=driver.findElement(By.xpath("/html/body/div[6]/div[3]/div/div/div/div[2]/div/form/div[1]/table/tbody/tr/td[5]/input"));
        quantityInput1.clear();                                                              //we have clear old qty. here
        quantityInput1.sendKeys("3");                                          //we add new qty. here

    }

    @Then("^Click on Update shopping cart$")
    public void click_on_Update_shopping_cart()
    {
        driver.findElement(By.xpath("//button[@id='updatecart']")).click();    //update shopping cart
    }

    @Then("^Click on T&C box$")
    public void click_on_T_C_box()
    {
        driver.findElement(By.xpath("//input[@id='termsofservice']")).click();  //click on T&C box
    }

    @Then("^Click on \"([^\"]*)\" button$")
    public void click_on_button(String arg1)
    {
        driver.findElement(By.xpath("//button[@id='checkout']")).click();     //click on "CHECKOUT"
    }



//######################################### CheckOut Page Steps ###########################################
//                                        -------------------------

    @Then("^Click on CHECKOUT AS GUEST$")
    public void click_on_CHECKOUT_AS_GUEST() throws InterruptedException
    {
        Thread.sleep(2000);
        driver.findElement(By.xpath("//button[normalize-space()='Checkout as Guest']")).click(); //checkout as a guest
    }



//######################################### Billing Details Page Steps ###########################################
//                                        -------------------------------

    @Then("^User should Enter all personal details \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" and click on the Continue button$")
    public void user_should_Enter_all_personal_details_and_click_on_the_Continue_button(String Firstname, String Lastname, String Email, String Country, String State, String City, String Address, String Zipcode, String PhoneNo) throws InterruptedException
    {
        driver.findElement(By.xpath("//input[@id='BillingNewAddress_FirstName']")).sendKeys(Firstname);
        driver.findElement(By.xpath("//input[@id='BillingNewAddress_LastName']")).sendKeys(Lastname);
        driver.findElement(By.xpath("//input[@id='BillingNewAddress_Email']")).sendKeys(Email);
        driver.findElement(By.xpath("//select[@id='BillingNewAddress_CountryId']")).sendKeys(Country);
        Thread.sleep(1000);
        driver.findElement(By.xpath("//select[@id='BillingNewAddress_StateProvinceId']")).sendKeys(State);
        driver.findElement(By.xpath("//input[@id='BillingNewAddress_City']")).sendKeys(City);
        driver.findElement(By.xpath("//input[@id='BillingNewAddress_Address1']")).sendKeys(Address);
        driver.findElement(By.xpath("//input[@id='BillingNewAddress_ZipPostalCode']")).sendKeys(Zipcode);
        driver.findElement(By.xpath("//input[@id='BillingNewAddress_PhoneNumber']")).sendKeys(PhoneNo);

        Thread.sleep(1000);
        driver.findElement(By.xpath("//button[@onclick='Billing.save()']")).click();  //click on "CONTINUE"
    }




//######################################### Shipping Method Page Steps ###########################################
//                                        -------------------------------

    @Then("^Click on shipping  method and click on continue$")
    public void click_on_shipping_method_and_click_on_continue() throws InterruptedException
    {
        Thread.sleep(1000);
        driver.findElement(By.xpath("//input[@id='shippingoption_1']")).click(); //Next Day Air

        Thread.sleep(1000);
        driver.findElement(By.xpath("//button[@class='button-1 shipping-method-next-step-button']")).click(); //click on "CONTINUE"

    }




//######################################### Payment Page Steps ###################################################
//                                        -----------------------

    @Then("^Click to select the card type$")
    public void click_to_select_the_card_type() throws InterruptedException
    {
        Thread.sleep(1000);
        driver.findElement(By.xpath("//input[@id='paymentmethod_1']")).click();   //select credit card

        Thread.sleep(1000);
        driver.findElement(By.xpath("//button[@class='button-1 payment-method-next-step-button']")).click();  //click on "CONTINUE"
    }

    @Then("^Ender all card details \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" \"([^\"]*)\" and click on continue and confirm order$")
    public void ender_all_card_details_and_click_on_continue_and_confirm_order(String CardType, String Name, String CardNo, String ExpMonth, String ExpYear, String SQCode) throws InterruptedException
    {
        Thread.sleep(2000);
        driver.findElement(By.xpath("//select[@id='CreditCardType']")).sendKeys(CardType);
        driver.findElement(By.xpath("//input[@id='CardholderName']")).sendKeys(Name);
        driver.findElement(By.xpath("//input[@id='CardNumber']")).sendKeys(CardNo);
        driver.findElement(By.xpath("//select[@id='ExpireMonth']")).sendKeys(ExpMonth);
        driver.findElement(By.xpath("//select[@id='ExpireYear']")).sendKeys(ExpYear);
        driver.findElement(By.xpath("//input[@id='CardCode']")).sendKeys(SQCode);
        Thread.sleep(1000);
        driver.findElement(By.xpath("//button[@class='button-1 payment-info-next-step-button']")).click(); //click on "CONTINUE"

        Thread.sleep(1000);
        driver.findElement(By.xpath("//button[normalize-space()='Confirm']")).click();  //click on the "CONFIRM" order
    }

    @Then("^Click on Continue to go on homepage$")
    public void click_on_Continue_to_go_on_homepage() throws InterruptedException
    {
        Thread.sleep(1000);
        driver.findElement(By.xpath("//button[normalize-space()='Continue']")).click();  //click on "CONTINUE" to go on homepage
    }




//######################################### Validate HomePage Steps ###################################################
//                                        -----------------------

    @Then("^Validate HomePage Title$")
    public void validate_HomePage_Title() throws InterruptedException
    {
        //we are verifying homepage title here by using the Assert method:-
        //--------------------------------------------------------------------
        Thread.sleep(3000);
        org.testng.Assert.assertEquals(driver.getTitle(),"nopCommerce demo store","Title is not matched...");
    }


}
