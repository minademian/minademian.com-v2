@smoke @articles
Feature: Articles Page
  As a visitor interested in technical writing
  I want to browse articles and documentation
  So that I can learn from Mina Demian's insights and guides

  Background:
    Given I am on the articles page

  Scenario: Articles page loads successfully
    Then I should see the main heading "Writing"
    And I should see the navigation menu

  @documentation
  Scenario: Documentation Library link is displayed
    Then I should see the "Documentation Library" section
    And the documentation link should point to GitHub
    And the link should open in a new tab

  @blog
  Scenario: Blog link is displayed
    Then I should see the "Blog" section
    And the blog link should point to blog.minademian.com
    And the link should open in a new tab

  @featured-articles
  Scenario: Featured articles are displayed
    Then I should see multiple featured articles
    And each article should have a title
    And each article should have a summary
    And each article should have a read time

  @article-links
  Scenario: Article links are functional
    Then article links should be present
    And article links should open in new tabs
    And article links should point to valid external URLs

  @linkedin-articles
  Scenario: LinkedIn articles are listed
    Then I should see articles linking to LinkedIn
    And the LinkedIn articles should include "React Native" content
    And the LinkedIn articles should include "TDD" content

  @navigation @from-articles
  Scenario Outline: Navigation from articles page works
    When I click on the "<page>" navigation link
    Then I should be on the <page> page
    And the page should load successfully

    Examples:
      | page      |
      | Home      |
      | About     |
      | Portfolio |

  @responsive @articles
  Scenario: Articles page is responsive
    Given I am using a mobile viewport
    When I view the articles page
    Then the content should be properly displayed for mobile
    And all articles should be readable

  @external-links
  Scenario: External links have proper security attributes
    Then external links should have target="_blank"
    And external links should be accessible
