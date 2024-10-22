function duckDuckGoose(players, goose) {
    if (goose <= players.length) {
      return players[goose - 1].name;  // Access the name property
    } else {
      let remainder = goose % players.length;
      return players[remainder === 0 ? players.length - 1 : remainder - 1].name;  // Fix remainder case and access name property
    }
  }