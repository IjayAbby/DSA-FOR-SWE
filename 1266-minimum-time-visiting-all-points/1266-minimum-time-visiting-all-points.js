/**
 * @param {number[][]} points
 * @return {number}
 */
const minTimeToVisitAllPoints = points =>
  points
    .slice(0, points.length - 1)
    .reduce(
      (acc, [x, y], idx) =>
        acc +
        Math.max(
          Math.abs(x - points[idx + 1][0]),
          Math.abs(y - points[idx + 1][1]),
        ),
      0,
    );