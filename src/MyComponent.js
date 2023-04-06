import React, { useState, useEffect } from "react";
import yaml from "js-yaml";

function MyComponent() {
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("data.yaml");
        const yamlData = await response.text();
        const json = yaml.load(yamlData);
        setJsonData(json);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {jsonData && (
        <pre>{JSON.stringify(jsonData, null, 2)}</pre>
      )}

    </div>
  );
}

export default MyComponent;