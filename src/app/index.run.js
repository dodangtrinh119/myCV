(function() {
  'use strict';

  angular
    .module('myCv')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
