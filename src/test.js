handleClick = () => {
  clearTimeout(this.numberTimer)

  let ms = 16 
  const maxNumber = 100000
  let random = Math.floor(Math.random() * maxNumber) 
  let stepDown = random / 50 
  const startSlow = random * 0.05
  const bindingThis = this 

  this.numberTimer = setTimeout(function teak() {
    random -= stepDown
    if (random < 0) {
      clearTimeout(this.numberTimer)
      bindingThis.setState({ count: 0, height: 0 })
    } else {
      if (random < startSlow) stepDown = maxNumber / 1499
      
      clearTimeout(this.numberTimer)
      this.numberTimer = setTimeout(teak, ms)
      bindingThis.setState({ count: random, height: random / (maxNumber / 100) * 4 })
  }}, ms);
}