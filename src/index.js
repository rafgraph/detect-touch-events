const detectTouchEvents = {
  update() {
    if (typeof window !== 'undefined') {
      this.hasApi = 'ontouchstart' in window;
      this.maxTouchPoints = this.hasApi ?
        window.navigator && window.navigator.maxTouchPoints :
        undefined;
    }
  },
};

detectTouchEvents.update();
export default detectTouchEvents;
