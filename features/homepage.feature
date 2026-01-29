@smoke @homepage
Feature: Portfolio Homepage
  As a visitor to the portfolio website
  I want to see the main content and navigation
  So that I can learn about Mina Demian and navigate the site

  Background:
    Given I am on the homepage

  Scenario: Homepage loads successfully
    Then I should see the main heading "I design and build production-grade web applications." or similar
    And I should see the developer profile image
    And I should see the navigation menu

  @navigation
  Scenario: Navigation links work correctly
    When I click on the "About" navigation link
    Then I should be on the about page
    And the page should load without errors

  @navigation
  Scenario: Projects navigation works
    When I click on the "Projects" navigation link
    Then I should be on the projects page
    And I should see project items displayed

  @resume
  Scenario: Resume download link is functional
    When I look for the resume download link
    Then the resume link should be present
    And the resume link should have the correct href attribute

  @responsive
  Scenario: Homepage is responsive on mobile
    Given I am using a mobile viewport
    When I view the homepage
    Then the content should be properly displayed for mobile
    And the mobile navigation should be accessible

  @dark-mode
  Scenario: Dark mode toggle functionality
    When I click the dark mode toggle
    Then the page theme should change to dark mode
    When I click the dark mode toggle again
    Then the page theme should change back to light mode