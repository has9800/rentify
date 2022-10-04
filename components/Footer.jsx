const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-10 bg-neutral-300 opacity-75">
      <div>
        <h3 className="font-semibold ff-secondary text-lg text-black">
          rentify
        </h3>
      </div>
      <div className="my-5">
        <p className="text-xs text-black">Find your next home faster!</p>
      </div>
      <div>
        <p className="text-xs text-black">
          Copyright <span className="">{year}</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
