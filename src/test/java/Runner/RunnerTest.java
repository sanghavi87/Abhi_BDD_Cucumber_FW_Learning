package Runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions
        (

// 1) feature:- Path of the feature file , where feature file is available:-
//-------------------
//            features = "C:\\Users\\abhis\\IdeaProjects\\Abhi_BDD_Cucumber_FW_Learning\\src\\test\\resources\\Features",  // when you want to run all the functionality
//            features = "C:\\Users\\abhis\\IdeaProjects\\Abhi_BDD_Cucumber_FW_Learning\\src\\test\\resources\\Features\\A_Login.feature", // when you want to run any particular functionality
            features = "C:\\Users\\abhis\\IdeaProjects\\Abhi_BDD_Cucumber_FW_Learning\\src\\test\\resources\\Features\\B_Register.feature",
//            features = "C:\\Users\\abhis\\IdeaProjects\\Abhi_BDD_Cucumber_FW_Learning\\src\\test\\resources\\Features\\C_SelectProduct.feature",
//            features = "C:\\Users\\abhis\\IdeaProjects\\Abhi_BDD_Cucumber_FW_Learning\\src\\test\\resources\\Features\\D_AddToCart.feature",
//            features = "C:\\Users\\abhis\\IdeaProjects\\Abhi_BDD_Cucumber_FW_Learning\\src\\test\\resources\\Features\\E_ShoppingCart.feature",
//            features = "C:\\Users\\abhis\\IdeaProjects\\Abhi_BDD_Cucumber_FW_Learning\\src\\test\\resources\\Features\\F_CheckOut.feature",
//            features = "C:\\Users\\abhis\\IdeaProjects\\Abhi_BDD_Cucumber_FW_Learning\\src\\test\\resources\\Features\\G_BillingDetails.feature",
//            features = "C:\\Users\\abhis\\IdeaProjects\\Abhi_BDD_Cucumber_FW_Learning\\src\\test\\resources\\Features\\H_ShippingMethod.feature",
//            features = "C:\\Users\\abhis\\IdeaProjects\\Abhi_BDD_Cucumber_FW_Learning\\src\\test\\resources\\Features\\I_Payment.feature",
//            features = "C:\\Users\\abhis\\IdeaProjects\\Abhi_BDD_Cucumber_FW_Learning\\src\\test\\resources\\Features\\J_ValidateHomePage.feature",


//        features = ".",tags = "@Login",                       //Specific Scenario
//        features = ".",tags = {"@Regression,@Sanity"},        // OR
//        features = ".",tags = {"@Regression","@Sanity"},      //And
//        features = ".",tags = "~@Smoke",                       //Ignore


// 2) glue:- Path of the step definitions
//----------------
                glue = {"StepDefinitions"},


// 3) format:- We can create different type of report and pretty output.
//-----------------
                format = {"pretty","html:htmlReport","json:json/cucumber.json","junit:junit/cucumber.xml"},


// 4) dryRun:-  Will help to do one to one mapping between feature file and step definitions
//-------------------
                dryRun = false


// 5) monochrome:- Display the console output in proper readable format
//------------------------------
//        monochrome = true,


// 6) strict:-  It will fail the execution if there are pending step or undefine step. It will check if any step is not defined in step definitions.
//-------------------------
//        strict = true


        )

public class RunnerTest
{


}
