import { HeadingTextType } from "@/interfaces/HeadingTextType";

const Heading = ({ first, second }: HeadingTextType) => {
  return (
    <div className="text-center mb-2">
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
        <span className="text-sky-300 drop-shadow-[0_0_15px_rgba(56,189,248,0.5)]">
          {first}
        </span>
        <span className="text-white"> {second}</span>
      </h2>
      <div className="mt-2 h-1 w-24 bg-sky-300 mx-auto rounded-full opacity-80"></div>
    </div>
  );
};

export default Heading;
