@smoke @portfolio
Feature: Portfolio Page
  As a visitor to the portfolio page
  I want to see featured sites and projects
  So that I can view examples of Mina Demian's work

  Background:
    Given I am on the portfolio page

  Scenario: Portfolio page loads successfully
    Then I should see the main heading "Portfolio"
    And I should see the navigation menu

  @featured-site
  Scenario: Featured site is displayed
    Then I should see a featured site section
    And I should see the site title "Voltaire Stockholm"
    And I should see a site description
    And I should see the tech stack used

  @tech-stack
  Scenario: Tech stack is visible for projects
    Then I should see technology tags displayed
    And the tech stack should include relevant technologies

  @navigation @from-portfolio
  Scenario Outline: Navigation from portfolio page works
    When I click on the "<page>" navigation link
    Then I should be on the <page> page
    And the page should load successfully

    Examples:
      | page     |
      | Home     |
      | About    |
      | Articles |

  @responsive @portfolio
  Scenario: Portfolio page is responsive
    Given I am using a mobile viewport
    When I view the portfolio page
    Then the content should be properly displayed for mobile
    And the featured site should be readable

  @metadata
  Scenario: Portfolio page has proper metadata
    Then the page should have an appropriate title
    And the page should have a meta description
