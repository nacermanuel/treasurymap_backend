const Companies = require("./companies.models")
const Categories = require("./categories.models")
const SubCategories = require("./subcategories.models")
const Countries = require("./countries.models")

// MANY TO MANY -- COMAPANIES <---> CATEGORIES
Companies.belongsToMany(Categories, { through: 'companies_categories' });
Categories.belongsToMany(Companies, { through: 'companies_categories' });

// MANY TO MANY -- COMAPANIES <---> SUBCATEGORIES
Companies.belongsToMany(SubCategories, { through: 'companies_subcategories' });
SubCategories.belongsToMany(Companies, { through: 'companies_subcategories' });

// MANY TO MANY -- COMAPANIES <---> OFFICES(COUNTRIES)
Companies.belongsToMany(Countries, { through: 'companies_offices' });
Countries.belongsToMany(Companies, { through: 'companies_offices' });

