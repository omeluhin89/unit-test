export default function indicatorHealth(obj) {
  let health = '';
  if (obj.health > 50) {
    health = 'healthy';
  } else if (obj.health < 15) {
    health = 'critical';
  } else {
    health = 'wounded';
  }
  return health;
}
