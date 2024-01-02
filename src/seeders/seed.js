const Users = require("../models/user.models");
const Categories = require("../models/categories.models");
const SubCategories = require("../models/subcategories.models");
const Companies = require("../models/companies.models");

const users = [
  {
    id: 1,
    fullName: "Sebastian Gomez",
    email: "sebas@gmail.com",
    password: "1234",
  },
  {
    id: 2,
    fullName: "Manuel Nacer",
    email: "manuel@gmail.com",
    password: "1234",
  },
  {
    id: 3,
    fullName: "Juan Perez",
    email: "juan@gmail.com",
    password: "1234",
  },
];

const categories = [
  {
    id: 1,
    name: "FIDP (Financial Instrument Dealing Platform)",
  },
  {
    id: 2,
    name: "FDF (Financial Data Feeding)",
  },
  {
    id: 3,
    name: "CMA (Currency Management Automation)",
  },
  {
    id: 4,
    name: "Integrators",
  },
  {
    id: 5,
    name: "OTS (Other Treasury Solutions)",
  },
  {
    id: 6,
    name: "TRMS (Treasury Risk Management System)",
  },
  {
    id: 7,
    name: "ERP (Enterprise Resource Planning)",
  },
  {
    id: 8,
    name: "Outsourcing",
  },
  {
    id: 9,
    name: "ETL (Extract Transform Load)",
  },
  {
    id: 10,
    name: "FSC (Financial Supply Chain)",
  },
  {
    id: 11,
    name: "CFF (Cash-Flow Forecasting)",
  },
  {
    id: 12,
    name: "eBAM (electronic Bank Account Management)",
  },
  {
    id: 13,
    name: "BSG (Bank Single Gateway)",
  },
  {
    id: 14,
    name: "TR (Treasury Reporting)",
  },
];

const subCategories = [
  {
    id: 1,
    name: "Cash management",
  },
  {
    id: 2,
    name: "Bank Account Management",
  },
  {
    id: 3,
    name: "FX management",
  },
  {
    id: 4,
    name: "List types of financial instruments covered: OTC and others",
  },
  {
    id: 5,
    name: "Commodity management",
  },
  {
    id: 6,
    name: "List types of financial instruments covered: OTC and regulated markets",
  },
  {
    id: 7,
    name: "Interest rate management",
  },
  {
    id: 8,
    name: "List types of financial instruments covered: OTC and regulated markets",
  },
  {
    id: 9,
    name: "Other financial instruments management (if any please specify them)",
  },
  {
    id: 10,
    name: "List types of financial instruments covered: OTC and regulated markets",
  },
  {
    id: 11,
    name: "Debt management",
  },
  {
    id: 12,
    name: "Please comprehnesively specify types of bank loans / committed-uncommited / floating-fixed rates / Capital markets operations / etc..",
  },
  {
    id: 13,
    name: "Intercompany management",
  },
  {
    id: 14,
    name: "Please specify if you produce Transfer Pricing reporting",
  },
  {
    id: 15,
    name: "Asset and portfolio management",
  },
  {
    id: 16,
    name: "Please specify types of investment products covered (e.g. MMF, ECP, Bonds, Tri-party repo's, bank deposits, equities,…)",
  },
  {
    id: 17,
    name: "Multilateral netting",
  },
  {
    id: 18,
    name: "Short-Term (13 week approach) Cash-Flow Forecasting",
  },
  {
    id: 19,
    name: "Long Term cash-flow forecasting (including stress and sensitivity testing)",
  },
  {
    id: 20,
    name: "Please specify the methods used for CFF",
  },
  {
    id: 21,
    name: "Bank guarantee management",
  },
  {
    id: 22,
    name: "Financial reporting",
  },
  {
    id: 23,
    name: "Reporting under IFRS and hedge accounting",
  },
  {
    id: 24,
    name: "Portfolio of financial instruments revaluation Mark-to-Market (i.e. IFRS 9)",
  },
  {
    id: 25,
    name: "Dash-board",
  },
  {
    id: 26,
    name: "EMIR reporting",
  },
  {
    id: 27,
    name: "FBAR reporting",
  },
  {
    id: 28,
    name: "Standard reporting library",
  },
  {
    id: 29,
    name: "Data Analytics, Big Data & AI",
  },
  {
    id: 30,
    name: "Finance & Compliance",
  },
  {
    id: 31,
    name: "IT Strategy and Implementation",
  },
  {
    id: 32,
    name: "Organisational Development",
  },
  {
    id: 33,
    name: "SAP Services",
  },
  {
    id: 34,
    name: "Software Development",
  },
  {
    id: 35,
    name: "Process Consulting Industry",
  },
  {
    id: 36,
    name: "Process Consulting Insurance",
  },
];

