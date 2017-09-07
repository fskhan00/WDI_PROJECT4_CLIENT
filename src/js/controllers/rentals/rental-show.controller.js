angular
.module('propertyApp')
.controller('RentalsShowCtrl', RentalsShowCtrl);

RentalsShowCtrl.$inject = ['Rental', 'Request', '$stateParams', '$state', 'CurrentUserService'];
function RentalsShowCtrl(Rental, Request, $stateParams, $state, CurrentUserService) {
  const vm = this;

  vm.rental        = Rental.get({ id: $stateParams.id });
  vm.createRequest = createRequest;

  function createRequest() {
    const request = {
      sender_id: CurrentUserService.currentUser.id,
      receiver_id: vm.rental.user.id,
      rental_id: vm.rental.id,
      status: 'Pending'
    };

    Request
      .save(request)
      .$promise
      .then(() => $state.go('usersShow', { id: CurrentUserService.currentUser.id }));
  }
}
