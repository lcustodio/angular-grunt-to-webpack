'use strict';

require('./suggestion.service');

angular.module('suggestionModule').factory('suggestionService', [
        '$q',
        function ($q) {

            return {
                loadSuggestions: function () {

                    var deferred = $q.defer();

                    deferred.notify('About to return the suggestions');
                    deferred.resolve(['Paris', 'Rome', 'London', 'Amsterdam']);

                    return deferred.promise;
                }
            };
        }]
);