const hero = document.querySelector('.hero')
const text = hero.querySelector('h1')
const walk = 300 // 100px

function shadow (e) {
  const { offsetHeight: height, offsetWidth: width } = hero
  let { offsetX: x, offsetY: y } = e

  if (this !== e.target) {
    x = x + e.target.offsetLeft
    y = y + e.target.offsetTop
  }

  const xWalk = Math.round((x / width * walk) - (walk / 2))
  const yWalk = Math.round((y / height * walk) - (walk / 2))

  text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 red,
    ${xWalk * -1}px ${yWalk}px 0 green,
    ${yWalk}px ${xWalk}px 0 blue,
    ${yWalk * -1}px ${xWalk}px 0 yellow`
}

hero.addEventListener('mousemove', shadow)

// ${xWalk * -1}px ${yWalk}px 0 rbga(0,255,255,0.7),
// ${yWalk}px ${xWalk}px 0 rbga(0,255,0,.07),
// ${yWalk * -1}px ${xWalk}px 0 rbga(0,0,255,0.7);
