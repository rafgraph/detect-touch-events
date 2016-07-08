const detectTouchEvents = {
  update() {
    if (typeof window !== 'undefined') {
      detectTouchEvents.hasApi = 'ontouchstart' in window;
      detectTouchEvents.maxTouchPoints = detectTouchEvents.hasApi ?
        window.navigator && window.navigator.maxTouchPoints :
        undefined;
    }
  },
};

detectTouchEvents.update();
export default detectTouchEvents;
