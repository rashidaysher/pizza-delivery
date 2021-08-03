$(document).ready(function() {
   
      $("#text-center").submit(function(event) {
        
        function flavor() {
          var pizzaFlavour = document.getElementById("flavor").value;
          return parseInt(pizzaFlavour);
        }
        function size() {
          var pizzaSize = document.getElementById("size").value;
          return parseInt(pizzaSize);
        }
        function crust() {
          var pizzaCrust = document.getElementById("crust").value;
          return parseInt(pizzaCrust);
        }
        function topping() {
          var pizzaTopping = document.getElementById("topping").value;
          return parseInt(pizzaTopping);
        }
        function number() {
          var pizzaNumber = document.getElementById("quantity").value;
          return parseInt(pizzaNumber);
        }
    
        //a constructor to create objects/instances of a user's orders
        function Order(flavor, size, crust, topping, quantity) {
          this.newFlavor = flavor;
          this.newSize = size;
          this.newCrust = crust;
          this.newTopping = topping;
          this.newQuantity = quantity;
        }
    
        //an object/instance (of the above constructor) to save the users order
        var userInput = new Order(flavor(), size(), crust(), topping(), number());
    
        //a variable to store the total expenditure of the user
        var totalCost =
          (userInput.newSize +
            userInput.newCrust +
            userInput.newTopping +
            userInput.newFlavor) *
          userInput.newQuantity;
    
        //prompts for the user
        alert("Thank you for choosing us, your total amount is" + totalCost);
        prompt("delivery");
        prompt("enter email address");
        prompt("enter phone number");
        prompt("enter address");
        alert("WE do value our customers, your delivery will be made at, kindly have cash ready ");
    
        //a method to reset the form after all operations have been completed
        $("#text-center").reset();
    
        event.preventDefault();
      });
    });