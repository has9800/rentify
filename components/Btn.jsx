export const PrimaryBtn = ({ title }) => {
  return (
    <button className="bg-white text-[#231955] w-[100px] p-2 text-md rounded-sm gradient">
      {title}
    </button>
  );
};

export const SecondaryBtn = ({ title }) => {
  return (
    <button className="bg-[#111] text-white w-1/2 md:w-[200px] p-4 md:p-3 text-xs rounded-sm">
      {title}
    </button>
  );
};
