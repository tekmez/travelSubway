import { subwayLines } from "@/constants/SubwayLines";

type Route = {
  startLine: string | null;
  startRoute: string[];
  transferStation: string | null;
  endLine: string | null;
  endRoute: string[];
};

function findRoute(start: string, end: string): Route {
  const route: Route = {
    startLine: null,
    startRoute: [],
    transferStation: null,
    endLine: null,
    endRoute: [],
  };

  const startLine = subwayLines.find((hat) => hat.stations.includes(start));
  const endLine = subwayLines.find((hat) => hat.stations.includes(end));

  if (!startLine || !endLine) {
    console.log("Giriş veya çıkış noktası hatlar üzerinde bulunamadı.");
    return route;
  }

  if (startLine === endLine) {
    console.log("Giriş ve çıkış noktaları aynı hat üzerinde.");
    return route;
  }

  const commonStop = startLine.stations.find((deger) =>
    endLine.stations.includes(deger)
  );

  if (!commonStop) {
    console.log(
      "Giriş ve çıkış noktaları aynı hat üzerinde değil ve aktarma istasyonu bulunamadı."
    );
    return route;
  }

  const startLineCommonStopIndex = startLine.stations.indexOf(commonStop || "");
  const endLineCommonStopIndex = endLine.stations.indexOf(commonStop || "");

  const startIndex = startLine.stations.indexOf(start);
  const endIndex = endLine.stations.indexOf(end);

  let baslangicRota: string[] = [];
  if (startIndex > startLineCommonStopIndex) {
    baslangicRota = startLine.stations
      .slice(startLineCommonStopIndex, startIndex + 1)
      .reverse();
  }
  if (startIndex < startLineCommonStopIndex) {
    baslangicRota = startLine.stations.slice(
      startIndex,
      startLineCommonStopIndex + 1
    );
  }

  let bitisRota: string[] = [];
  if (endIndex > endLineCommonStopIndex) {
    bitisRota = endLine.stations.slice(endLineCommonStopIndex, endIndex + 1);
  }
  if (endIndex < endLineCommonStopIndex) {
    bitisRota = endLine.stations
      .slice(endIndex, endLineCommonStopIndex + 1)
      .reverse();
  }

  route.startLine = startLine.name;
  route.startRoute = baslangicRota;
  route.transferStation = commonStop || null;
  route.endLine = endLine.name;
  route.endRoute = bitisRota;

  return route;
}

export default findRoute;
