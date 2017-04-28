const {client} = require('nightwatch-cucumber');
const {defineSupportCode} = require('cucumber');

const searchResults = client.page.searchResults();

defineSupportCode(({Given, Then, When}) => {
    Given('There is search results page opened', function () {
        return searchResults
            .navigate()
            .section.offers
            .waitForElementVisible('@list', 30000);
    });

    When('I click Filters button', () => {
        return searchResults.click('@filtersButton')
            .section.filters
            .waitForElementVisible('@filtersContainer', 2000);;
    });

    Then('Filters menu should be visible', () => {
        return searchResults.section.filters.expect.element('@filtersContainer').to.be.visible;
    });
});