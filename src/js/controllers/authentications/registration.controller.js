angular
  .module('propertyApp')
  .controller('RegisterCtrl', RegisterCtrl);

RegisterCtrl.$inject = ['User', 'CurrentUserService', '$state'];
function RegisterCtrl(User, CurrentUserService, $state){
  const vm = this;

  vm.register = () => {
    User
      .register(vm.user).$promise
      .then(user => {
        CurrentUserService.getUser();
        $state.go('usersShow', { id: user.id });
      }, err => {
        console.log(err);
      });
  };
}
