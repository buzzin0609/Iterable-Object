/**
 * Description: webpack tests entry
 */

const testsContext = require.context("./src", true, /\.spec\.js$/);
testsContext.keys().forEach(testsContext);
