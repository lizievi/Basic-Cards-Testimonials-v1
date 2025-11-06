import { Subtitle } from "../components/Subtitle";
import { Testimony } from "../components/Testimony/Testimony";

import { TestimonialsConstants } from "../components/Testimony/constants";

export const Testimonials = () => {
  return (
    <div className="flex flex-col items-center mx-10 gap-4 my-4">
      <Subtitle />

      {TestimonialsConstants.map(
        ({
          id,
          src,
          alt,
          name,
          cityJob,
          profession,
          company,
          changeMessage,
          testimony,
        }) => (
          <Testimony
            key={id}
            src={src}
            alt={alt}
            name={name}
            cityJob={cityJob}
            profession={profession}
            company={company}
            changeMessage={changeMessage}
            testimony={testimony}
          />
        )
      )}
    </div>
  );
};
