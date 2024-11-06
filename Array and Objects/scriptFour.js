const r = Number(prompt("Enter the circle radius:"));

const circle = {
  radius: r,
  circumference: function() {
    return 2 * Math.PI * this.radius;
  },
  area: function() {
    return Math.PI * this.radius ** 2;
  }
};

console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);
