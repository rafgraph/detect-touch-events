# Detect Touch Events

Detect if the browser supports the touch events api.

[Live detection test][liveDetectionTest] &#8212; [view on npm][onNpm]

Exports a reference to a singleton object (a micro state machine with an update function) with its state set to if the browser supports the touch events api, and if so how many touch points does it have, as well as an `update()` function which re-runs the tests and updates the object's state.

Note that `detect-touch-events` is one of the micro state machines used by [`detect-it`][detectItRepo] to determine if a device is `mouseOnly`, `touchOnly`, or `hybrid`.

*For more information on the touch events api, please see [MDN's Touch Events][mdnTouchEvents], or the [W3C Touch Events specification][w3cSpecLatest].*


### `detectTouchEvents` micro state machine
```javascript
const detectTouchEvents = {
  hasApi: boolean,
  maxTouchPoints: whole number,

  // re-run all the detection tests and update state
  update() {...},
}
```

### Installing `detect-touch-events`
```terminal
$ npm install detect-touch-events
```

### Using `detect-touch-events`
```javascript
import detectTouchEvents from 'detect-touch-events';
```
```javascript
// using the state
detectTouchEvents.hasApi === true; // touch events api is present in the browser
detectTouchEvents.maxTouchPoints; // maximum number of touch points supported by the device

// updating the state - most apps won't need to use this at all
detectTouchEvents.update();
```

```javascript
/*
 * note that in the case of a browser that doesn't support touch events,
 * including when using a legacy computer and browser, the default state will be:
 */
const detectTouchEvents = {
  hasApi: false,
  maxTouchPoints: undefined,
}
```

Note that `maxTouchPoints` may be `undefined` even if `hasApi` is `true` (not all touch devices report how many touch points they have). Also note the if `hasApi` is `false`, then `maxTouchPoints` is always `undefined`.

Note that the `update()` function is run once at the time of import to set the object's initial state, and generally doesn't need to be run again. If it doesn't have access to the `window`, then the state will be `undefined` (`detect-touch-events` will not throw an error), and you will need to call the `update()` function manually at a later time to update its state.


### Part of the [`detect-it`][detectItRepo] family
- [`detect-it`][detectItRepo]
  - [`detect-hover`][detectHoverRepo]
  - [`detect-pointer`][detectPointerRepo]
  - **`detect-touch-events`**
  - [`detect-passive-events`][detectPassiveEventsRepo]


<!-- links -->
[liveDetectionTest]: http://detect-it.rafrex.com/#detect-touch-events
[onNpm]: https://www.npmjs.com/package/detect-touch-events
[w3cSpecLatest]: https://w3c.github.io/touch-events/
[mdnTouchEvents]: https://developer.mozilla.org/en-US/docs/Web/API/Touch_events
[detectItRepo]: https://github.com/rafrex/detect-it
[detectHoverRepo]: https://github.com/rafrex/detect-hover
[detectPointerRepo]: https://github.com/rafrex/detect-pointer
[detectPassiveEventsRepo]: https://github.com/rafrex/detect-passive-events
