import { Section, Motion } from "../wrapper";
import { services } from "../constants";

const ServiceSection = () => {
  return (
    <div className="grid gap-8 lg:grid-cols-3 grid-cols-1">
      {services.map((service, index) => (
        <div key={index} className="flex flex-col">
          <img src={service.img} alt="" className="relative" />
          <div className="w-fit bg-accent pt-20 px-5 -top-32">
            <h2
              className="font-medium font-poppin 
              text-xl lg:text-2xl"
            >
              {service.title}
            </h2>
            <p>{service.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const Service = Section(
  Motion(ServiceSection),
  "service",
  "bg-emerald-50 dark:bg-emerald-950",
  "service",
  "what we always do"
);

export default Service;
