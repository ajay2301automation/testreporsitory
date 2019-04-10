package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "C:\\Users\\AJBHARDW\\eclipse-workspace\\FreeCRMBDDFrameWorkAgain\\src\\main\\java\\Features"
		, glue= {"stepDefinitions"},// glue means the path of the stepdefinition files
		format= {"pretty", "html:test-output" , "json: json-output/cucumber.json" , "junit: junit-outpun/junit.xml"}  // this statement will give us the good output,
		// and this html:test-output will generate a folder in our project for html report
		// json tag will generate json report, same like this we can generate junit report
		// format is used to generate different type of reports
		,dryRun= false //if dry run in true it will not run the test cases, it will check all the features are defined
				//in login file are defined in step definition file or not
				//now making dryRun= false
				
				,strict = false// if this is true then it will fail the execution if any of the step in stepdefinition is missing 	
				,monochrome = true	 // generate the output in readable format
		)
public class TestRunner {

}
