var CountriesSelectView = require('./views/countries_select_view');
var CountryDetailView = require('./views/country_detailed_view');
var CountrySelectView = require('./views/countries_select_view');

var CountryList = require('./models/country_list');


window.onload = function () {
    //setup views
    var countriesSelectView = new CountriesSelectView(document.querySelector('#countries'));
    var countryDetailView = new CountryDetailView(document.querySelector('#info'));

    //link change on select to update detail view and persist last country
    countriesSelectView.onChange = function(country) {
      countryDetailView.render(country);
    };

    //setup country list model
    var world = new CountryList('https://restcountries.eu/rest/v1');

    //update views on data update
    world.onUpdate = function(countries) {
      countriesSelectView.render(countries);
    };

    //get data from server
    world.populate();

};
