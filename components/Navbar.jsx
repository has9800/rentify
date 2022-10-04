import { PrimaryBtn } from "@/components/Btn";

const Navbar = () => {
  return (
    <div className="flex flex-row items-center justify-between p-5 bg-[#111] text-[#EAEAEA] w-screen">
      <div className="flex flex-row items-center">
        <h1 className="font-bold text-3xl gradient ff-primary italic">
          RentCity
        </h1>
        <span className="text-2xl ml-[7px]">🌆</span>
      </div>
      <div>
        <PrimaryBtn title="Login" />
      </div>
    </div>
  );
};

export default Navbar;

// colors = {
//   1: "472D2D",
//   2: "553939",
//   3: "704F4F",
//   4: "A77979",
//   5: "967E76",
//   6: "D7C0AE",
// };
