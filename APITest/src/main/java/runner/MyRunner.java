package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "C:\\Users\\sarik\\eclipse-workspace\\TradeMeAPITest\\APITest\\src\\main\\java\\feature\\APIFeature.feature",
		glue = {"steps" }, 
		format = { "pretty", "html:test-outout" }, 
				dryRun = false,
				monochrome = true, 
				tags = { "@Automate" })

public class MyRunner {

}

