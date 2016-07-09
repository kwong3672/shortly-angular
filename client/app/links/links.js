angular.module('shortly.links', ['shortly.services'])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  // Links.getAll();
  $scope.data = {};
  Links.getAll().then(function(data) {
    $scope.data.links = data;
  });
  // $scope.linksHtml = <div> this is the links div</div> 

});
