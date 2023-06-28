import { BsChevronRight, BsTrash } from "react-icons/bs";

import { Section, Motion } from "../wrapper";
import { services } from "../constants";
import Button from "../utils/Button";

const ServiceSection = () => {
  return (
    <div className="grid gap-x-8 md:gap-x-8 lg:grid-cols-3 grid-cols-1">
      {services.map((service, index) => (
        <div key={index} className="">
          <img src={service.img} alt="" className="relative z-10 w-48 mx-auto" />
          <div className="h-fit bg-white pt-20 pb-5 px-5 relative -top-20">
            <h2
              className="font-medium font-brand 
              text-xl lg:text-2xl"
            >
              {service.title}
            </h2>
            <p>{service.body}</p>
            <h5>
              Read More <BsChevronRight />
            </h5>
            <Button variant="primary" icon={<BsTrash />}>
              Learn More
            </Button>
            <Button>{<BsTrash />}</Button>
            <Button variant="outlined">Learn More</Button>
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
