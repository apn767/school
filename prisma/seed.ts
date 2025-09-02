const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const schools = [
    {
      name: "Green Valley Public School",
      address: "12 MG Road, Sector 9",
      city: "Indore",
      state: "Madhya Pradesh",
      contact: "+91 9876543210",
      email_id: "contact@gvps.edu",
      image: "/schoolImages/greenvalley.jpg",
    },
    {
      name: "Sunrise International Academy",
      address: "45 Ring Road, Near Lakeview",
      city: "Bhopal",
      state: "Madhya Pradesh",
      contact: "+91 9823456781",
      email_id: "info@sunriseacademy.in",
      image: "/schoolImages/sunrise.jpg",
    },
    {
      name: "Bluebell High School",
      address: "Station Road, Civil Lines",
      city: "Nagpur",
      state: "Maharashtra",
      contact: "+91 9845612390",
      email_id: "hello@bluebellhigh.org",
      image: "/schoolImages/bluebell.jpg",
    },
    {
      name: "Riverdale Convent School",
      address: "21 Park Avenue, Central Zone",
      city: "Pune",
      state: "Maharashtra",
      contact: "+91 9811122334",
      email_id: "admissions@riverdaleconvent.com",
      image: "/schoolImages/riverdale.jpg",
    },
    {
      name: "Starlight Modern School",
      address: "Plot 88, Marine Lines",
      city: "Mumbai",
      state: "Maharashtra",
      contact: "+91 9765432109",
      email_id: "office@starlightmodern.edu",
      image: "/schoolImages/starlight.jpg",
    },
    {
      name: "Lotus Valley Academy",
      address: "Sector 56, Golf Course Road",
      city: "Gurgaon",
      state: "Haryana",
      contact: "+91 9812233445",
      email_id: "info@lotusvalley.ac.in",
      image: "/schoolImages/lotus.jpg",
    },
    {
      name: "Heritage Global School",
      address: "Opp. IT Park, NH-8",
      city: "Jaipur",
      state: "Rajasthan",
      contact: "+91 9821789456",
      email_id: "admissions@heritageglobal.edu",
      image: "/schoolImages/heritage.jpg",
    },
    {
      name: "Silver Oak International",
      address: "5 Residency Road, Near Polo Ground",
      city: "Ahmedabad",
      state: "Gujarat",
      contact: "+91 9921876543",
      email_id: "info@silveroakint.org",
      image: "/schoolImages/silveroak.jpg",
    },
    {
      name: "Crescent Public School",
      address: "Near ITI Chowk, Model Town",
      city: "Chandigarh",
      state: "Chandigarh",
      contact: "+91 9786543210",
      email_id: "crescent@schoolmail.com",
      image: "/schoolImages/crescent.jpg",
    },
    {
      name: "Springfield Academy",
      address: "Sector 14, Patel Nagar",
      city: "Delhi",
      state: "Delhi",
      contact: "+91 9810076543",
      email_id: "springfield@academy.org",
      image: "/schoolImages/springfield.jpg",
    },
  ];

  for (const s of schools) {
    await prisma.school.create({ data: s });
  }
}

main()
  .then(() => {
    console.log("✅ 10 demo schools inserted");
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