const companies = [
  {
    id: 1,
    name: "Necto",
    description:
      "We created Necto so corporates, banks, treasury technology providers, ERPs and PSPs can evolve beyond antiquated financial messaging. Our platform harnesses the power of next generation, API driven bank connectivity. As a team of proven Fintech innovators, we made it our mission to provide the rails for our partners and clients to transform how global treasury operates.",
    creationDate: "2023",
    productName: "BankLync",
    location: "US",
    companyCategories: [13],
    companySubcategories: [1, 18],
    logo: "",
    userId: 1,
  },
  {
    id: 2,
    name: "Nomentia",
    description:
      "Nomentia is a European leader in Cash and Treasury Management with roots going back all the way to 1984. Nomentia exists to empower treasury teams with the trusted support, knowledge, and clarity needed to positively impact their organizations everyday. We do so for over 1400 clients all around the world and we have offices in 8 locations.",
    creationDate: "2023",
    productName: "Nomentia",
    location: "Espoo, Finland",
    companyCategories: [13],
    companySubcategories: [
      1, 2, 3, 5, 7, 11, 13, 15, 17, 18, 19, 21, 22, 23, 24, 25, 27, 28,
    ],
    logo: "",
    userId: 1,
  },
  {
    id: 3,
    name: "SGX FX",
    description:
      "SGX FX offers a gateway to the global FX ecosystem, anchored by the world’s most liquid Asian FX futures exchange together with cutting-edge FX technology and workflow solutions from BidFX and MaxxTrader. SGX CurrencyNode, an FX electronic communication network, connects global participants anonymously to unique and deep OTC FX liquidity pools. For more information, visit www.sgx.com/fx.",
    creationDate: "2017",
    productName: "SGX FX",
    location: "Singapore",
    companyCategories: [1],
    companySubcategories: [1, 2, 3, 4],
    logo: "https://res.cloudinary.com/dq7aof6vb/image/upload/v1704227252/SGX_FX_Logo_RGB_hqlwmq.png",
    userId: 1,
  },
  {
    id: 4,
    name: "ConVista",
    description:
      "Convista is one of the leading consultancies for transformation. The consultancy supports its clients in the conceptualisation and implementation of new business processes and designs end-to-end solutions for SAP and IT projects. Together with its customers, Convista masters complex challenges by pooling its expertise and many years of industry and technology experience. For more than 20 years, Convista has been supporting customers from the insurance, industry, healthcare and energy sectors with SAP and IT projects - for an increasingly digitalised world. Convista is headquartered in Cologne and employs around 1,200 people worldwide.",
    creationDate: "1999",
    productName: "Software/Transformation",
    location: "Cologne, Germany",
    companyCategories: [13],
    companySubcategories: [],
    logo: "https://res.cloudinary.com/dq7aof6vb/image/upload/v1704227404/convista-Logo-RGB_evchto.png",
    userId: 1,
  },
  {
    id: 5,
    name: "ION Treasury",
    description:
      "ION was founded in 1998, and over the course of the past 20+ years it has become one of the world’s largest financial technology companies. ION is organized in five divisions: Treasury and Commodities (serving corporations, central banks, and financial institutions in treasury management and commodity management), Markets (serving the world’s leading capital markets companies), Analytics (providing data and analytics on capital raising, capital formation and M&A to capital markets, corporations and advisors through our Dealogic and Acuris brands) and Core Banking. ION Treasury is one of the largest providers of treasury and risk management solutions in the world. Its solutions are designed to meet the needs of organizations with varying complexities and at different stages of technology adoption. With over 1,100 customers in more than 35 countries around the world, ION Treasury is also a powerful community shaping the global treasury landscape. ION Treasury dedicates over 50% of its employee base to product innovation. Its financial strength, breadth of products, and commitment to continuous innovation enable it to deliver on treasury’s diverse and changing technology needs. ION Treasury’s portfolio of leading treasury products includes City Financials, IT2, ITS, Openlink, Reval, Treasura, and Wallstreet Suite as well as innovative tools and services that span across the entire solution set",
    creationDate: "1998",
    productName:
      "Wallstreet Suite, Reval, IT2, Openlink, ITS, City Financials, Treasura",
    location: "New York",
    companyCategories: [6],
    companySubcategories: [1, 2, 3],
    logo: "https://res.cloudinary.com/dq7aof6vb/image/upload/v1704227475/ion_kadbbu.png",
    userId: 2,
  },
  {
    id: 6,
    name: "Finologee",
    description:
      "Finologee is one of Luxembourg’s leading digital finance platform operators. The company facilitates the financial industry’s quest for optimisation and innovation with its compliant platforms and APIs for bank compliance (PSD2 for Banks & CEDRS), mobile payments and telecom routing (Digicash & Mpulse), KYC/AML (KYC Manager & Digital Onboarding), and banks and accounts management (LYNKS). Finologee serves more than 100 banks and institutions and handles more than 25 million transactions, messages and end-customer interactions per year on their behalf. Placing user experience, technology and compliance at the core of the business, Finologee’s founders have been blazing a trail for FinTech ‘made in Luxembourg’ since 2006. With a staff of 38, the company is ISO/IEC 27001 certified and is operating as a regulated financial services professional under a ‘Support PFS’ licence granted by the Ministry of Finance.",
    creationDate: "2017",
    productName: "LYNKS, PSD2 for banks, KYC Manager, CEDRS",
    location: "Leudelange, Luxembourg",
    companyCategories: [6],
    companySubcategories: [1, 2, 13],
    logo: "https://res.cloudinary.com/dq7aof6vb/image/upload/v1704227533/Finologee-new_tth8tq.png",
    userId: 2,
  },
  {
    id: 7,
    name: "TransferMate",
    description:
      "TransferMate – a subsidiary of CluneTech — is the world’s leading provider of B2B payments infrastructure-as-a-service, enabling companies to send and receive cross-border payments faster, easier and at lower cost. TransferMate, under the leadership of founder Terry Clune and CEO Sinead Fitzmaurice, has built one of the largest portfolios of payments licenses worldwide, including 51 US states and territories, to support trading in more than 201 countries and 141 currencies. Leading banks, fintechs and software providers partner with TransferMate to offer an enhanced user experience for their business customers. The company has created bespoke integrations for banks like ING and AIB, who are also investors in the company. The TransferMate API solution allows partners to digitalize the payments flow within their software, enabling all businesses to achieve significant time and financial savings.",
    creationDate: "2010",
    productName: "TransferMate Global Payments",
    location: "Kilkenny, Ireland",
    companyCategories: [5],
    companySubcategories: [3],
    logo: "https://res.cloudinary.com/dq7aof6vb/image/upload/v1704227581/Logo_Transfermate_gzfg1f.png",
    userId: 2,
  },
  {
    id: 8,
    name: "Onbrane",
    description:
      "Onbrane is a France-headquartered technology provider, focusing on developing innovative solutions for the debt market, covering vanilla, sustainable, and asset-backed debt products. Today, Onbrane is a leader in the digitalization of the short-term primary debt market, improving debt negotiation and issuance processes for some of the largest public, private, and financial institutions.",
    creationDate: "2018",
    productName: "The Onbrane platform",
    location: "Paris, France",
    companyCategories: [1],
    companySubcategories: [4, 11, 25],
    logo: "https://res.cloudinary.com/dq7aof6vb/image/upload/v1704227634/Onbrane1_tzwied.png",
    userId: 2,
  },
  {
    id: 9,
    name: "Trustpair",
    description:
      "Trustpair is the leading payment fraud prevention platform for large companies worldwide. Since 2017, Trustpair helps finance teams secure their entire P2P process, thanks to vendor account validation automation. The solution offers intuitive risk management and integrates directly with existing tools for more efficiency. The company raised 20 million euros in October 2022 to focus on their US expansion and R&D, staying at the cutting edge of fraud prevention technology.",
    creationDate: "2017",
    productName: "Trustpair",
    location: "Paris, France",
    companyCategories: [5],
    companySubcategories: [2, 25],
    logo: "https://res.cloudinary.com/dq7aof6vb/image/upload/v1704227682/Logo_Trustpair_qlgwpa.png",
    userId: 2,
  },
  {
    id: 10,
    name: "NX PARTNERS",
    description:
      "NX Partners is your partner to design your future treasury strategy. Our experts help you craft your future banking landscape, identify your system requirements and potential process changes. Our aim is to ensure a successful outcome. We guide you through the change process. Our experience has taught us to spot pitfalls early on and identify and remedy change management challenges.",
    creationDate: "2010",
    productName: "",
    location: "Belgium",
    companyCategories: [4],
    companySubcategories: [],
    logo: "https://res.cloudinary.com/dq7aof6vb/image/upload/v1704227735/NX-Partners_logo_Top-menu_dnpqbm.png",
    userId: 2,
  },
  {
    id: 11,
    name: "TreasurySpring",
    description:
      "Founded in 2017, TreasurySpring is a ground-breaking platform revolutionising institutional term cash investment. TreasurySpring makes it easy for companies from FTSE 100 corporations and leading multinationals to series A start-ups and scale-ups to access a simple and secure platform for their cash which delivers higher returns, reduces risk, and enables diversification. Over the past six years, TreasurySpring has built the underlying infrastructure which enables companies through a single digital onboarding to quickly place their excess cash in over 600 regulated and standardised products across seven different currencies. https://treasuryspring.com/",
    creationDate: "2017",
    productName: "",
    location: "Channel Islands",
    companyCategories: [1],
    companySubcategories: [1],
    logo: "https://res.cloudinary.com/dq7aof6vb/image/upload/v1704227792/treasuryspring_0_enehje.png",
    userId: 3,
  },
  {
    id: 12,
    name: "UTSIT",
    description:
      "UTSIT is a consultancy company, fully owned by UTSIT collaborators, founded in 2002 to bring to MNC’s corporate treasurers a combined IT and business expertise. Our mission is to support Corporate Treasurers during all steps of IT projects in treasury and payments: audit & benchmark, design target model, RFI/RFP, solution setup, roll-out and maintenance and PMO. UTSIT consultants are recognized for their expertise and soft skills to deliver projects in close relationship with Treasury and IT teams. For last 20 years UTSIT has developed strong relationships with Treasury and Payments vendors. This organization allows consultants to be certified or experienced experts with main solutions. UTSIT also works for banks, software vendors and SWIFT. Acting on behalf of biggest Corporates, UTSIT did take a crucial part in SWIFT for Corporate creation and take-off. Since this pioneer time, UTSIT kept a strong and friendly relationship with SWIFT and banks all over the world. In 2017, UTSIT established in Singapore to lead treasury projects for large corporates across the region. Since 2004 UTSIT is founder and co-organizer of UNIVERSWIFTNET, a yearly basis forum dedicated to corporate-to-bank relationship gathering 1,200 attendees from corporate treasuries, banks and vendors to dialogue about trends and innovation.",
    creationDate: "2002",
    productName: "",
    location: "France",
    companyCategories: [4],
    companySubcategories: [],
    logo: "https://res.cloudinary.com/dq7aof6vb/image/upload/v1704227844/utsit_kraquu.png",
    userId: 3,
  },
  {
    id: 13,
    name: "Finastra",
    description:
      "Finastra is a global provider of financial software applications and marketplaces, and launched the leading open platform for innovation, FusionFabric.cloud, in 2017. It serves institutions of all sizes, providing award-winning software solutions and services across Lending, Payments, Treasury & Capital Markets and Universal Banking (Retail, Digital and Commercial Banking) for banks to support direct banking relationships and grow through indirect channels, such as embedded finance and Banking as a Service. Its pioneering approach and commitment to open finance and collaboration is why it is trusted by over 8,000 institutions, including 45 of the world’s top 50 banks. For more information, visit finastra.com.",
    creationDate: "1995",
    productName: "SaaS solutions",
    location: "London UK",
    companyCategories: [6],
    companySubcategories: [],
    logo: "https://res.cloudinary.com/dq7aof6vb/image/upload/v1704227909/Finastra_etfdlo.png",
    userId: 3,
  },
  {
    id: 14,
    name: "Crowd Data Systems",
    description:
      '"Crowd Data Systems (CDS) was formed to develop the first “True SaaS" platform for corporate treasury, providing cash management, forecasting, treasury and risk management in a collaborative framework."',
    creationDate: "2022",
    productName: "Vision",
    location: "UK",
    companyCategories: [6],
    companySubcategories: [1, 2, 3, 7],
    logo: "https://res.cloudinary.com/dq7aof6vb/image/upload/v1704227961/Crowd_Data_Systems_old4gu.png",
    userId: 3,
  },
];

const seeder = () => {
  users.forEach((user) => Users.create(user));
  categories.forEach((category) => Categories.create(category));
  subCategories.forEach((subcategory) => SubCategories.create(subcategory));
  setTimeout(
    () => companies.forEach((company) => Companies.create(company)),
    500
  );
  console.log("EXITO");
};

module.exports = seeder;
