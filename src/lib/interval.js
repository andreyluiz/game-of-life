window.rInterval = function(callback, delay) {
  var dateNow = Date.now,
    requestAnimation = window.requestAnimationFrame,
    start = dateNow(),
    stop,
    intervalFunc = function() {
      dateNow() - start < delay || ((start += delay), callback());
      stop || requestAnimation(intervalFunc);
    };
  requestAnimation(intervalFunc);
  return {
    clear: function() {
      stop = 1;
    }
  };
};
