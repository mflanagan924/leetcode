function radLadies(name) {
    return name.replace(/[%$&/£?@0-9]/g, '').toUpperCase()
  }