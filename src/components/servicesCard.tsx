import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { ScrollShadow } from "@heroui/scroll-shadow";
import { MdArrowOutward } from "react-icons/md";

import { Service } from "@/config/site";

type Props = {
  services: Service;
};

export const ServicesCard = ({ services }: Props) => {
  return (
    <div className="flex gap-5 md:gap-20 flex-wrap justify-around">
      {services.map((serviceInfo) => (
        <div key={serviceInfo.name} className="perspective-wrapper">
          <div
            className="card hover-card shadow-xl mt-5 rounded-lg md:!w-[30rem] transition-transform duration-300"
            style={{ backgroundImage: `url(${serviceInfo.image})` }}
          >
            <div className="translate-z-100 w-fit p-2 bg-primary/60 rounded">
              {serviceInfo.logo && (
                <serviceInfo.logo className="text-4xl text-white" />
              )}
            </div>
            <div className="card p-4 bg-gradient-to-br from-primary/80 from-50% to-primary/20 rounded-lg ">
              <h3 className="text-4xl text-white font-bold mb-4 translate-z-40 pl-3">
                {serviceInfo.name}
              </h3>
              <ScrollShadow className=" h-[10rem] translate-z-20">
                {serviceInfo.description &&
                  serviceInfo.description.map((paragraph, index) => {
                    return (
                      <p
                        key={index}
                        className="font-[450] text-white mb-4 pl-2 overflow-hidden"
                      >
                        {paragraph}
                      </p>
                    );
                  })}
              </ScrollShadow>
              <Button
                isExternal
                as={Link}
                className="button-hover text-sm font-normal text-white bg-blue-500 px-6 py-3 shadow-lg font-[500] translate-z-40 z-10 hidden lg:inline-flex m-2"
                endContent={<MdArrowOutward className="scale-[1.5]" />}
                href={serviceInfo.href}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
