// do not tamper with this code in here, study it, but do not touch
// this Auth controller is responsible for our client side authentication
// in our signup/signin forms using the injected Auth service
angular.module('shortly.auth', [])

.controller('AuthController', function ($scope, $window, $location, Auth) {
  $scope.user = {};

  $scope.signin = function () {
    // var rValidUserName = /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;
    var rValidUserName = /(?=^.{3,20}$)^[a-zA-Z][a-zA-Z0-9]*[._-]?[a-zA-Z0-9]+$/;

    if ($scope.user.username.match(rValidUserName)) {
      Auth.signin($scope.user)
        .then(function (token) {
          $window.localStorage.setItem('com.shortly', token);
          $location.path('/links');
        })
        .catch(function (error) {
          console.error(error);
        });
    } else {
      alert('hey man, the username is not right');
    }
  };

  $scope.signup = function () {
    var rValidUserName = /(?=^.{3,20}$)^[a-zA-Z][a-zA-Z0-9]*[._-]?[a-zA-Z0-9]+$/;

    if ($scope.user.username.match(rValidUserName)) {
      Auth.signup($scope.user)
        .then(function (token) {
          $window.localStorage.setItem('com.shortly', token);
          $location.path('/links');
        })
        .catch(function (error) {
          console.error(error);
        });
    } else {
      alert('the username is not valid!');
    }
  };
});
