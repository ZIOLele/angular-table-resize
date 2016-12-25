var devapp = angular.module("DemoApp", ["ngTableResize"]);

devapp.controller('main-controller', ['$scope', '$timeout', function($scope, $timeout) {
    $scope.hello = "Hello world";

    $scope.tableMode = "FixedResizer";

    $scope.columns = [
        {
            id:"colName",
            label: "Name",
            class:""
        },
        {
            id:"colStatus",
            label: "Status",
            class:"four wide"
        },
        {
            id:"colNotes",
            label: "Notes",
            class:"four wide"
        },
        {
            id:"colMore",
            label: "More",
            class:"two wide"
        },
        {
            id:"colEvenMore",
            label: "Even More",
            class:"one wide"
        }
    ];

    var i = 1;

    $timeout(function() {
        $scope.show = true;
    }, 200)

    $scope.items = ["One", "Tow", "Three", "Four"];

    $scope.addItem = function() {
        $scope.items.push('Item ' + i);
        i++;
    }

    $scope.removeItem = function() {
        $scope.items.pop();
    }
}]);
