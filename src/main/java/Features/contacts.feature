Feature: Free CRM Create Contacts
Scenario Outline: Free CRM CreateContact Scenario

Given User is on login page
When Title of the page is CRMPRO Log In Screen
Then User enter "<username>" and "<password>"
Then User clicks on login button
And User is on Homepage
Then User moves to NewContact Page
Then User enters "<firstname>" and "<lastname>" and "<position>"
Then Close the Browser

Examples: 
|username|password|firstname|lastname|position|
|ajay_automation|ajay@2301|Tom|Peter|Manager|
|ajay_automation|ajay@2301|John|Peter|Sr.Manager|
|ajay_automation|ajay@2301|Som|Peter|Assistant Manager|
|ajay_automation|ajay@2301|Nath|Peter|General Manager|