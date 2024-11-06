const aurora = {
     name: "Aurora",
     health: 150,
     strength: 25,
     xp: 0,
  
// Return the character description
     describe() {
       return `${this.name} has ${this.health} health points and ${this
         .strength} as strength and ${this.xp} XP points`;
     }
   };

   aurora.health -= 20;

   aurora.strength += 10;

   aurora.xp += 15;

 console.log(aurora.describe());
