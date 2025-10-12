@smoke @projects
Feature: Projects Homepage
  As a visitor to the projects page
  I want to see the main content and navigation
  So that I can get a better view into what Mina Demian has built

  Background:
    Given I am on the projects page

  Scenario: Projects page loads successfully
    Then I should see the main heading "Projects" or similar
    And I should see the featured project
    And I should see the the video with the button overlay