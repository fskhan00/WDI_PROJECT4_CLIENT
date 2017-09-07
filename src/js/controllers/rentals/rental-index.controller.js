angular
.module('propertyApp')
.controller('RentalsIndexCtrl', RentalsIndexCtrl);

RentalsIndexCtrl.$inject = ['Rental'];
function RentalsIndexCtrl(Rental) {
  const vm = this;

  vm.rentals   = Rental.query();
}
