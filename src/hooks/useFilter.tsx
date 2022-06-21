import { useEffect, useState } from "react";
import { Work } from "../interfaces/Works";

export const useFilter = (worksArray: Work[]) => {
  const [type, setType] = useState("Full Stack");

  const [results, setResults] = useState<Work[]>([]);

  useEffect(() => {
    const filterResults = worksArray.filter((element) => element.type === type);
    setResults(filterResults);
  }, [type]);

  return { results, setType };
};
