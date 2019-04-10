$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("contacts.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Create Contacts",
  "description": "",
  "id": "free-crm-create-contacts",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "Free CRM CreateContact Scenario",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-createcontact-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Title of the page is CRMPRO Log In Screen",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User is on Homepage",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User moves to NewContact Page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User enters \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\" and \"\u003cposition\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Close the Browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-createcontact-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "firstname",
        "lastname",
        "position"
      ],
      "line": 14,
      "id": "free-crm-create-contacts;free-crm-createcontact-scenario;;1"
    },
    {
      "cells": [
        "ajay_automation",
        "ajay@2301",
        "Tom",
        "Peter",
        "Manager"
      ],
      "line": 15,
      "id": "free-crm-create-contacts;free-crm-createcontact-scenario;;2"
    },
    {
      "cells": [
        "ajay_automation",
        "ajay@2301",
        "John",
        "Peter",
        "Sr.Manager"
      ],
      "line": 16,
      "id": "free-crm-create-contacts;free-crm-createcontact-scenario;;3"
    },
    {
      "cells": [
        "ajay_automation",
        "ajay@2301",
        "Som",
        "Peter",
        "Assistant Manager"
      ],
      "line": 17,
      "id": "free-crm-create-contacts;free-crm-createcontact-scenario;;4"
    },
    {
      "cells": [
        "ajay_automation",
        "ajay@2301",
        "Nath",
        "Peter",
        "General Manager"
      ],
      "line": 18,
      "id": "free-crm-create-contacts;free-crm-createcontact-scenario;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "Free CRM CreateContact Scenario",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-createcontact-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Title of the page is CRMPRO Log In Screen",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enter \"ajay_automation\" and \"ajay@2301\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User is on Homepage",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User moves to NewContact Page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User enters \"Tom\" and \"Peter\" and \"Manager\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_login_page()"
});
formatter.result({
  "duration": 9391231819,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_the_page_is_CRMPRO_Log_In_Screen()"
});
formatter.result({
  "duration": 28769378,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ajay_automation",
      "offset": 12
    },
    {
      "val": "ajay@2301",
      "offset": 34
    }
  ],
  "location": "LoginStepDefinition.user_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 362965165,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 4298640557,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_Homepage()"
});
formatter.result({
  "duration": 7912344,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_moves_to_NewContact_Page()"
});
formatter.result({
  "duration": 1739822962,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tom",
      "offset": 13
    },
    {
      "val": "Peter",
      "offset": 23
    },
    {
      "val": "Manager",
      "offset": 35
    }
  ],
  "location": "LoginStepDefinition.user_enters_and_and(String,String,String)"
});
formatter.result({
  "duration": 478533807,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_Browser()"
});
formatter.result({
  "duration": 797813891,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Free CRM CreateContact Scenario",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-createcontact-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Title of the page is CRMPRO Log In Screen",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enter \"ajay_automation\" and \"ajay@2301\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User is on Homepage",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User moves to NewContact Page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User enters \"John\" and \"Peter\" and \"Sr.Manager\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_login_page()"
});
formatter.result({
  "duration": 8688444435,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_the_page_is_CRMPRO_Log_In_Screen()"
});
formatter.result({
  "duration": 5426084,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ajay_automation",
      "offset": 12
    },
    {
      "val": "ajay@2301",
      "offset": 34
    }
  ],
  "location": "LoginStepDefinition.user_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 232472936,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 4827531211,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_Homepage()"
});
formatter.result({
  "duration": 27373900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_moves_to_NewContact_Page()"
});
formatter.result({
  "duration": 1867812699,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "John",
      "offset": 13
    },
    {
      "val": "Peter",
      "offset": 24
    },
    {
      "val": "Sr.Manager",
      "offset": 36
    }
  ],
  "location": "LoginStepDefinition.user_enters_and_and(String,String,String)"
});
formatter.result({
  "duration": 550035224,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_Browser()"
});
formatter.result({
  "duration": 805157656,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Free CRM CreateContact Scenario",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-createcontact-scenario;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Title of the page is CRMPRO Log In Screen",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enter \"ajay_automation\" and \"ajay@2301\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User is on Homepage",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User moves to NewContact Page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User enters \"Som\" and \"Peter\" and \"Assistant Manager\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_login_page()"
});
formatter.result({
  "duration": 8956067267,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_the_page_is_CRMPRO_Log_In_Screen()"
});
formatter.result({
  "duration": 9485445,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ajay_automation",
      "offset": 12
    },
    {
      "val": "ajay@2301",
      "offset": 34
    }
  ],
  "location": "LoginStepDefinition.user_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 210763960,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 4397082715,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_Homepage()"
});
formatter.result({
  "duration": 313454232,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_moves_to_NewContact_Page()"
});
formatter.result({
  "duration": 1958028541,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Som",
      "offset": 13
    },
    {
      "val": "Peter",
      "offset": 23
    },
    {
      "val": "Assistant Manager",
      "offset": 35
    }
  ],
  "location": "LoginStepDefinition.user_enters_and_and(String,String,String)"
});
formatter.result({
  "duration": 521388743,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_Browser()"
});
formatter.result({
  "duration": 791587807,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Free CRM CreateContact Scenario",
  "description": "",
  "id": "free-crm-create-contacts;free-crm-createcontact-scenario;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Title of the page is CRMPRO Log In Screen",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enter \"ajay_automation\" and \"ajay@2301\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User is on Homepage",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User moves to NewContact Page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User enters \"Nath\" and \"Peter\" and \"General Manager\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_login_page()"
});
formatter.result({
  "duration": 8818494693,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_the_page_is_CRMPRO_Log_In_Screen()"
});
formatter.result({
  "duration": 7896113,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ajay_automation",
      "offset": 12
    },
    {
      "val": "ajay@2301",
      "offset": 34
    }
  ],
  "location": "LoginStepDefinition.user_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 247868175,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 4592873928,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_Homepage()"
});
formatter.result({
  "duration": 3519998,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_moves_to_NewContact_Page()"
});
formatter.result({
  "duration": 1822328662,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nath",
      "offset": 13
    },
    {
      "val": "Peter",
      "offset": 24
    },
    {
      "val": "General Manager",
      "offset": 36
    }
  ],
  "location": "LoginStepDefinition.user_enters_and_and(String,String,String)"
});
formatter.result({
  "duration": 650439582,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_the_Browser()"
});
formatter.result({
  "duration": 715202915,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Login Feature",
  "description": "",
  "id": "free-crm-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 2,
      "value": "#Scenario: Free CRM Login Test Scenario"
    },
    {
      "line": 3,
      "value": "#Given User is on login page"
    },
    {
      "line": 4,
      "value": "#When Title of the page is CRMPRO Log In Screen"
    },
    {
      "line": 5,
      "value": "#Then User enter \"ajay_automation\" and \"ajay@2301\""
    },
    {
      "line": 6,
      "value": "#Then User clicks on login button"
    },
    {
      "line": 7,
      "value": "#And User is on Homepage"
    },
    {
      "line": 11,
      "value": "#Scenario: User is able to create new contact"
    },
    {
      "line": 12,
      "value": "#Given User is on homepage when User enter \"ajay_automation\" and \"ajay@2301\""
    },
    {
      "line": 13,
      "value": "#When User mousehover to contacts"
    },
    {
      "line": 14,
      "value": "#Then User clicks on new contact"
    },
    {
      "line": 15,
      "value": "#Then User Enter the first name , last name ,and company name"
    },
    {
      "line": 16,
      "value": "#Then User clicks on save button"
    },
    {
      "line": 17,
      "value": "#Then Verify new contact is created"
    },
    {
      "line": 21,
      "value": "# With Examples keyword"
    }
  ],
  "line": 23,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 24,
  "name": "User is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "Title of the page is CRMPRO Log In Screen",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "User enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "User clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "User is on Homepage",
  "keyword": "And "
});
formatter.examples({
  "line": 30,
  "name": "",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 32,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;1"
    },
    {
      "cells": [
        "ajay_automation",
        "password"
      ],
      "line": 33,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 33,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 24,
  "name": "User is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "Title of the page is CRMPRO Log In Screen",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "User enter \"ajay_automation\" and \"password\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "User clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "User is on Homepage",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_login_page()"
});
formatter.result({
  "duration": 8219917811,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_the_page_is_CRMPRO_Log_In_Screen()"
});
formatter.result({
  "duration": 12522197,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ajay_automation",
      "offset": 12
    },
    {
      "val": "password",
      "offset": 34
    }
  ],
  "location": "LoginStepDefinition.user_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 205906455,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 4785495752,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_Homepage()"
});
formatter.result({
  "duration": 12288458,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003cCRMPRO[]\u003e but was:\u003cCRMPRO[ - CRM software for customer relationship management, sales, and support.]\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat stepDefinitions.LoginStepDefinition.user_is_on_Homepage(LoginStepDefinition.java:70)\r\n\tat ✽.And User is on Homepage(login.feature:28)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "line": 35,
  "name": "User is able to create new contact",
  "description": "",
  "id": "free-crm-login-feature;user-is-able-to-create-new-contact",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 36,
  "name": "User is on homepage when User enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "User mousehover to contacts",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "User clicks on new contact",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "User Enter the first name , last name ,and company name",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "User clicks on save button",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "Verify new contact is created",
  "keyword": "Then "
});
formatter.examples({
  "line": 43,
  "name": "",
  "description": "",
  "id": "free-crm-login-feature;user-is-able-to-create-new-contact;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 44,
      "id": "free-crm-login-feature;user-is-able-to-create-new-contact;;1"
    },
    {
      "cells": [
        "ajay_automation",
        "ajay@2301"
      ],
      "line": 45,
      "id": "free-crm-login-feature;user-is-able-to-create-new-contact;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 45,
  "name": "User is able to create new contact",
  "description": "",
  "id": "free-crm-login-feature;user-is-able-to-create-new-contact;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 36,
  "name": "User is on homepage when User enter \"ajay_automation\" and \"ajay@2301\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "User mousehover to contacts",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "User clicks on new contact",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "User Enter the first name , last name ,and company name",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "User clicks on save button",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "Verify new contact is created",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "ajay_automation",
      "offset": 37
    },
    {
      "val": "ajay@2301",
      "offset": 59
    }
  ],
  "location": "NewContactDefinition.user_is_on_homepage_when_User_enter_and(String,String)"
});
formatter.result({
  "duration": 13748911421,
  "status": "passed"
});
formatter.match({
  "location": "NewContactDefinition.user_mousehover_to_contacts()"
});
formatter.result({
  "duration": 103607141,
  "status": "passed"
});
formatter.match({
  "location": "NewContactDefinition.user_clicks_on_new_contact()"
});
formatter.result({
  "duration": 1479537401,
  "status": "passed"
});
formatter.match({
  "location": "NewContactDefinition.user_Enter_the_first_name_last_name_and_company_name()"
});
formatter.result({
  "duration": 285750128,
  "status": "passed"
});
formatter.match({
  "location": "NewContactDefinition.user_clicks_on_save_button()"
});
formatter.result({
  "duration": 2035764853,
  "status": "passed"
});
formatter.match({
  "location": "NewContactDefinition.verify_new_contact_is_created()"
});
formatter.result({
  "duration": 2422905311,
  "status": "passed"
});
});