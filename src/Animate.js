/*
 * Scroller
 * http://github.com/zynga/scroller
 *
 * Copyright 2011, Zynga Inc.
 * Licensed under the MIT License.
 * https://raw.github.com/zynga/scroller/master/MIT-LICENSE.txt
 *
 * Based on the work of: Unify Project (unify-project.org)
 * http://unify-project.org
 * Copyright 2011, Deutsche Telekom AG
 * License: MIT + Apache (V2)
 */

/**
 * Generic animation class with support for dropped frames both optional easing and duration.
 *
 * Optional duration is useful when the lifetime is defined by another condition than time
 * e.g. speed of an animating object, etc.
 *
 * Dropped frame logic allows to keep using the same updater logic independent from the actual
 * rendering. This eases a lot of cases where it might be pretty complex to break down a state
 * based on the pure time difference.
 */

const global = typeof window == "undefined" ? {} : window;

const desiredFrames = 60;
const millisecondsPerSecond = 1000;

let running = {};
let counter = 1;

/**
 * A requestAnimationFrame wrapper / polyfill.
 *
 * @param callback {Function} The callback to be invoked before the next repaint.
 */
const requestAnimationFrame =
  global.requestAnimationFrame ||
  global.webkitRequestAnimationFrame ||
  global.mozRequestAnimationFrame ||
  global.oRequestAnimationFrame;

/**
 * Stops the given animation.
 *
 * @param {number} id Unique animation ID
 * @return {boolean} Whether the animation was stopped (aka, was running before)
 */
export function stop(id) {
  var cleared = running[id] != null;

  if (cleared) {
    running[id] = null;
  }

  return cleared;
}

/**
 * Whether the given animation is still running.
 *
 * @param {number} id Unique animation ID
 * @return {boolean} Whether the animation is still running
 */
export function isRunning(id) {
  return running[id] != null;
}

/**
 * Start the animation.
 *
 * @param {Function} stepCallback Pointer to function which is executed on every step. Signature of the method should be `function(percent, now, virtual) { return continueWithAnimation; }`
 * @param {Function} verifyCallback Executed before every animation step. Signature of the method should be `function() { return continueWithAnimation; }`
 * @param {Function} completedCallback Signature of the method should be `function(droppedFrames, finishedAnimation) {}`
 * @param {number} [duration] Milliseconds to run the animation
 * @param {Function} [easingMethod] Pointer to easing function Signature of the method should be `function(percent) { return modifiedValue; }` usage of requestAnimationFrame.
 * @return {number} Identifier of animation. Can be used to stop it any time.
 */
export function start(
  stepCallback,
  verifyCallback,
  completedCallback,
  duration,
  easingMethod
) {
  var start = Date.now();
  var lastFrame = start;
  var percent = 0;
  var dropCounter = 0;
  var id = counter++;

  // Compacting running db automatically every few new animations
  if (id % 20 === 0) {
    var newRunning = {};
    for (var usedId in running) {
      newRunning[usedId] = true;
    }
    running = newRunning;
  }

  // This is the internal step method which is called every few milliseconds
  var step = function (virtual) {
    // Normalize virtual value
    var render = virtual !== true;

    // Get current time
    var now = Date.now();

    // Verification is executed before next animation step
    if (!running[id] || (verifyCallback && !verifyCallback(id))) {
      running[id] = null;
      completedCallback &&
        completedCallback(
          desiredFrames - dropCounter / ((now - start) / millisecondsPerSecond),
          id,
          false
        );
      return;
    }

    // For the current rendering to apply let's update omitted steps in memory.
    // This is important to bring internal state variables up-to-date with progress in time.
    if (render) {
      var droppedFrames =
        Math.round(
          (now - lastFrame) / (millisecondsPerSecond / desiredFrames)
        ) - 1;
      for (var j = 0; j < Math.min(droppedFrames, 4); j++) {
        step(true);
        dropCounter++;
      }
    }

    // Compute percent value
    if (duration) {
      percent = (now - start) / duration;
      if (percent > 1) {
        percent = 1;
      }
    }

    // Execute step callback, then...
    var value = easingMethod ? easingMethod(percent) : percent;
    if (
      (stepCallback(value, now, render) === false || percent === 1) &&
      render
    ) {
      running[id] = null;
      completedCallback &&
        completedCallback(
          desiredFrames - dropCounter / ((now - start) / millisecondsPerSecond),
          id,
          percent === 1 || duration == null
        );
    } else if (render) {
      lastFrame = now;
      requestAnimationFrame(step);
    }
  };

  // Mark as running
  running[id] = true;

  // Init first step
  requestAnimationFrame(step);

  // Return unique animation ID
  return id;
}
