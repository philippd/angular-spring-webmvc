'use strict';

angular.module('angularTestsApp')
    .controller('MainCtrl', function ($scope, $http, $timeout) {
        $http.get('/rest/person')
            .success(function (data) {
                    console.log('data was loaded, found ' + data.length + ' persons.');
                    $scope.persons = data;
            });

        $scope.doIt = function (person) {
            $http.delete('/rest/person/' + person.id)
                .success(function (data) {
                    var index = $scope.persons.indexOf(person);
                    $scope.persons.splice(index, 1);
                });
        }
    });
