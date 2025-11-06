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
      className={`flex flex-col sm:flex-row border items-center gap-2 w-[250px] sm:w-full lg:w-[80%] shadow-md border-amber-600 rounded-2xl ${className}`}
    >
      <div className="overflow-hidden w-[250px] h-[150px] sm:w-[220px] sm:h-[220px] shrink-0 flex justify-center items-center">
        <img src={src} alt={alt} className="object-cover w-full h-full rounded-l-2xl" />
      </div>
      <div className="flex flex-col items-center gap-2 justify-center p-4">
        <div>
          <strong> {name} </strong> en <span>{cityJob}</span>
        </div>
        <div className="text-center text-amber-950">
          <span>{profession}</span> en <strong>{company}</strong>
        </div>
        <q className="text-justify">
          {" "}
          {testimony} <strong>{changeMessage}</strong>{" "}
        </q>
      </div>
    </div>
  );
};
