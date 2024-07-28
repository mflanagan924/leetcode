function guessBlue(blueStart, redStart, bluePulled, redPulled) {
    let blue = blueStart - bluePulled;
    let red = redStart - redPulled;
    return blue/(blue + red);
  }