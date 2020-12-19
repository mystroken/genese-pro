(function () {
  'use strict';

  // `import.meta` is (proposed) ES standard: this test should work in ES enabled
  // environment, even when the hot plugin is not here (obviously, import.meta.hot
  // will be falsy in this case, and this HMR-specific block will be skipped)
  if (undefined) {
    // accept hot updates (without any special treatment)
    undefined.accept();
  }

}());
