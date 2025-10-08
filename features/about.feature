@about @profile
Feature: About Page
  As a visitor interested in learning more about Mina Demian
  I want to view detailed information about his background and experience
  So that I can understand his skills and qualifications

  Background:
    Given I am on the about page

  Scenario: About page displays profile information
    Then I should see the main heading "Products, Not Code"
    And I should see the profile section with personal information
    And I should see the developer profile image

  @experience
  Scenario: Experience section is complete
    Then I should see the "Experience" section
    And I should see multiple job positions listed
    And each job should have company links that work
    And company links should open in new tabs

  @education
  Scenario: Education section is displayed
    Then I should see the "Education" section
    And I should see educational background information

  @skills
  Scenario: Skills section shows technical abilities
    Then I should see the "Skills" section
    And I should see various technical skills listed

  @navigation @from-about
  Scenario Outline: Navigation from about page works
    When I click on the "<page>" navigation link
    Then I should be on the <page> page
    And the page should load successfully

    Examples:
      | page     |
      | Home     |
      | Projects |
      | Articles |

  @responsive @about
  Scenario: About page is responsive
    Given I am using a tablet viewport
    When I view the about page
    Then the content should be properly displayed for tablet
    And all sections should be readable