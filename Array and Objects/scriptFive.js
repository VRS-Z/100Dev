const account = {
    name: "Alex",
    balance: 0,
    
    credit(amount) {
      this.balance += amount;
    },
    
    describe() {
      return `Owner: ${this.name}, Balance: ${this.balance}`;
    }
  };
  
  console.log(account.describe());
  
  account.credit(250);
  account.credit(-80);
  
  console.log(account.describe());
  