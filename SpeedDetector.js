// Function Declaration to determine if the driver will retain their
// driving license or it will be suspended.
function spdDetector(limit) {
  //  constant speed limit
  const allowedSpeed = 70;
  const demeritPoints = math.floor(limit - allowedSpeed) * 0.2;
  if (limit <= allowedSpeed) {
    return "OK";
  } else if (demeritPoints > 12) {
    return "license suspende";
  } else {
    return `points:${demeritPoints}`;
  }
}

console.log(spdDetector());
