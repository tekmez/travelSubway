import { subwayLines } from "@/constants/SubwayLines";
import { useState, useEffect } from "react";

const useRouteSearch = (query: string): string[] => {
  const [results, setResults] = useState<string[]>([]);

  useEffect(() => {
    if (query.length >= 1) {
      const matchingStations = subwayLines.flatMap((line) =>
        line.stations.filter((station) =>
          station.toLowerCase().startsWith(query.toLowerCase())
        )
      );
      const uniqueStations = Array.from(new Set(matchingStations));
      setResults(uniqueStations);
    } else {
      setResults([]);
    }
  }, [query]);

  return results;
};

export default useRouteSearch;
