import {$} from "../helpers/Dom";
import texts from "../config/texts";
import {CLASSES} from "../config/constants";

export default class TypoApp {
  constructor(root, restart, wordWrapper) {
    this.root = $(root)
    this.buttonReset = $(restart)
    this.wordsWrapper = $(wordWrapper)

    this.text = '';

    this.resetGame = this.resetGame.bind(this)
    this.handleKeydown = this.handleKeydown.bind(this)
  }

  initText() {
    this.getTexts()
    this.renderText()
  }

  init() {
    this.subscribe()
    this.initText()
  }

  resetGame() {
    this.initText()
  }

  handleKeydown(e) {
    if (this.text.length > 0) {
      this.root.addClass(CLASSES.PLAYING);
      if (e.key === this.text[0]) {
        this.text = this.text.substring(1);
        this.renderText(this.text, this.wordsWrapper);
      } else {
        this.wordsWrapper?.$el.childNodes[0]?.firstChild?.classList.add(CLASSES.ERROR)
      }
      setTimeout(() => {
        this.root.removeClass(CLASSES.PLAYING);
      }, 2000);
    } else {
      this.initText()
    }
  }

  renderText() {
    if (!this.text) {
      return false;
    }
    const element = $.create('p');
    this.wordsWrapper.html('');
    let spans = ''
    this.text.split("").forEach(char => {
      const className = char === " " ? 'empty' : '';
      spans += `<span class=${className}>${char}</span>`
    });
    element.html(spans);
    this.wordsWrapper.append(element);
  }

  getTexts() {
    const index = Math.floor(Math.random() * texts.length);
    this.text = texts[index]
  }

  subscribe() {
    this.buttonReset.on('click', this.resetGame)
    document.addEventListener("keydown", this.handleKeydown);
  }

  unsubscribe() {
    this.buttonReset.off('click', this.resetGame)
    document.removeEventListener("keydown", this.handleKeydown);
  }
}
