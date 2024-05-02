import { useState } from "react";
import CategoryPills from "./assets/components/CategoryPills";
import { categories } from "./data/home";
import PageHeader from "./layout/PageHeader";
function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  return (
    <div className="flex max-h-screen flex-col">
      <PageHeader />
      <div className="flex-grow-1 grid grid-cols-[auto,1fr] overflow-auto ">
        <div>sidebar</div>
        <div className="overflow-x-hidden px-8 pb-4">
          <div className="sticky top-0 z-10 bg-white pb-4">
            <CategoryPills
              categories={categories}
              selectedCategory={selectedCategory}
              onSelect={setSelectedCategory}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
