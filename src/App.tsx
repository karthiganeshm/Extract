import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { ExtractSelectWithTag } from "./components/ExtractSelectWithTag";
import { originalDataHeaders } from "./utils/data";
function App() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleTagsChange = (tags: string[]) => {
    console.log(tags, "app tags");
    setSelectedTags(tags);
  };

  return (
    <div>
      <ExtractSelectWithTag
        originalDataHeaders={originalDataHeaders}
        onTagsChange={handleTagsChange}
      />
      <div>{selectedTags}</div>
    </div>
  );
}

export default App;
