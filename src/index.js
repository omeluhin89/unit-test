export default function indicatorHealth(obj) {
  let health = '';
  if (obj.health > 50) {
    health = 'healthy';
  } else if (obj.health <= 50 && obj.health >= 15) {
    health = 'wounded';
  } else if (obj.health < 15) {
    health = 'critical';
  }
  return health;
}
