Feature: Validating login
    @login
    Scenario: Login

        Given I access Magpi Dev
        When I enter "support" and "datdat"
        When A "Login" will occur

    @search
    Scenario: Search Form
        Given I am on the forms dashboard
        When "Cervical_Cancer_Post_Test" is searched
        Then Open "" form

    @Export data
    Scenario: Export data

        Given The form has Data
        When the "Select All" checkbox is selected
        And Export "button" is selected
        When Export "download xlsx" is selected
        Then Download should begin