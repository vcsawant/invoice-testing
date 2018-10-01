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

const order = invoiceIt.create(recipient, emitter);

order.order
  .getOrder()
  .toPDF()
  .toFile("./order.pdf")
  .then(() => {
    console.log("PDF file created.");
  })
  .catch(err => {
    console.log("unable to create pdf");
  });
