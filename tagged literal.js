// tagged literal
function tagged_literal() {
  console.log('success');
}
function tagged_literal2(param) {
  console.log(...param);
}
tagged_literal``
tagged_literal2`string`
/**
 * success
 * string
 */