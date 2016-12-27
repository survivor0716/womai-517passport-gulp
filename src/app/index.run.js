(function() {
  'use strict';

  angular
    .module('womai517passportGulp')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
