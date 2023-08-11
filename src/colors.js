const visitColors = {
  1: "#ffddcc",
  2: "#ffbb99",
  3: "#ff9966",
  4: "#ff7733",
  5: "#ff5500",
  6: "#cc4400",
  7: "#993300",
  8: "#662200",
  9: "#331100",
  max: "#000000",
};

export function getColorForVisit(visit) {
  if (Object.hasOwn(visitColors, visit)) {
    return visitColors[visit];
  } else {
    return visitColors.max;
  }
}