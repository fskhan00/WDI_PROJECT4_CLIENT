angular
  .module('propertyApp')
  .controller('UsersShowCtrl', UsersShowCtrl);

UsersShowCtrl.$inject = ['User', 'Request', '$stateParams'];
function UsersShowCtrl(User, Request, $stateParams) {
  const vm = this;

  vm.user = User.get({ id: $stateParams.id });

  vm.acceptRequest = acceptRequest;
  vm.rejectRequest = rejectRequest;

  function acceptRequest(request) {
    Request
      .accept({ id: request.id })
      .$promise
      .then(() => console.log('request has been accepted!'));
  }

  function rejectRequest(request) {
    Request
      .reject({ id: request.id })
      .$promise
      .then(() => console.log('request has been rejected!'));
  }
}
