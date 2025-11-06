interface Props {
  className?: string;
  src: string;
  alt: string;
  name: string;
  cityJob: string;
  profession: string;
  company: string;
  changeMessage: string;
  testimony: string;
}

export const Testimony = ({
  className = "",
  src,
  alt,
  name,
  cityJob,
  profession,
  company,
  changeMessage,
  testimony,
}: Props) => {
  return (
    <div
      className={`flex flex-col sm:flex-row border items-center gap-2 w-[280px] sm:w-full lg:w-[80%] shadow-md border-amber-200 rounded-2xl ${className}`}
    >
      <div className="w-[280px] h-[180px] sm:w-[220px] sm:h-[220px] shrink-0 flex justify-center items-center  rounded-t-2xl sm:rounded-l-2xl ">
        <img src={src} alt={alt} className="object-cover w-full h-full rounded-t-2xl sm:rounded-tr-none sm:rounded-l-2xl" />
      </div>
      <div className="flex flex-col items-center gap-2 justify-center p-4">
        <div className="text-2xl text-center text-transparent  bg-clip-text bg-gradient-to-r from-amber-500 to-red-600">
          <strong> {name} </strong> en <span>{cityJob}</span>
        </div>
        <div className="text-center text-amber-950">
          <span>{profession}</span> en <strong>{company}</strong>
        </div>
        <q className="text-justify sm:mx-2 md:mx-6 lg:mx-10">
          {" "}
          {testimony} <strong>{changeMessage}</strong>{" "}
        </q>
      </div>
    </div>
  );
};
