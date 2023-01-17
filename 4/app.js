const brojevi = [3, 2, 4, 5, 6, 7, 8, 9]

function findSmallest(array) {
  return array.reduce(function (najmanjiBroj, broj) {
    if (broj <= najmanjiBroj) {
      najmanjiBroj = broj
      return broj
    } else return najmanjiBroj
  }, 999999999999999)
}
