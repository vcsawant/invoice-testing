const invoiceIt = require("@rimiti/invoice-it");

const recipient = {
  company_name: "Receiver company",
  first_name: "Will",
  last_name: "Jameson",
  street_number: "20",
  street_name: "Rue Victor Hugo",
  zip_code: "77340",
  city: "Pontault-Combault",
  country: "France",
  phone: "06 00 00 00 00",
  mail: "will.jameson@test.com"
};

const emitter = {
  name: "Dim Solution",
  street_number: "15",
  street_name: "Rue Jean Jaures",
  zip_code: "75012",
  city: "Paris",
  country: "France",
  phone: "01 00 00 00 00",
  mail: "contact@dimsolution.com",
  website: "www.dimsolution.com"
};

const article1 = {
  description: "Mapco Regular Fill Gas",
  tax: 7,
  price: 30.09,
  qt: 1
};

const article2 = {
  description: "Round trip from LAX to BNA",
  tax: 11,
  price: 790.3,
  qt: 1
};

const order = invoiceIt.create(recipient, emitter);
console.log(order.logo);
order.logo =
  "https://cdn1.imggmi.com/uploads/2018/10/2/e44b03e2766ceebda30d5989182d337c-full.png";
console.log(order.logo);
order.article = [article1, article2];

order
  .getInvoice()
  .toHTML()
  .toFile("./order.html");

order
  .getInvoice()
  .toPDF()
  .toFile("./order.pdf")
  .then(() => {
    console.log("PDF file created.");
  })
  .catch(err => {
    console.log("unable to create pdf");
  });
