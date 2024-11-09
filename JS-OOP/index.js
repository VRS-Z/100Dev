// const circle = {
//   radius: 1,
//   location: {
//     x: 1,
//     y: 1,
//   },
//   draw: function () {
//     console.log("draw");
//   },
// };

// circle.draw();

// Factory Function
// function createCircle(radius) {
//   return {
//     radius,
//     draw: function () {
//       console.log("draw");
//     },
//   };
// }

// // const circle = createCircle(1);
// circle.draw();

// Constructor Function
function Circle(radius) {
  this.radius = radius;

  let defaultLocation = { x: 0, y: 0 };

  this.getDefaultLocation = function () {
    return defaultLocation;
  };

  this.draw = function () {
    console.log("draw");
  };

  Object.defineProperties(this, "defaultLocation", {
    get: function () {
      return defaultLocation;
    },
    set: function (value) {
      if (!value.x || !value.y) throw new Error("Invalid location.");

      defaultLocation = value;
    },
  });
}

const circle = new Circle(10);
circle.draw();

// for (let key in circle) {
//   if (typeof circle[key] !== "function") console.log(key, circle[key]);
// }

// const keys = Object.keys(circle);
// console.log(keys);

// if ("radius" in circle) console.log("Circle has a radius.");

// circle.location = { x: 1 };

// circle["location"] = { x: 1 };

// const propertyName = "center location";
// circle[propertyName] = { x: 1 };

// delete circle["location"];

// // Circle.call({}, 1);
// // Circle.apply({}, [1, 2, 3]);

// const another = new Circle(1);
