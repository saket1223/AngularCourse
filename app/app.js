(function(){
    'use strict';
    angular.module('NameLength',[])
    .controller("NameLengthController",function($scope){
        $scope.name="";
        $scope.totalLength=0;

        $scope.displayNumeric = function () {
            var totalNameLength=calculateNumericForString($scope.name);
            
            $scope.totalLength=totalNameLength;
        };
    });
    function calculateNumericForString(varStr){
        
    var totalStringLength=0;
    totalStringLength=varStr.length;
    return totalStringLength;
    }
})();