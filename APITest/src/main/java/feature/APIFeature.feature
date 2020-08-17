Feature: Usedcar API Test Feature

@Automate
Scenario: Check if at least one listing in the UsedCars category
Given I perform get operation for json request "v1/Categories/UsedCars.json"
And i can get satus code 200
Then I can get validate response body with at least one listed car


@Automate
Scenario: Check if the make �Kia� exists.
Given I perform get operation for json request "v1/Categories/UsedCars.json"
And i can get satus code 200
Then I can get validate response body with "Cars"

@Automate
Scenario: Verify the details of Used car is displayed  
Given I perform GET operation with path parameter for car "v1/Categories/UsedCars.json"
|Number plate| Kilometres| Body | Seats | Fuel type| Engine | Transmission | History | Registration expires | WoF expires | Model detail |
And i can get satus code 200
Then I should validate get the response body  
