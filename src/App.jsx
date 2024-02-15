import React, { useState } from "react";
import Header from "./components/Header";
import FeedFilters from "./components/FeedFilters";
import { filtersList, videos } from "./data/home";
import VideoGridItem from "./components/VideoGridItem";
import Sidebar from "./components/Sidebar";

const App = () => {
  // we need a usestate to change the color of the filtersCategories that has been selected ISACTIVE
  const [selectedFiltersList, setSelectedFiltersList] = useState(
    filtersList[0]
  );

  return (
    <div className="flex flex-col max-h-screen">
      <Header />
      
      {/* We want the sidebar on the left to have a auto-size and the second colon on the right to take the full width available */}
      <div className="grid grid-cols-[auto,1fr] flex-grow overflow-auto">
        {/* sidebar on the left */}
        <Sidebar />

        {/* maindiv on the right with cards*/}
        <div className="overflow-x-hidden  px-8 pb-4">
          <div className="sticky top-0 bg-white z-10 pb-4">
            {/* tags feed filter on the top */}
            <FeedFilters
              filtersList={filtersList}
              selectedFiltersList={selectedFiltersList}
              onSelect={setSelectedFiltersList}
            />
          </div>
          <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(350px,1fr))]">
            {videos.map((videoItem) => (
              <VideoGridItem key={videoItem.id} {...videoItem} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
