export default function sortMatchers(arrayMatchers) {
  arrayMatchers.sort((a, b) => b.health - a.health);
  return arrayMatchers;
}
