export function getCurrentMicroseconds() {
  if (typeof performance != 'undefined') {
    return Math.floor(performance.now() * 1000);
  } else {
    return Math.floor(require('perf_hooks').performance.now() * 1000);
  }
}