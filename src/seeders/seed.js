const Users = require("../models/user.models");
const Categories = require("../models/categories.models");
const SubCategories = require("../models/subcategories.models");
const Companies = require("../models/companies.models");
const Questions = require("../models/questions.models");
const Countries = require("../models/countries.models");
const Videos = require("../models/videos.models");
const Articles = require("../models/articles.models");

const users = [
  {
    fullName: "master admin",
    email: "admin@master.com",
    password: "master1234",
  },
  {
    fullName: "Sebastian Gomez",
    email: "sebas@gmail.com",
    password: "1234",
  },
  {
    fullName: "Manuel Nacer",
    email: "manuel@gmail.com",
    password: "1234",
  },
];

const categories = [
  {
    name: "FIDP (Financial Instrument Dealing Platform)",
  },
  {
    name: "FDF (Financial Data Feeding)",
  },
  {
    name: "CMA (Currency Management Automation)",
  },
  {
    name: "Integrators",
  },
  {
    name: "OTS (Other Treasury Solutions)",
  },
  {
    name: "TRMS (Treasury Risk Management System)",
  },
  {
    name: "ERP (Enterprise Resource Planning)",
  },
  {
    name: "Outsourcing",
  },
  {
    name: "ETL (Extract Transform Load)",
  },
  {
    name: "FSC (Financial Supply Chain)",
  },
  {
    name: "CFF (Cash-Flow Forecasting)",
  },
  {
    name: "eBAM (electronic Bank Account Management)",
  },
  {
    name: "BSG (Bank Single Gateway)",
  },
  {
    name: "TR (Treasury Reporting)",
  },
];

const subCategories = [
  {
    name: "Cash management",
  },
  {
    name: "Bank Account Management",
  },
  {
    name: "FX management",
  },
  {
    name: "List types of financial instruments covered: OTC and others",
  },
  {
    name: "Commodity management",
  },
  {
    name: "List types of financial instruments covered: OTC and regulated markets",
  },
  {
    name: "Interest rate management",
  },
  {
    name: "List types of financial instruments covered: OTC and regulated markets",
  },
  {
    name: "Other financial instruments management (if any please specify them)",
  },
  {
    name: "List types of financial instruments covered: OTC and regulated markets",
  },
  {
    name: "Debt management",
  },
  // {

  //   name: "Please comprehnesively specify types of bank loans / committed-uncommited / floating-fixed rates / Capital markets operations / etc..",
  // },
  {
    name: "Intercompany management",
  },
  // {

  //   name: "Please specify if you produce Transfer Pricing reporting",
  // },
  {
    name: "Asset and portfolio management",
  },
  // {

  //   name: "Please specify types of investment products covered (e.g. MMF, ECP, Bonds, Tri-party repo's, bank deposits, equities,…)",
  // },
  {
    name: "Multilateral netting",
  },
  {
    name: "Short-Term (13 week approach) Cash-Flow Forecasting",
  },
  {
    name: "Long Term cash-flow forecasting (including stress and sensitivity testing)",
  },
  // {

  //   name: "Please specify the methods used for CFF",
  // },
  {
    name: "Bank guarantee management",
  },
  {
    name: "Financial reporting",
  },
  {
    name: "Reporting under IFRS and hedge accounting",
  },
  {
    name: "Portfolio of financial instruments revaluation Mark-to-Market (i.e. IFRS 9)",
  },
  {
    name: "Dash-board",
  },
  {
    name: "EMIR reporting",
  },
  {
    name: "FBAR reporting",
  },
  {
    name: "Standard reporting library",
  },
  {
    name: "Data Analytics, Big Data & AI",
  },
  {
    name: "Finance & Compliance",
  },
  {
    name: "IT Strategy and Implementation",
  },
  {
    name: "Organisational Development",
  },
  {
    name: "SAP Services",
  },
  {
    name: "Software Development",
  },
  {
    name: "Process Consulting Industry",
  },
  {
    name: "Process Consulting Insurance",
  },
];

