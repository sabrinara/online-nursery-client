import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import sliderImage1 from "@/assets/banner.jpg";
import sliderImage2 from "@/assets/banner2.jpg";
import sliderImage3 from "@/assets/banner3.jpg";
import { Button } from "../ui/button";
import React from "react";

export function HeroSection() {
  const sliderData = [
    {
      id: 1,
      image: sliderImage1,
      subText: "NatureNest Destination",
      text: "Leopard Lily",
      details: "The symbol of strength and resilience. Purify your home {{br}} with leopard lily plants.",
    },
    {
      id: 2,
      image: sliderImage2,
      subText: "NatureNest Destination",
      text: "Calathea Plant",
      details: "It is a long established fact a reader by {{br}} the readable content looking.",
    },
    {
      id: 3,
      image: sliderImage3,
      subText: "NatureNest Destination",
      text: "Spring Plant",
      details: "We’re Spring Plant, When you’ve got your {{br}} health, you got everything.",
    },
  ];
  
  return (
    <div className="relative w-full h-[500px] mt-6">
      <Carousel
        className="overflow-hidden rounded-lg shadow-lg"
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent className="flex">
          {sliderData.map((slider) => (
            <CarouselItem key={slider.id} className="min-w-full">
              <Card className="bg-transparent">
                <CardContent
                  className="flex  h-[500px] p-0"
                  style={{
                    backgroundImage: `url(${slider.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    height: "500px",
                    transition: "transform 0.5s ease", // Equivalent to transition-transform duration-500
                    transform: "scale(1)", // Default scale
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")} // Equivalent to hover:scale-105
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")} // Reset the scale on hover out
                >
                  <div className=" mt-36 ml-40 text-start">
                    <h5 className="font-jost text-base font-medium pb-2 tracking-widest uppercase">{slider.subText}</h5>
                    <h2 className="text-6xl font-bold mb-2 text-green-950">
                      {slider.text}
                    </h2>
                    <p className="text-md font-medium mt-4">
                      {slider.details?.split("{{br}}")?.map((line, index) => (
                        <React.Fragment key={index}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                    </p>
                    <Button className="border-2 border-green-800 px-6 py-5 rounded-none bg-transparent text-green-800 mt-4 hover:bg-green-950 hover:text-white">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full cursor-pointer hover:bg-opacity-75 transition-opacity duration-300">
          &#9664;
        </CarouselPrevious>
        <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full cursor-pointer hover:bg-opacity-75 transition-opacity duration-300">
          &#9654;
        </CarouselNext>
      </Carousel>
    </div>
  );
}
