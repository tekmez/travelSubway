import { subwayLines } from "@/constants/SubwayLines";

type Route = {
  lines: string[];
  stations: string[][];
  transfers: string[];
};

// Graph structure containing given stops and lines
interface Graph {
  [station: string]: { [line: string]: string[] };
}

function buildGraph(): Graph {
  const graph: Graph = {};

  subwayLines.forEach((line) => {
    line.stations.forEach((station, index) => {
      if (!graph[station]) {
        graph[station] = {};
      }
      graph[station][line.name] = line.stations;

      // For two-way passages
      if (index > 0) {
        const previousStation = line.stations[index - 1];
        graph[station][line.name] = graph[station][line.name].concat([
          previousStation,
        ]);
      }
      if (index < line.stations.length - 1) {
        const nextStation = line.stations[index + 1];
        graph[station][line.name] = graph[station][line.name].concat([
          nextStation,
        ]);
      }
    });
  });

  return graph;
}

// Calculate the shortest path using Dijkstra's algorithm
function dijkstra(graph: Graph, start: string, end: string): Route {
  const distances: { [key: string]: number } = {};
  const previous: { [key: string]: string | null } = {};
  const visited: Set<string> = new Set();
  const queue: { station: string; distance: number }[] = [
    { station: start, distance: 0 },
  ];

  Object.keys(graph).forEach((station) => {
    distances[station] = Infinity;
    previous[station] = null;
  });

  distances[start] = 0;

  while (queue.length > 0) {
    queue.sort((a, b) => a.distance - b.distance);
    const { station } = queue.shift()!;
    if (visited.has(station)) continue;
    visited.add(station);

    Object.keys(graph[station]).forEach((line) => {
      graph[station][line].forEach((neighbor) => {
        if (!visited.has(neighbor)) {
          const newDistance = distances[station] + 1; // 1 unit distance for each pass
          if (newDistance < distances[neighbor]) {
            distances[neighbor] = newDistance;
            previous[neighbor] = station;
            queue.push({ station: neighbor, distance: newDistance });
          }
        }
      });
    });
  }

  // Follow the shortest path and return
  const path: string[] = [];
  let current: string = end;
  while (previous[current]) {
    path.unshift(current);
    current = previous[current]!;
  }
  path.unshift(start);

  // Determine lines and transfer points
  const lines: string[] = [];
  const stations: string[][] = [];
  const transfers: string[] = [];
  let currentLine: string | null = null;
  let currentRoute: string[] = [];

  path.forEach((station, index) => {
    const linesForStation = Object.keys(graph[station]);
    if (index > 0) {
      const previousStation = path[index - 1];
      const previousLines = Object.keys(graph[previousStation]);
      const commonLines = linesForStation.filter((line) =>
        previousLines.includes(line)
      );

      if (commonLines.length > 0) {
        const line = commonLines[0];
        if (currentLine !== line) {
          if (currentRoute.length > 0) {
            stations.push(currentRoute);
            lines.push(currentLine!);
            if (currentLine !== null && previousStation !== station) {
              transfers.push(station);
            }
          }
          currentLine = line;
          currentRoute = [station];
        } else {
          currentRoute.push(station);
        }
      }
    } else {
      currentLine = linesForStation[0];
      currentRoute.push(station);
    }
  });

  if (currentRoute.length > 0) {
    stations.push(currentRoute);
    lines.push(currentLine!);
  }

  return { lines, stations, transfers };
}

const graph = buildGraph();
export default (start: string, end: string) => dijkstra(graph, start, end);