const companies = 
[
  {
    name: "category-1-logo-1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      1
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650668/category-1-logo-1_iyigt8.png"
  },
  {
    name: "category-1-logo-2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      1
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650669/category-1-logo-2_cy6uby.png"
  },
  {
    name: "category-1-logo-3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      1
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650669/category-1-logo-3_te6col.png"
  },
  {
    name: "category-1-logo-4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      1
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650670/category-1-logo-4_zqhttp.png"
  },
  {
    name: "category-1-logo-5",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      1
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650671/category-1-logo-5_ybaydw.png"
  },
  {
    name: "category-1-logo-6",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      1
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650672/category-1-logo-6_bsyqgw.png"
  },
  {
    name: "category-1-logo-7",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      1
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650672/category-1-logo-7_ahaqqo.png"
  },
  {
    name: "category-1-logo-8",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      1
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650673/category-1-logo-8_vw4trz.png"
  },
  {
    name: "category-1-logo-9",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      1
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650674/category-1-logo-9_fnewxx.png"
  },
  {
    name: "category-1-logo-10",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      1
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650674/category-1-logo-10_yxtdqj.png"
  },
  {
    name: "category-1-logo-11",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      1
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650675/category-1-logo-11_bc4wi8.png"
  },
  {
    name: "category-2-logo-1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      2
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650676/category-2-logo-1_vubye4.png"
  },
  {
    name: "category-2-logo-2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      2
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650676/category-2-logo-2_abonzm.png"
  },
  {
    name: "category-2-logo-3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      2
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650677/category-2-logo-3_iksr8g.png"
  },
  {
    name: "category-2-logo-4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      2
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650678/category-2-logo-4_gh4vbz.png"
  },
  {
    name: "category-2-logo-5",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      2
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650678/category-2-logo-5_ehe47t.png"
  },
  {
    name: "category-3-logo-1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      3
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650679/category-3-logo-1_iavrnz.png"
  },
  {
    name: "category-3-logo-2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      3
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650680/category-3-logo-2_sahbc9.png"
  },
  {
    name: "category-3-logo-3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      3
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650680/category-3-logo-3_r3po12.png"
  },
  {
    name: "category-3-logo-4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      3
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650681/category-3-logo-4_u3whgw.png"
  },
  {
    name: "category-3-logo-5",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      3
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650682/category-3-logo-5_nexqfo.png"
  },
  {
    name: "category-4-logo-1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      4
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650683/category-4-logo-1_kauie9.png"
  },
  {
    name: "category-4-logo-2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      4
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650683/category-4-logo-2_qx0bmf.png"
  },
  {
    name: "category-4-logo-3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      4
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650684/category-4-logo-3_mwtxmb.png"
  },
  {
    name: "category-4-logo-4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      4
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650684/category-4-logo-4_qv8ktr.png"
  },
  {
    name: "category-4-logo-5",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      4
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650685/category-4-logo-5_ghmif5.png"
  },
  {
    name: "category-4-logo-6",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      4
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650686/category-4-logo-6_wyvfps.png"
  },
  {
    name: "category-4-logo-7",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      4
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650686/category-4-logo-7_cmp9gh.png"
  },
  {
    name: "category-4-logo-8",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      4
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650687/category-4-logo-8_eecl2c.png"
  },
  {
    name: "category-4-logo-9",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      4
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650688/category-4-logo-9_kdirpc.png"
  },
  {
    name: "category-5-logo-1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      5
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650688/category-5-logo-1_lrcal7.png"
  },
  {
    name: "category-5-logo-2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      5
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650689/category-5-logo-2_bfkpxi.png"
  },
  {
    name: "category-5-logo-3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      5
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650690/category-5-logo-3_qrbqxu.png"
  },
  {
    name: "category-5-logo-4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      5
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650690/category-5-logo-4_odjjsb.png"
  },
  {
    name: "category-5-logo-5",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      5
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650691/category-5-logo-5_mhs7m0.png"
  },
  {
    name: "category-5-logo-6",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      5
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650692/category-5-logo-6_zr7heh.png"
  },
  {
    name: "category-5-logo-7",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      5
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650693/category-5-logo-7_hm0evh.png"
  },
  {
    name: "category-5-logo-8",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      5
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650693/category-5-logo-8_cucfrs.png"
  },
  {
    name: "category-5-logo-9",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      5
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650560/category-5-logo-9_vnuzlw.png"
  },
  {
    name: "category-5-logo-10",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      5
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650561/category-5-logo-10_jmiqkz.png"
  },
  {
    name: "category-5-logo-11",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      5
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650561/category-5-logo-11_gjclb0.png"
  },
  {
    name: "category-5-logo-12",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      5
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650561/category-5-logo-12_g9mtgj.png"
  },
  {
    name: "category-5-logo-13",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      5
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650563/category-5-logo-13_dsuvka.png"
  },
  {
    name: "category-6-logo-1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      6
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650563/category-6-logo-1_vwwokg.png"
  },
  {
    name: "category-6-logo-2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      6
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650564/category-6-logo-2_huabzc.png"
  },
  {
    name: "category-6-logo-3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      6
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650565/category-6-logo-3_snbhgb.png"
  },
  {
    name: "category-6-logo-4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      6
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650565/category-6-logo-4_bzpmai.png"
  },
  {
    name: "category-6-logo-5",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      6
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650566/category-6-logo-5_k7tco9.png"
  },
  {
    name: "category-6-logo-6",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      6
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650566/category-6-logo-6_julhsu.png"
  },
  {
    name: "category-6-logo-7",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      6
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650567/category-6-logo-7_fwanuu.png"
  },
  {
    name: "category-6-logo-8",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      6
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650568/category-6-logo-8_vbe8yu.png"
  },
  {
    name: "category-6-logo-9",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      6
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650569/category-6-logo-9_zn74ck.png"
  },
  {
    name: "category-6-logo-10",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      6
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650569/category-6-logo-10_dctowk.png"
  },
  {
    name: "category-6-logo-11",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      6
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650570/category-6-logo-11_u9aynn.png"
  },
  {
    name: "category-6-logo-12",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      6
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650571/category-6-logo-12_x2o1wk.png"
  },
  {
    name: "category-6-logo-13",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      6
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650571/category-6-logo-13_iftn8r.png"
  },
  {
    name: "category-6-logo-14",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      6
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650572/category-6-logo-14_ptes2e.png"
  },
  {
    name: "category-6-logo-15",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      6
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650573/category-6-logo-15_wzpefs.png"
  },
  {
    name: "category-6-logo-16",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      6
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650573/category-6-logo-16_qtlowr.png"
  },
  {
    name: "category-6-logo-17",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      6
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650574/category-6-logo-17_xxj3f7.png"
  },
  {
    name: "category-7-logo-1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      7
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650574/category-7-logo-1_hmpehd.png"
  },
  {
    name: "category-7-logo-2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      7
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650575/category-7-logo-2_o3wg28.png"
  },
  {
    name: "category-7-logo-3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      7
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650576/category-7-logo-3_unravz.png"
  },
  {
    name: "category-7-logo-4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      7
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650577/category-7-logo-4_dwql4f.png"
  },
  {
    name: "category-7-logo-5",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      7
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650578/category-7-logo-5_pgtlmc.png"
  },
  {
    name: "category-7-logo-6",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      7
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650601/category-7-logo-6_fzxjt7.png"
  },
  {
    name: "category-7-logo-7",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      7
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650633/category-7-logo-7_i48ztd.png"
  },
  {
    name: "category-7-logo-8",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      7
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650633/category-7-logo-8_kpxhtq.png"
  },
  {
    name: "category-8-logo-1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      8
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650633/category-8-logo-1_focaop.png"
  },
  {
    name: "category-8-logo-2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      8
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650634/category-8-logo-2_tsjbq9.png"
  },
  {
    name: "category-8-logo-3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      8
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650634/category-8-logo-3_ohh3k3.png"
  },
  {
    name: "category-8-logo-4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      8
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650636/category-8-logo-4_buz2pm.png"
  },
  {
    name: "category-8-logo-5",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      8
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650637/category-8-logo-5_mtt2iv.png"
  },
  {
    name: "category-8-logo-6",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      8
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650637/category-8-logo-6_g9e0qf.png"
  },
  {
    name: "category-8-logo-7",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      8
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650638/category-8-logo-7_axkh0x.png"
  },
  {
    name: "category-9-logo-1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      9
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650639/category-9-logo-1_t0kr2r.png"
  },
  {
    name: "category-9-logo-2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      9
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650639/category-9-logo-2_jlizlt.png"
  },
  {
    name: "category-9-logo-3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      9
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650640/category-9-logo-3_uygbsd.png"
  },
  {
    name: "category-9-logo-4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      9
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650641/category-9-logo-4_ztt6t6.png"
  },
  {
    name: "category-9-logo-5",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      9
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650641/category-9-logo-5_rzsb3i.png"
  },
  {
    name: "category-10-logo-1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      10
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650642/category-10-logo-1_umeyvl.png"
  },
  {
    name: "category-10-logo-2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      10
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650642/category-10-logo-2_o9fxn6.png"
  },
  {
    name: "category-10-logo-3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      10
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650644/category-10-logo-3_cfbbpr.png"
  },
  {
    name: "category-10-logo-4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      10
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650644/category-10-logo-4_trfdxc.png"
  },
  {
    name: "category-10-logo-5",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      10
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650645/category-10-logo-5_nepeyv.png"
  },
  {
    name: "category-10-logo-6",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      10
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650645/category-10-logo-6_kq1ohr.png"
  },
  {
    name: "category-10-logo-7",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      10
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650646/category-10-logo-7_mdl6eq.png"
  },
  {
    name: "category-10-logo-8",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      10
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650647/category-10-logo-8_crcoao.png"
  },
  {
    name: "category-11-logo-1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      11
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650648/category-11-logo-1_y8tsdh.png"
  },
  {
    name: "category-11-logo-2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      11
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650648/category-11-logo-2_hkxupx.png"
  },
  {
    name: "category-11-logo-3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      11
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650649/category-11-logo-3_xs8cbb.png"
  },
  {
    name: "category-11-logo-4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      11
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650649/category-11-logo-4_luhgef.png"
  },
  {
    name: "category-11-logo-5",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      11
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650650/category-11-logo-5_n9n5tk.png"
  },
  {
    name: "category-11-logo-6",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      11
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650651/category-11-logo-6_b8wvhh.png"
  },
  {
    name: "category-12-logo-1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      12
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650652/category-12-logo-1_n7ynnh.png"
  },
  {
    name: "category-12-logo-2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      12
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650653/category-12-logo-2_vh2qke.png"
  },
  {
    name: "category-12-logo-3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      12
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650653/category-12-logo-3_m9fbh8.png"
  },
  {
    name: "category-12-logo-4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      12
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650653/category-12-logo-4_hgpynx.png"
  },
  {
    name: "category-13-logo-1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      13
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650654/category-13-logo-1_bernvu.png"
  },
  {
    name: "category-13-logo-2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      13
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650655/category-13-logo-2_qdlz2l.png"
  },
  {
    name: "category-13-logo-3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      13
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650655/category-13-logo-3_wbsq9r.png"
  },
  {
    name: "category-13-logo-4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      13
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650656/category-13-logo-4_wppbuc.png"
  },
  {
    name: "category-13-logo-5",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      13
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650657/category-13-logo-5_ljoujs.png"
  },
  {
    name: "category-13-logo-6",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      13
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650657/category-13-logo-6_vwped7.png"
  },
  {
    name: "category-13-logo-7",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      13
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650658/category-13-logo-7_paaz0u.png"
  },
  {
    name: "category-13-logo-8",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      13
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650658/category-13-logo-8_hxvfy0.png"
  },
  {
    name: "category-13-logo-9",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      13
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650659/category-13-logo-9_v5l00r.png"
  },
  {
    name: "category-13-logo-10",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      13
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650660/category-13-logo-10_fsiwuo.png"
  },
  {
    name: "category-13-logo-11",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      13
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650661/category-13-logo-11_uzlduc.png"
  },
  {
    name: "category-13-logo-12",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      13
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650661/category-13-logo-12_lnff4u.png"
  },
  {
    name: "category-13-logo-13",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      13
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650662/category-13-logo-13_sba7xx.png"
  },
  {
    name: "category-13-logo-14",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      13
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650663/category-13-logo-14_ukzdfk.png"
  },
  {
    name: "category-13-logo-15",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      13
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650663/category-13-logo-15_ted33o.png"
  },
  {
    name: "category-14-logo-1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      14
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650664/category-14-logo-1_ort3c6.png"
  },
  {
    name: "category-14-logo-2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      14
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650665/category-14-logo-2_ax7txy.png"
  },
  {
    name: "category-14-logo-3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      14
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650666/category-14-logo-3_jtdgs7.png"
  },
  {
    name: "category-14-logo-4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      14
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650666/category-14-logo-4_bqs9xx.png"
  },
  {
    name: "category-14-logo-5",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      14
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650667/category-14-logo-5_kaqxvr.png"
  },
  {
    name: "category-14-logo-6",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    creationDate: "N/A",
    turnover: 1,
    employees: "N/A",
    location: "N/A",
    userId: 1,
    companyWebsite: "N/A",
    companyOffices: [1,2],
    companyCategories: [
      14
    ],
    companySubcategories: [],
    productName: "N/A",
    productVersion: "N/A",
    logo: "http://res.cloudinary.com/dq7aof6vb/image/upload/v1704650668/category-14-logo-6_s8ec76.png"
  }
]

