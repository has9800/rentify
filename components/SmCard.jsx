import Image from "next/image";

const SmCard = ({ title, desc, src, address, price }) => {
  return (
    <div className="flex flex-col w-[350px] min-w-[350px] text-neutral-800 bg-neutral-200 rounded-md m-5 hover:bg-neutral-300 hover:transition-all ease-in-out cursor-pointer">
      <div className="relative overflow-hidden">
        <Image
          src={src}
          alt={title}
          width={350}
          height={200}
          objectFit="cover"
        />
      </div>
      <div className="p-3">
        <div>
          <h1 className="text-xl mb-2 font-semibold">{title}</h1>
          <p className="text-sm">{desc}</p>
        </div>
        <div className="flex flex-row items-center justify-between mt-3">
          <p className="text-xs text-neutral-500">{address}</p>
          <p className="font-semibold text-lg">
            ${price} <span className="text-xs font-normal"> per month</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SmCard;
