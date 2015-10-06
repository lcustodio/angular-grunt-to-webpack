'use strict';

require('./suggestion.service');
require('./suggestionList.html');

angular.module('suggestionModule').directive('suggestionList', [
        'suggestionService',
        function (suggestionService) {
            return {
                template: require('./suggestionList.html'), //TODO this is a big change!
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