const questions = [
  {
    body: "Do you have any specific cooperation agreement with other IT vendors for pitching?",
  },
  {
    body: "Bank connectivity (through which types of channel - please specify) :",
  },
  {
    body: "Do you have any other specific functionalities:",
  },
  {
    body: "Do you have specific integration with Fintechs? (If YES please specify which ones):",
  },
  {
    body: "Do you propose solutions or functionalities based on AI? (if YES please specify):",
  },
];

const countries = [
  {
    name: "Europe",
  },
  {
    name: "North America",
  },
  {
    name: "South America",
  },
  {
    name: "Eurasia",
  },
  {
    name: "Asia",
  },
  {
    name: "Oceania",
  },
  {
    name: "Caribbean",
  },
  {
    name: "Australia",
  },
  {
    name: "Africa",
  },
  {
    name: "Middle East",
  },
  {
    name: "Central America",
  },
];

const videos = [
  {
    title: "Video 1",
    url: "https://www.youtube.com/embed/FNCGO55mLJo",
    companyId: 1,
  },
  {
    title: "Video 2",
    url: "https://www.youtube.com/embed/42FPnvg81u4",
    companyId: 2,
  },
];

const articles = [
  {
    title: "Article 1",
    body: "This is the body of the article 1",
    companyId: 1,
  },
  {
    title: "Article 2",
    body: "This is the body of the article 2",
    companyId: 2,
  },
];

