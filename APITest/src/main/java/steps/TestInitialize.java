package steps;

import cucumber.api.java.Before;
import utils.RestAssuredExtension;

public class TestInitialize {

    RestAssuredExtension restAssuredExtension;

	@Before
    public void TestSetup(){
        restAssuredExtension = new RestAssuredExtension();
    }
}

