angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {
    links: []
  };

  $scope.getLinks = function () {
    Links.retrieve().then(function (data) {
      $scope.data.links = data;
    });
  };
  console.log("Running LinksController code...");
  $scope.getLinks();
});
