import React, { useState } from "react";
import Header from "./components/Header";
import FeedFilters from "./components/FeedFilters";
import { filtersList } from "./data/home";

const App = () => {
  // we need a usestate to change the color of the filtersCategories that has been selected ISACTIVE
  const [selectedFiltersList, setSelectedFiltersList] = useState(
    filtersList[0]
  );

  return (
    <div className="flex flex-col max-h-screen ">
      <Header />
      {/* We want the sidebar on the left to have a auto-size and the second colon on the right to take the full width available */}
      <div className="grid grid-cols-[auto,1fr] flex-grow overflow-auto">
        {/* sidebar on the left */}
        <div className="w-24 h-screen bg-cyan-500 text-center">SIDEBAR</div>

        {/* maindiv with cards on the right */}
        <div className="overflow-x-hidden px-8 pb-4">
          <div className="sticky top-0 bg-white z-10 pb-4">
            {/* tags feed filter on the top */}
            <FeedFilters
              filtersList={filtersList}
              selectedFiltersList={selectedFiltersList}
              onSelect={setSelectedFiltersList}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
