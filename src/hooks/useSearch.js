import { useState } from "react";

const useSearch = function (initValue = "") {
  const [queryValue, setQueryValue] = useState(initValue);

  const searchHandler = queryValue => {
    setQueryValue(queryValue);
  };

  return [queryValue, searchHandler];
};

export default useSearch;
