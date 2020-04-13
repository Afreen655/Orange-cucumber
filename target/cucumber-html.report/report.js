$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("directory.feature");
formatter.feature({
  "line": 2,
  "name": "check the  complete details of user",
  "description": "",
  "id": "check-the--complete-details-of-user",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@directory"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "check the user details with valid credentials and Invalid credentials",
  "description": "",
  "id": "check-the--complete-details-of-user;check-the-user-details-with-valid-credentials-and-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "Open chrome and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter valid \"\u003cusernameNumber\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user should be able to login",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "directory is clicked",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter valid name",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "click the Search button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user details displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "check-the--complete-details-of-user;check-the-user-details-with-valid-credentials-and-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "usernameNumber"
      ],
      "line": 14,
      "id": "check-the--complete-details-of-user;check-the-user-details-with-valid-credentials-and-invalid-credentials;;1"
    },
    {
      "cells": [
        "1"
      ],
      "line": 15,
      "id": "check-the--complete-details-of-user;check-the-user-details-with-valid-credentials-and-invalid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "check the user details with valid credentials and Invalid credentials",
  "description": "",
  "id": "check-the--complete-details-of-user;check-the-user-details-with-valid-credentials-and-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@directory"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Open chrome and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter valid \"1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user should be able to login",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "directory is clicked",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter valid name",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "click the Search button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user details displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "OrangehrmTest.open_chrome_and_start_application()"
});
formatter.result({
  "duration": 12797790592,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 15
    }
  ],
  "location": "OrangehrmTest.i_enter_valid_and_valid(String)"
});
formatter.result({
  "duration": 530057086,
  "status": "passed"
});
formatter.match({
  "location": "OrangehrmTest.user_should_be_able_to_login()"
});
formatter.result({
  "duration": 2927273634,
  "status": "passed"
});
formatter.match({
  "location": "OrangehrmTest.directory_is_clicked()"
});
formatter.result({
  "duration": 6001024416,
  "status": "passed"
});
formatter.match({
  "location": "OrangehrmTest.i_enter_valid_name()"
});
formatter.result({
  "duration": 299170700,
  "status": "passed"
});
formatter.match({
  "location": "OrangehrmTest.click_the_Search_button()"
});
formatter.result({
  "duration": 1688284953,
  "status": "passed"
});
formatter.match({
  "location": "OrangehrmTest.user_details_displayed()"
});
formatter.result({
  "duration": 5988519649,
  "status": "passed"
});
});