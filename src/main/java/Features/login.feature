Feature: Free CRM Login Feature
#Scenario: Free CRM Login Test Scenario
#Given User is on login page
#When Title of the page is CRMPRO Log In Screen
#Then User enter "ajay_automation" and "ajay@2301"
#Then User clicks on login button
#And User is on Homepage



#Scenario: User is able to create new contact
#Given User is on homepage when User enter "ajay_automation" and "ajay@2301"
#When User mousehover to contacts
#Then User clicks on new contact
#Then User Enter the first name , last name ,and company name
#Then User clicks on save button
#Then Verify new contact is created



# With Examples keyword

Scenario Outline: Free CRM Login Test Scenario
Given User is on login page
When Title of the page is CRMPRO Log In Screen
Then User enter "<username>" and "<password>"
Then User clicks on login button
And User is on Homepage

Examples:

        |username |password|
        |ajay_automation|password|

Scenario Outline: User is able to create new contact
Given User is on homepage when User enter "<username>" and "<password>"
When User mousehover to contacts
Then User clicks on new contact
Then User Enter the first name , last name ,and company name
Then User clicks on save button
Then Verify new contact is created

Examples:
|username|password|
|ajay_automation|ajay@2301|


