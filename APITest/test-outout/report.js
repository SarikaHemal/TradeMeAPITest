$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/sarik/eclipse-workspace/TradeMeAPITest/APITest/src/main/java/feature/APIFeature.feature");
formatter.feature({
  "line": 1,
  "name": "Usedcar API Test Feature",
  "description": "",
  "id": "usedcar-api-test-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 888029100,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Check if at least one listing in the UsedCars category",
  "description": "",
  "id": "usedcar-api-test-feature;check-if-at-least-one-listing-in-the-usedcars-category",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Automate"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I perform get operation for json request \"v1/Categories/UsedCars.json\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "i can get satus code 200",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I can get validate response body with at least one listed car",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "v1/Categories/UsedCars.json",
      "offset": 42
    }
  ],
  "location": "TrademeAPISteps.i_perform_get_operation_for_json_request(String)"
});
formatter.result({
  "duration": 2264974800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 21
    }
  ],
  "location": "TrademeAPISteps.i_can_get_satus_code(int)"
});
formatter.result({
  "duration": 3907700,
  "status": "passed"
});
formatter.match({
  "location": "TrademeAPISteps.i_can_get_validate_response_body_with_at_least_one_listed_car()"
});
formatter.result({
  "duration": 12677600,
  "status": "passed"
});
formatter.before({
  "duration": 3895000,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Check if the make �Kia� exists.",
  "description": "",
  "id": "usedcar-api-test-feature;check-if-the-make-�kia�-exists.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@Automate"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I perform get operation for json request \"v1/Categories/UsedCars.json\"",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "i can get satus code 200",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I can get validate response body with \"Kia\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "v1/Categories/UsedCars.json",
      "offset": 42
    }
  ],
  "location": "TrademeAPISteps.i_perform_get_operation_for_json_request(String)"
});
formatter.result({
  "duration": 76407900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 21
    }
  ],
  "location": "TrademeAPISteps.i_can_get_satus_code(int)"
});
formatter.result({
  "duration": 329000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kia",
      "offset": 39
    }
  ],
  "location": "TrademeAPISteps.i_can_get_validate_response_body_with(String)"
});
formatter.result({
  "duration": 19931000,
  "status": "passed"
});
formatter.before({
  "duration": 2784300,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Verify the details of Used car is displayed",
  "description": "",
  "id": "usedcar-api-test-feature;verify-the-details-of-used-car-is-displayed",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@Automate"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I perform GET operation with path parameter for car \"v1/Categories/UsedCars/Cars.json\"",
  "rows": [
    {
      "cells": [
        "Number plate",
        "Kilometres",
        "Body",
        "Seats",
        "Fuel type",
        "Engine",
        "Transmission",
        "History",
        "Registration expires",
        "WoF expires",
        "Model detail"
      ],
      "line": 19
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "i can get satus code 200",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I should get validate the response body with details",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "v1/Categories/UsedCars/Cars.json",
      "offset": 53
    }
  ],
  "location": "TrademeAPISteps.i_perform_GET_operation_with_path_parameter_for_car(String,DataTable)"
});
formatter.result({
  "duration": 97914900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 21
    }
  ],
  "location": "TrademeAPISteps.i_can_get_satus_code(int)"
});
formatter.result({
  "duration": 860400,
  "error_message": "java.lang.AssertionError: expected:\u003c200\u003e but was:\u003c404\u003e\r\n\tat org.junit.Assert.fail(Assert.java:89)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:835)\r\n\tat org.junit.Assert.assertEquals(Assert.java:647)\r\n\tat org.junit.Assert.assertEquals(Assert.java:633)\r\n\tat steps.TrademeAPISteps.i_can_get_satus_code(TrademeAPISteps.java:51)\r\n\tat ✽.And i can get satus code 200(C:/Users/sarik/eclipse-workspace/TradeMeAPITest/APITest/src/main/java/feature/APIFeature.feature:20)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "TrademeAPISteps.i_should_get_validate_the_response_body_with_details()"
});
formatter.result({
  "status": "skipped"
});
});