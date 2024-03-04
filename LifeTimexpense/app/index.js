class AppManager {
  constructor() {
    this.playstoreLink = document.getElementById('playstoreLink');
    this.playstoreContainer = document.getElementById('playstore');
    this.installButton = document.querySelector('.install');

    this.initializeLottieAnimation();
    this.setupEventListeners();
    this.setTypewriter();
  }

  initializeLottieAnimation() {
    lottie.loadAnimation({
      container: this.playstoreContainer,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'json_anim/playstore.json'
    });
  }

  setupEventListeners() {
    this.playstoreContainer.addEventListener('click', () => this.playstoreLink.click());
    this.installButton.addEventListener('click', () => window.location.href = 'https://play.google.com/store/apps');
  }

  setTypewriter() {
    const text = "The easiest way to store your expense with the world from today.";
    const textElement = document.getElementById('typewriter-text');
    textElement.textContent = '';
    let i = 0;
    const typeWriter = () => {
      if (i < text.length) {
        textElement.textContent += text.charAt(i++);
        setTimeout(typeWriter, 40);
      }
    };
    typeWriter();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new AppManager();
});
