import { Navbar, SmCard, ScrollXGrid, Footer, Hero } from "@/components/index";

const data = [
  {
    id: 1,
    title: "2 bedroom condo",
    desc: "Spacious 2 bedroom condo located downtown near central square",
    src: "https://img.zumpercdn.com/487879850/1280x960?fit=crop&h=260&w=414",
    address: "123 Lorem Ipsum Drive",
    price: "1200",
  },
  {
    id: 2,
    title: "Spacious loft",
    desc: "Spacious loft located near Lorem Park. Great view of the mountains",
    src: "https://assets.site-static.com/blogphotos/2864/12055-edmonton-lofts.jpg",
    address: "Ipsum Road",
    price: "1400",
  },
  {
    id: 3,
    title: "3 bedroom apartment for rent",
    desc: "Rent this apartment located near Lorem High and Ipsum School. Great for famillies",
    src: "https://cdngeneral.rentcafe.com/dmslivecafe/2/101498/012_1405_POINT_215398_299162.jpg",
    address: "One Street & Lopsem Avenue",
    price: "1370",
  },
  {
    id: 4,
    title: "Townhouse for rent",
    desc: "Beautiful townhouse for rent. Conviniently located near transit stations and UofL University",
    src: "https://cdn.vox-cdn.com/thumbor/kLUAySr8P1A1a-aM8ojlhkyBKno=/0x0:1200x750/1200x800/filters:focal(504x279:696x471)/cdn.vox-cdn.com/uploads/chorus_image/image/61212375/Kitchen.0.0.1488492754.0.jpg",
    address: "123 Road NW",
    price: "1390",
  },
  {
    id: 5,
    title: "1 bedroom for rent near Lake Lorem",
    desc: "Spacious 1 bedroom located near Lake Lorem. Fantastic camping and hiking area all year round.",
    src: "https://img-2.homely.com.au/S3/l-AgentBox-GhYlGvPm90iI-7Gd7KVkOw.jpg?resizeType=cover&enlarge=true&format=jpeg&quality=60&width=980&height=654",
    address: "Ipsum Road",
    price: "1250",
  },
];

const Dashboard = () => {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <div className="container">
        <h1 className="text-2xl text-left md:text-4xl font-semibold text-[#111] ml-3 p-7 -mb-7">
          Find newly posted homes 🎉
        </h1>
        <ScrollXGrid>
          {data.map(({ id, title, desc, src, address, price }) => (
            <SmCard
              key={id}
              title={title}
              desc={desc}
              src={src}
              address={address}
              price={price}
            />
          ))}
        </ScrollXGrid>
      </div>
      <div className="container">
        <h1 className="text-2xl text-left md:text-4xl font-semibold text-[#111] ml-3 p-7 -mb-7">
          Or check our most viewed listings 👀 ...
        </h1>
        <ScrollXGrid>
          {data.reverse().map(({ id, title, desc, src, address, price }) => (
            <SmCard
              key={id}
              title={title}
              desc={desc}
              src={src}
              address={address}
              price={price}
            />
          ))}
        </ScrollXGrid>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
