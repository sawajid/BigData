/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('bigApp', ['ngRoute', 'ngAnimate', 'ui.bootstrap', 'chart.js'])
        .controller('bigCtrl', function ($scope) {
            $scope.alerts = [
                {type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.'},
                {type: 'success', msg: 'Well done! You successfully read this important alert message.'}
            ];
            $scope.addAlert = function () {
                $scope.alerts.push({msg: 'Another alert!'});
            };
            $scope.closeAlert = function (index) {
                $scope.alerts.splice(index, 1);
            };
        })
        .config(['ChartJsProvider', function (ChartJsProvider) {
                // Configure all charts
                ChartJsProvider.setOptions({
                    colours: ['#FF5252', '#FF8A80'],
                    responsive: true
                });
                // Configure all line charts
                ChartJsProvider.setOptions('Line', {
                    datasetFill: false
                });
            }])
        .controller("LineCtrl", ['$scope', '$timeout', function ($scope, $timeout) {

                $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
                $scope.series = ['Series A', 'Series B'];
                $scope.data = [
                    [65, 59, 80, 81, 56, 55, 40],
                    [28, 48, 40, 19, 86, 27, 90]
                ];
                $scope.onClick = function (points, evt) {
                    console.log(points, evt);
                };

                // Simulate async data update
                $timeout(function () {
                    $scope.data = [
                        [28, 48, 40, 19, 86, 27, 90],
                        [65, 59, 80, 81, 56, 55, 40]
                    ];
                }, 3000);
            }]);
