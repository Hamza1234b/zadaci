const objects = [
  { object: "car", color: "black" },
  { object: "bike", color: "blue" },
  { object: "house", color: "white" },
  { object: "phone case", color: "blue" },
  { object: "tire", color: "black" },
  { object: "umbrella", color: "yellow" },
]
// 1. način
const blueObjects = objects.filter(function (object) {
  return object.color == "blue"
})
console.log(blueObjects)

// 2. način
function filterBlueObjects(array) {
  return array.filter(function (object) {
    if (object.color == "blue") return object
  })
}
// console.log(filterBlueObjects(objects))
