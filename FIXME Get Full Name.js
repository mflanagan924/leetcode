class Dinglemouse {
    constructor(firstName, lastName) {
      this.firstName = firstName;  // Store parameters as instance variables
      this.lastName = lastName;
    }
  
    getFullName() {
      return `${this.firstName} ${this.lastName}`.trim(); // Trim in case lastName is empty
    }
  }