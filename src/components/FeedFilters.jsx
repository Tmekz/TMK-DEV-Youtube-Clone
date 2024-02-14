import React, { useEffect, useState } from "react";
import Button from "./Button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

const FeedFilters = ({ filtersList, selectedFiltersList, onSelect }) => {
  // need a usestate to hide the leftchevronicon/rightchevrnicon depending on the scrollbar X position
  const [isLeftVisible, setIsLeftVisible] = useState(false);
  const [isRightVisible, setIsRightVisible] = useState(true);

  // function to slide left or right
  const slide = (offset) => {
    const slider = document.getElementById("sliderID");
    if (slider) {
      slider.scrollLeft = slider.scrollLeft + offset;
    }
  };

  // Function to handle scroll event
  const handleScroll = () => {
    const slider = document.getElementById("sliderID");
    if (slider) {
      // put a condition ton setIsLeftVisible, if condition true then return "true" to isLeftVisible
      setIsLeftVisible(slider.scrollLeft > 0);
      //   put a condition to make sure that when the scroll x is full on the right, the right arrow will be hiden ( scrollLeft = position of the scroll x //// scrollwidth = full length of scroll 1607px //// clientWidth = the width use from the width of the element depending on the size of screen)
      setIsRightVisible(
        slider.scrollLeft < slider.scrollWidth - slider.clientWidth
      );
    }
  };

  // Listen to scroll event
  useEffect(() => {
    const slider = document.getElementById("sliderID");
    if (slider) {
      slider.addEventListener("scroll", handleScroll);
      return () => {
        slider.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <div className="overflow-x-hidden  relative ">
      <div
        id={"sliderID"}
        className="flex whitespace-nowrap gap-3 transition-transform scrollbar-hide  w-full select-none overflow-x-scroll"
      >
        {/* onclick or onselected the tag/filter has to be dark-bg */}
        {filtersList.map((filter) => (
          <Button
            onClick={() => onSelect(filter)}
            key={filter}
            variant={selectedFiltersList === filter ? "dark" : "default"}
            className={`"py-1 px-3 rounded-lg whitespace-nowrap`}
          >
            {filter}
          </Button>
        ))}
      </div>
      {isLeftVisible && (
        <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-white from-50% to-transparent w-24 h-full">
          <Button
            onClick={() => slide(-300)}
            variant={"ghost"}
            size={"icon"}
            className={`h-full aspect-square w-auto p-1.5`}
          >
            <ChevronLeftIcon />
          </Button>
        </div>
      )}
      {isRightVisible && (
        <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-l from-white from-50% to-transparent w-24 h-full flex justify-end">
          <Button
            onClick={() => slide(300)}
            variant={"ghost"}
            size={"icon"}
            className={"h-full aspect-square w-auto p-1.5"}
          >
            <ChevronRightIcon />
          </Button>
        </div>
      )}
    </div>
  );
};

export default FeedFilters;
