import React, { useState, useCallback } from "react";
import "../assets/EyeButton.css"; // Assuming you save the CSS in EyeButton.css

// The CSS provided in the prompt would be saved in EyeButton.css (or a similar file)

const EyeButton = () => {
  // State to manage the open/closed animation state
  // 'initial' means neither close nor open animation classes are applied yet
  // 'closed' means the lid--close/pupil--close classes are active
  // 'open' means the lid--open/pupil--open classes are active
  const [eyeState, setEyeState] = useState("initial");

  const handleClick = useCallback(() => {
    // Determine the next state based on the current state
    if (eyeState === "open") {
      // If currently 'open', clicking does nothing (this logic is simplified
      // from the original JS, which only handles 'open' to 'close' if 'open' is present).
      // Based on the original JS, if 'lid--open' is present, it removes 'lid--open'
      // and 'pupil--open', which would effectively stop the 'open' animation
      // and reset it to the 'initial' state where the eye is fully open (as per initial SVG path).
      setEyeState("initial");
    } else if (eyeState === "closed") {
      // If currently 'closed' (meaning 'lid--close' was applied), the next click
      // applies the 'open' animation classes.
      setEyeState("open");
    } else {
      // If 'initial' (fully open, no animation classes), the first click
      // applies the 'close' animation classes.
      setEyeState("closed");
    }
  }, [eyeState]);

  // Determine the CSS class names to apply based on the state
  const lidClassName = `eye lid ${eyeState === "closed" ? "lid--close" : ""} ${
    eyeState === "open" ? "lid--open" : ""
  }`;

  const pupilClassName = `eye pupil ${
    eyeState === "closed" ? "pupil--close" : ""
  } ${eyeState === "open" ? "pupil--open" : ""}`;

  /* Note on original JavaScript logic:
  The original JS is a bit complex:
  1. If 'lid--open' is present, it removes 'lid--open' and 'pupil--open'.
     (State transitions from 'open' back to 'initial').
  2. ELSE:
     a. If 'lid--close' is present, it adds 'lid--open' and 'pupil--open'.
        (State transitions from 'closed' to 'open').
     b. ELSE (neither open nor close is present - 'initial' state):
        It adds 'lid--close' and 'pupil--close'.
        (State transitions from 'initial' to 'closed').

  The `handleClick` logic above implements this flow:
  - 'open' -> 'initial'
  - 'closed' -> 'open'
  - 'initial' -> 'closed'
  */

  return (
    <div style={{ textAlign: "center" }}>
      <div id="button" onClick={handleClick}>
        <svg viewBox="0 0 193.5 116">
          <circle className={pupilClassName} cx="96.8" cy="58" r="24" />
          <path
            className={lidClassName}
            d="M5,58L5,58C23.4,26.3,57.6,5,96.8,5c39.3,0,73.8,21.3,91.8,53l0,0c0,0-26.7,53-91.8,53S5,58,5,58z"
          />
        </svg>
      </div>
    </div>
  );
};

export default EyeButton;
