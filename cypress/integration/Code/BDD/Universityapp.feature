Feature: University website validation

 Scenario: if the score of the first rank should be greater than overall score
 Given  Launch the url
 And validate rank

 
Scenario: Verify Knowmore button is working in university ranking table for each university
Given  Launch the url
 And validate Knowmore button

 Scenario: Verify more than 4 universities shouldnot be compared
 Given  Launch the url
 And Compare more than 4 universities


Scenario: Verify Less than 5 universities should be compared
 Given  Launch the url
 And Compare less than 4 universities


Scenario: Verify the ad's present in the world university ranking page
Given  Launch the url
 And validate the individual ad's 

 Scenario: Verify the year in the world university ranking page
 Given  Launch the url
 And validate the year 