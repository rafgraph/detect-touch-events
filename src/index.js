const detectTouchEvents = {
  update() {
    if (typeof window !== 'undefined') {
      this.hasApi = 'ontouchstart' in window;
      this.maxTouchPoints = window.navigator && window.navigator.maxTouchPoints;
    }
  },
};

detectTouchEvents.update();
export default detectTouchEvents;
