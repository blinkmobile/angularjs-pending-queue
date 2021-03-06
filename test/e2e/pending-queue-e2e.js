'use strict';

const pendingQueueDev = angular.module('pendingQueueDev', ['app', 'ngMockE2E']);

pendingQueueDev.run($httpBackend => {
  $httpBackend.whenPOST('/test').respond((m, u, d) => {
    const data = angular.fromJson(d);
    if (data.invalid) {
      return [400, data, {}, 'DERP!'];
    }

    return [200, data, {}];
  });

  $httpBackend.whenPOST('http://offline').passThrough();
});
