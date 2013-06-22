'use strict';

angular.module('angularDemoApp')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get('/rest/person')
      .success(function (data) {
        $scope.persons = data;
      });

    $scope.delete = function (person) {
      $http.delete('/rest/person/' + person.id)
        .success(function () {
          var index = $scope.persons.indexOf(person);
          $scope.persons.splice(index, 1);
        });
    };
  });
