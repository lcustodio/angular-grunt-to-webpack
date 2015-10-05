'use strict';

angular.module('suggestionModule').directive('suggestionList', [
        'suggestionService',
        function (suggestionService) {
            return {
                templateUrl: '/scripts/suggestion/suggestionList.html',
                controller: function($scope){
                    suggestionService.loadSuggestions().then(function(result){
                        $scope.list = result;
                    }).catch(function(err){
                        console.log('Houston, we have a ' + err);
                    });
                }
            };
        }
    ]
);