import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import { Divider } from "@heroui/divider";
import { FaLocationArrow } from "react-icons/fa";
import { useEffect, useState, useRef } from "react";
import { TiHome } from "react-icons/ti";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { MdArrowOutward } from "react-icons/md";
import { Card, CardHeader, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";
import { GiReceiveMoney } from "react-icons/gi";
import { SiFusionauth } from "react-icons/si";
import { FaShippingFast } from "react-icons/fa";
import { RiSecurePaymentFill } from "react-icons/ri";
import { MdSpatialTracking } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { Chip } from "@nextui-org/react";

import CarouselComponent from "@/components/carouselComponent";
import { siteConfig, services } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { ServicesCard } from "@/components/servicesCard";

export default function IndexPage() {
  const adj1 = ["Reliable", "Timely", "Global", "Efficient", "Scalable"];
  const adj2 = ["Shipping", "Trading ", "Global Supply", "Enterprises"];
  const images = [
    "public/carosalImg1.webp",
    "public/carosalImg2.webp",
    "public/carosalImg3.webp",
    "public/carosalImg4.webp",
  ];
  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(0);

  const breadcrumbTrail = [{ label: "Home", icon: <TiHome /> }];
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const isDesktop = window.matchMedia("(min-width: 768px)").matches;

      if (!isDesktop) return;

      const parallaxLayer1 = document.getElementById("parallaxLayer1");
      const parallaxLayer2 = document.getElementById("parallaxLayer2");

      if (!parallaxLayer1 || !parallaxLayer2) return;

      const container = parallaxLayer1.parentElement;

      if (!container) return;

      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      const moveX1 = x * 15;
      const moveY1 = y * 15;
      const moveX2 = x * 20;
      const moveY2 = y * 20;

      const img1 = parallaxLayer1.querySelector("img");
      const img2 = parallaxLayer2.querySelector("img");

      if (img1 && moveY1 < 15 && moveY1 > -15) {
        img1.style.transition = "transform 0.2s ease-out";
        img1.style.transform = `translate(${moveX1}px, ${moveY1}px) scale(1)`;
      }
      if (img2 && moveY2 < 15 && moveY2 > -15) {
        img2.style.transition = "transform 0.2s ease-out";
        img2.style.transform = `translate(${moveX2}px, ${moveY2}px) scale(1)`;
      }
    };

    const clearParallax = () => {
      const img1 = document
        .getElementById("parallaxLayer1")
        ?.querySelector("img");
      const img2 = document
        .getElementById("parallaxLayer2")
        ?.querySelector("img");

      if (img1) img1.style.transform = "none";
      if (img2) img2.style.transform = "none";
    };

    const handleResize = () => {
      if (!window.matchMedia("(min-width: 768px)").matches) {
        clearParallax();
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex1((prevIndex1) => (prevIndex1 + 1) % adj1.length);
      setIndex2((prevIndex2) => (prevIndex2 + 1) % adj2.length);
    }, 5000); // change word every 5s

    return () => clearInterval(interval); // cleanup
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    let offset = 0;

    const scroll = () => {
      offset += 1;
      if (container) {
        container.scrollTop = offset;
        if (offset >= container.scrollHeight / 2) {
          offset = 0;
        }
      }
      requestAnimationFrame(scroll);
    };

    scroll();
  }, []);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <DefaultLayout breadcrumbs={breadcrumbTrail}>
      <section>
        <div
          className="flex w-[100vw] md:w-auto max-w-100vw -ml-[7.5vw] md:ml-0 bg-primary h-[50vw] lg:h-[35vw] overflow-hidden relative md:rounded-[10px]"
          style={{ boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)" }}
        >
          <div id="parallaxLayer1">
            <img
              alt="background"
              className="absolute -right-[10%] h-[105%] top-[-2.5%] mask-t-from-50%"
              src="public/background0.webp"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#005cbe] md:from-50% from-40% to-transparent md:to-70% z-1" />
          <div id="parallaxLayer2">
            <img
              alt="background"
              className="absolute -right-[10%] h-[100%]"
              src="public/background0A.png"
              style={{
                filter: "drop-shadow(0 5px 10px rgba(0, 0, 0, 0.4))",
              }}
            />
          </div>
          {/* Scrolling Text */}
          <div className="absolute top-[10%] left-[5%] text-white font-semibold leading-snug z-10">
            <span className="text-[clamp(1.8rem,4vw,5rem)]">
              Your Partner in{" "}
              <div className="scrolling-words">
                <span className="font-[800]">{adj1[index1]}</span>
              </div>
            </span>
            <br />
            <span className="text-[clamp(0.8rem,3.5vw,2rem)]">
              Logistics & Maritime Solutions for{" "}
              <span className="scrolling-words  ">
                <span className="font-[800]">{adj2[index2]}</span>
              </span>
            </span>
            <br />
            <Divider className="my-2 md:my-4" />
            <span
              className={`absolute text-[clamp(0.7rem,1.7vw,1.5rem)] md:text-white/50 lg:w-[40vw] md:w-[40vw] text-white/80 w-[50vw] font-[400]`}
            >
              From port-side operations to end-to-end freight management, we
              navigate your cargo safely across the globe. Partner with us for
              seamless, dependable shipping services.
              <br />
              <Button
                isExternal
                as={Link}
                className="text-sm font-normal text-white pulse-gradient px-6 py-3 shadow-lg font-[500] z-10 mt-10 hidden lg:inline-flex"
                endContent={<FaLocationArrow className="rocket-hover" />}
                href={"/contact-us"}
                target="_self"
              >
                Contact Us
              </Button>
              <Button
                isExternal
                as={Link}
                className="text-sm font-normal text-white bg-transparent border-[2px] border-white/30 px-6 py-3 shadow-lg font-[500] z-10 mt-10 hidden lg:inline-flex ml-5"
                endContent={<MdArrowOutward className="scale-[1.5]" />}
                href={siteConfig.links.sponsor}
              >
                Learn More
              </Button>
            </span>
            <br />
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center gap-4 py-5 md:py-[5vh] w-full">
        <div className="inline-block max-w-5xl text-center justify-center">
          <span className={title()}>Discover&nbsp;</span>
          <span className={title({ color: "blue" })}>
            Comprehensive Logistics Solutions&nbsp;
          </span>
          <span className={title()}>Tailored for Your Business Needs</span>
          <Divider className="my-4" />
          <div className={subtitle({ class: "mt-4" })}>
            We provide a full suite of logistics services to optimize our supply
            chain and drive efficiency.
          </div>
        </div>
        <ServicesCard services={services} />
      </section>
      <section>
        <div className="flex flex-wrap justify-around text-2xl font-semibold bg-primary/10 rounded-xl p-10 my-10 shadow-lg gap-4">
          <div ref={ref} className="flex items-center min-w-fit min-w-fit">
            <img
              alt="countries"
              className="h-[3em] md:h-[5em] w-auto p-0 mr-2"
              src="public/experienceIcon.png"
            />
            <Divider orientation="vertical" />
            <div className="flex flex-col pl-4 w-[35vw] md:w-[10vw]">
              <span className={title()}>
                {inView ? <CountUp duration={3} end={20} /> : "0"}+
              </span>
              Years Of Experience
            </div>
          </div>
          <div className="flex items-center min-w-fit">
            <img
              alt="countries"
              className="h-[3em] md:h-[5em] w-auto p-0 mr-2"
              src="public/countriesIcon.png"
            />
            <Divider orientation="vertical" />
            <div className="flex flex-col pl-4 w-[35vw] md:w-[10vw]">
              <span className={title()}>
                {inView ? <CountUp duration={3} end={194} /> : "0"}+
              </span>
              Countries Covered
            </div>
          </div>
          <div className="flex items-center min-w-fit">
            <img
              alt="countries"
              className="h-[3em] md:h-[5em] w-auto p-0 mr-2"
              src="public/globalPartnerIcon.png"
            />
            <Divider orientation="vertical" />
            <div className="flex flex-col pl-4 w-[35vw] md:w-[10vw]">
              <span className={title()}>
                {inView ? <CountUp duration={3} end={10000} /> : "0"}+
              </span>
              Overseas Partners
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center gap-4 py-5 md:py-[5vh] w-full">
        <div className="inline-block max-w-4xl text-center justify-center">
          <span className={title()}>Why choose </span>
          <span className={title({ color: "blue" })}>
            Mansi Shipping Agency ?&nbsp;
          </span>
          <Divider className="my-4" />
          <div className={subtitle({ class: "mt-4" })}>
            Simplifying logistics with trust, technology & transparency.
          </div>
        </div>
        <div className="md:hidden flex w-[90vw] h-full mx-10 overflow-hidden relative border rounded-lg shadow">
          <CarouselComponent imageUrls={images} />
        </div>
        <div className="flex flex-col md:flex-row gap-10 mt-6 w-full h-full md:h-[80vh] justify-around">
          <div className="flex flex-col gap-10 h-min">
            <Card
              isFooterBlurred
              className="border-none h-[30vh] w-[85vw] md:h-full md:w-[20vw] justify-center"
              radius="lg"
            >
              <CardHeader className="absolute z-10 top-1 flex-col items-start">
                <p className="text-md text-primary uppercase font-bold">
                  Authorized Economic Operator
                </p>
              </CardHeader>
              <Image
                isZoomed
                alt="Relaxing app background"
                className="z-0"
                src="/public/AEO.jpg"
              />
              <CardFooter className="absolute bg-primary/10 bottom-0 z-10 border-t-1 border-default-600">
                <div className="flex flex-grow gap-2 items-center">
                  <RiSecurePaymentFill color="#005cbe" size={30} />
                  <div className="flex flex-col">
                    <p className="text-md text-primary font-[1000]">
                      Certified & Trusted
                    </p>
                    <p className="text-small text-primary/60">
                      Officially recognized global partner.
                    </p>
                  </div>
                </div>
              </CardFooter>
            </Card>
            <Card
              isFooterBlurred
              className="border-none h-[30vh] w-[85vw] md:h-full md:w-[20vw] justify-center"
              radius="lg"
            >
              <CardHeader className="absolute z-10 top-1 flex-col items-start">
                <p className="text-md text-primary uppercase font-bold">
                  Real-Time Tracking
                </p>
              </CardHeader>
              <Image
                isZoomed
                alt="Relaxing app background"
                className="z-0"
                src="/public/realTimeTracking.jpg"
              />
              <CardFooter className="absolute bg-primary/10 bottom-0 z-10 border-t-1 border-default-600">
                <div className="flex flex-grow gap-2 items-center">
                  <MdSpatialTracking color="#005cbe" size={30} />
                  <div className="flex flex-col">
                    <p className="text-md text-primary font-[1000]">
                      Live Shipment Updates
                    </p>
                    <p className="text-small text-primary/60">
                      Track your cargo anytime.
                    </p>
                  </div>
                </div>
              </CardFooter>
            </Card>
            <Card
              isFooterBlurred
              className="border-none h-[30vh] w-[85vw] md:h-full md:w-[20vw] justify-center"
              radius="lg"
            >
              <CardHeader className="absolute z-10 top-1 flex-col items-start">
                <p className="text-md text-primary uppercase font-bold">
                  24/7 Support
                </p>
              </CardHeader>
              <Image
                isZoomed
                alt="Relaxing app background"
                className="z-0"
                src="/public/support.png"
              />
              <CardFooter className="absolute bg-primary/10 bottom-0 z-10 border-t-1 border-default-600">
                <div className="flex flex-grow gap-2 items-center">
                  <BiSupport color="#005cbe" size={30} />
                  <div className="flex flex-col">
                    <p className="text-md text-primary font-[1000]">
                      Always Available
                    </p>
                    <p className="text-small text-primary/60">
                      Help anytime, every time.
                    </p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
          <div className="hidden md:flex md:w-[30vw] h-full mx-10 overflow-hidden relative border rounded-lg shadow">
            <CarouselComponent imageUrls={images} />
          </div>
          <div className="flex flex-col gap-10">
            <Card
              isFooterBlurred
              className="border-none h-[30vh] w-[85vw] md:h-full md:w-[20vw] justify-center"
              radius="lg"
            >
              <CardHeader className="absolute z-10 top-1 flex-col items-start">
                <p className="text-md text-primary uppercase font-bold">
                  Fast & Efficient Delivery
                </p>
              </CardHeader>
              <Image
                isZoomed
                alt="Relaxing app background"
                className="z-0"
                src="/public/fastDelivery.webp"
              />
              <CardFooter className="absolute bg-primary/10 bottom-0 z-10 border-t-1 border-default-600">
                <div className="flex flex-grow gap-2 items-center">
                  <FaShippingFast color="#005cbe" size={30} />
                  <div className="flex flex-col">
                    <p className="text-md text-primary font-[1000]">
                      Speed & Precision
                    </p>
                    <p className="text-small text-primary/60">
                      Timely and accurate delivery.
                    </p>
                  </div>
                </div>
              </CardFooter>
            </Card>
            <Card
              isFooterBlurred
              className="border-none h-[30vh] w-[85vw] md:h-full md:w-[20vw] justify-center"
              radius="lg"
            >
              <CardHeader className="absolute z-10 top-1 flex-col items-start">
                <p className="text-md text-primary uppercase font-bold">
                  Competitive Rates
                </p>
              </CardHeader>
              <Image
                isZoomed
                alt="Relaxing app background"
                className="z-0"
                src="/public/competitivePricing.png"
              />
              <CardFooter className="absolute bg-primary/10 bottom-0 z-10 border-t-1 border-default-600">
                <div className="flex flex-grow gap-2 items-center">
                  <GiReceiveMoney color="#005cbe" size={30} />
                  <div className="flex flex-col">
                    <p className="text-md text-primary font-[1000]">
                      Affordable Logistics
                    </p>
                    <p className="text-small text-primary/60">
                      Best value guaranteed always.
                    </p>
                  </div>
                </div>
              </CardFooter>
            </Card>
            <Card
              isFooterBlurred
              className="border-none h-[30vh] w-[85vw] md:h-full md:w-[20vw] justify-center"
              radius="lg"
            >
              <CardHeader className="absolute z-10 top-1 flex-col items-start">
                <p className="text-md text-primary uppercase font-bold">
                  Data Security
                </p>
              </CardHeader>
              <Image
                isZoomed
                alt="Relaxing app background"
                className="z-0"
                src="/public/dataSecurity.webp"
              />
              <CardFooter className="absolute bg-primary/10 bottom-0 z-10 border-t-1 border-default-600">
                <div className="flex flex-grow gap-2 items-center">
                  <SiFusionauth color="#005cbe" size={30} />
                  <div className="flex flex-col">
                    <p className="text-md text-primary font-[1000]">
                      Safe & Secured
                    </p>
                    <p className="text-small text-primary/60">
                      Your data stays protected.
                    </p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
