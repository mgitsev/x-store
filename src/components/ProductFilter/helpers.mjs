export function normalizeName(name) {
  const capitalize = (word) => word.charAt(0).toUpperCase() + word.slice(1);
  const splitCat = name.split("-");
  return splitCat.length > 1
    ? splitCat.map(capitalize).join(" ")
    : capitalize(name);
}
