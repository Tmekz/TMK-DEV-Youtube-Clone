import React from "react";
import Button from "./Button";

const FeedFilters = ({ filtersList, selectedFiltersList, onSelect }) => {
  return (
    <div className="overflow-x-hidden relative">
      <div className="flex whitespace-nowrap gap-3 transition-transform w-[max-content]">
        {filtersList.map((filter) => (
          <Button
            onClick={() => onSelect(filter)}
            key={filter}
            variant={selectedFiltersList === filter ? "dark" : "default"}
            className={"py-1 px-3 rounded-lg whitespace-nowrap"}
          >
            {filter}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default FeedFilters;
