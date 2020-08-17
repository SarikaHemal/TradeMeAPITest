package steps;



import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.junit.Assert;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import utils.APIConstant;
import utils.EARestAssuredV2;
import utils.RestAssuredExtension;
import io.restassured.response.ResponseOptions;
import io.restassured.response.Response;
import static io.restassured.module.jsv.JsonSchemaValidator.matchesJsonSchemaInClasspath;

import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.junit.Assert.assertThat;

public class TrademeAPISteps {
	public static ResponseOptions<Response> response;
	
	@Given("^I perform get operation for json request \"([^\"]*)\"$")
	public void i_perform_get_operation_for_json_request(String url)  {
		response=RestAssuredExtension.GetOps(url);
		
	}

	@Then("^I can get validate response body with at least one listed car$")
	public void i_can_get_validate_response_body_with_at_least_one_listed_car() {
		
		
		String a = response.getBody().asString();
		System.out.println(a);
        //assertThat(a, matchesJsonSchemaInClasspath("Usedcars.json"));
	}
	
	@Given("^i can get satus code (\\d+)$")
	public void i_can_get_satus_code(int expectedStatusCode)  {
		int actualStatusCode=response.statusCode();
		System.out.println("Status Code:"+actualStatusCode); 
		if(actualStatusCode==expectedStatusCode)
		System.out.println("Test Pass"); 
		else 
			System.out.println("Test Fail"); 
		Assert.assertEquals(expectedStatusCode, actualStatusCode);
			
	}

	
	@Then("^I can get validate response body with \"([^\"]*)\"$")
	public void i_can_get_validate_response_body_with(String car) {
		
		System.out.println(response.body().asString().contains(car));
		response.getBody().peek();
		Assert.assertTrue(response.body().asString().contains(car));
		//assertThat(response.getBody().jsonPath().get("Name").toString().contains(car), equalTo("Kia"));
		
	}
	@Then("^I should get validate the response body with details$")
	public void i_should_get_validate_the_response_body_with_details()  {

		String a = response.getBody().asString();
        //assertThat(a, matchesJsonSchemaInClasspath("Car.json"));
	}
	
	@Given("^I perform GET operation with path parameter for car \"([^\"]*)\"$")
	public void i_perform_GET_operation_with_path_parameter_for_car(String url, DataTable table) throws Throwable {
		List<List<String>> data = table.raw();
		
        Map<String, String> queryParams = new HashMap<>();
        queryParams.put("Number plate", data.get(0).get(0));
        queryParams.put("Kilometres", data.get(0).get(1));
        queryParams.put("Body", data.get(0).get(2));
        queryParams.put("Seats", data.get(0).get(3));
        queryParams.put("Fuel type", data.get(0).get(4));
        queryParams.put("Engine", data.get(0).get(5));
        queryParams.put("Transmission", data.get(0).get(6));
        queryParams.put("History", data.get(0).get(7));
        queryParams.put("Registration expires", data.get(0).get(8));
        queryParams.put("WoF expires", data.get(0).get(9));
        queryParams.put("Model detail", data.get(0).get(10));
        

        //response = RestAssuredExtension.GetWithQueryParamsWithToken(url, pathParams, response.getBody().jsonPath().get("access_token"));

        EARestAssuredV2 eaRestAssuredV2 = new EARestAssuredV2(url,APIConstant.ApiMethods.GET);
        response = eaRestAssuredV2.ExecuteWithQueryParams(queryParams);
        
        
	}

	


}

