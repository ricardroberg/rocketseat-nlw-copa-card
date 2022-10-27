let isIgnite = true;

function changeCard(event) {
  const card = event.currentTarget;
  const bgI = isIgnite ? "explorer" : "ignite";
  isIgnite = !isIgnite;
  card.style.backgroundImage = `url(./assets/bg-${bgI}-nlw-copa.svg`;
}
