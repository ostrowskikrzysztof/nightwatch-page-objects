module.exports = {
    url: 'https://www.esky.pl/lot+hotel/search/WAWA/LON/2017-07-12/2017-07-16/2',
    elements: {
        body: 'body',
        searchResults: 'search-results',
        filtersButton: 'more-button.toggle-filters'
    },
    sections: {
        filters: {
            selector: 'filters',
            elements: {
                overlay: '.filters-overlay',
                filtersContainer: '.filters-content-wrapper'
            }
        },
        offers: {
            selector: 'search-results',
            elements: {
                list: 'ul.offers'
            }
        }
    }
};