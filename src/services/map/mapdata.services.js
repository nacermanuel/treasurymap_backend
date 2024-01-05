const categoriesTemplate = require("./categoriesTemplate.js");
 

let companies = []; // Initialize an empty array

// Function to fetch company data
async function fetchCompanies() {
    try {
        const response = await fetch('https://treasurymapbackend-production.up.railway.app/api/v1/companies/all/all');
        const data = await response.json();
        return data; // Return the fetched data
    } catch (error) {
        console.error('Error fetching company data:', error);
        return []; // Return an empty array in case of an error
    }
}

// Function to process categories after fetching companies
async function processCategories() {
    try {
        companies = await fetchCompanies(); // Await the fetch operation

        categoriesTemplate.forEach(category => {
            companies.forEach(company => {
                if (company.companyCategories && company.companyCategories.includes(category.id + 1)) {
                    category.logos.push(
                        {
                            image: company.logo,
                            url: `https://treasurymapbackend-production.up.railway.app/api/v1/companies/${company.id}`,
                            keywords: [],
                            subcategories: company.companySubcategories,
                            headequarterLocation: company.location,
                            activeIn: company.companyOffices,
                        }
                    ); // Store company data
                }
            });
        });

        //console.log(categories); // Now categories is processed and can be logged
        return categoriesTemplate
    } catch (error) {
        console.error('Error processing categories:', error);
    }
}

module.exports = {
  processCategories,
};