const seeder = async () => {
  for (const user of users) {
    try {
      const response = await Users.create(user);
    } catch (error) {
      console.error("Error creating users:", error);
    }
  }

  for (const category of categories) {
    try {
      const response = await Categories.create(category);
    } catch (error) {
      console.error("Error creating categories:", error);
    }
  }

  for (const subcategory of subCategories) {
    try {
      const response = await SubCategories.create(subcategory);
    } catch (error) {
      console.error("Error creating subcategories:", error);
    }
  }

  for (const question of questions) {
    try {
      const response = await Questions.create(question);
    } catch (error) {
      console.error("Error creating questions:", error);
    }
  }

  for (const country of countries) {
    try {
      const response = await Countries.create(country);
    } catch (error) {
      console.error("Error creating questions:", error);
    }
  }

  setTimeout(async () => {
    for (const company of companies) {
      try {
        const response = await Companies.create(company);
      } catch (error) {
        console.error("Error creating companies:", error);
      }
    }
  }, 1500);

  setTimeout(async () => {
    for (const video of videos) {
      try {
        const response = await Videos.create(video);
      } catch (error) {
        console.error("Error creating companies:", error);
      }
    }
    for (const article of articles) {
      try {
        const response = await Articles.create(article);
      } catch (error) {
        console.error("Error creating companies:", error);
      }
    }
  }, 2000);

  console.log("EXITO");
};

module.exports = seeder;
