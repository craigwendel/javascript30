const inputs = document.querySelectorAll('.controls input')

function handleUpdate () {
  const suffix = this.dataset.sizing || ''
  // Has an or statement so hex code related to color is not undefined.

  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}

inputs.forEach(input => input.addEventListener('change', handleUpdate))
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate))
