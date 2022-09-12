import {$} from "../helpers/Dom";
import {CLASSES} from "../config/constants";

export default class Menu {
  constructor(selector) {
    this.root = $(selector)
    this.buttonMenu = $("#menu")
    this.buttonMenuClose = $('.close-menu')

    this.openMenu = this.openMenu.bind(this)
    this.closeMenu = this.closeMenu.bind(this)
  }

  init() {
    this.subscribe()
  }

  openMenu() {
    this.root.addClass(CLASSES.MENU)
  }

  closeMenu() {
    this.root.removeClass(CLASSES.MENU)
  }

  subscribe() {
    this.buttonMenu.on('click', this.openMenu)
    this.buttonMenuClose.on('click', this.closeMenu)
  }

  unsubscribe() {
    this.buttonMenu.off('click', this.openMenu)
    this.buttonMenuClose.off('click', this.closeMenu)
  }
}
