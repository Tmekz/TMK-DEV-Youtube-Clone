import React, { useState } from "react";
import Button from "./Button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

const FeedFilters = ({ filtersList, selectedFiltersList, onSelect }) => {
  // need a usestate to hide the leftchevronicon/rightchevrnicon depending on the scrollbar X position
  const [isLeftVisible, setIsLeftVisible] = useState(false);
  const [isRightVisible, setIsRightVisible] = useState(false);

  return (
    <div className="overflow-x-hidden relative">
      <div className="flex whitespace-nowrap gap-3 transition-transform w-[max-content]">
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
