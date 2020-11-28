import React, { useEffect, useState } from "react";
function Data(props) {
  const [apiData, apiDataSet] = useState({});
  useEffect(() => {
    fetch("/api/data/hello")
      .then((data) => data.json())
      .then((data) => apiDataSet(data));
  }, []);
  return <div className="text-white">{JSON.stringify(apiData)}</div>;
}

export default Data;
