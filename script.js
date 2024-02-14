function flipCoin() {
  const coin = document.getElementById('coin');

  // Remove any previous animation classes
  coin.classList.remove('animate-coin');

  // Add the animation class to trigger the flip
  coin.classList.add('animate-coin');

  // Set a timeout to reset the animation class after the flip
  setTimeout(() => {
      coin.classList.remove('animate-coin');
      // Randomly set the coin face to heads or tails
      coin.textContent = Math.random() < 0.5 ? 'Heads' : 'Tails';
  }, 1000);
}
