import {$} from "../helpers/Dom";
import {THEMES} from "../config/constants";

export default class Theme {
  constructor(selector, root) {
    this.root = $(root)
    this.buttonTheme = $(selector)

    this.toggleTheme = this.toggleTheme.bind(this)
  }

  init() {
    this.subscribe()
  }

  toggleTheme() {
    const isLight = this.root.has(THEMES.LIGHT);
    this.root.setClassList(isLight ? THEMES.DARK : THEMES.LIGHT);
  }

  subscribe() {
    this.buttonTheme.on('click', this.toggleTheme)
  }

  unsubscribe() {
    this.buttonTheme.off('click', this.toggleTheme)
  }
}
