class Dom {
  constructor(selector, parent) {
    this.$el = typeof selector === 'string'
      ? parent ? parent.querySelector(selector) : document.querySelector(selector)
      : selector
  }

  html(html) {
    if (typeof html === 'string') {
      this.$el.innerHTML = html
      return this
    }
    return this.$el.outerHTML.trim()
  }

  append(node) {
    if (node instanceof Dom) {
      node = node.$el
    }
    this.$el.appendChild(node)

    return this
  }

  on(eventType, callback) {
    this.$el.addEventListener(eventType, callback)
  }

  off(eventType, callback) {
    this.$el.removeEventListener(eventType, callback)
  }

  addClass(className) {
    this.$el.classList.add(className)
    return this
  }

  removeClass(className) {
    this.$el.classList.remove(className)
    return this
  }

  setClassList(classNames) {
    this.$el.className = classNames
    return this
  }

  has(classNames) {
    return this.$el.classList.contains(classNames)
  }
}

export function $(selector, parent) {
  return new Dom(selector, parent)
}

$.create = (tagName, classes = '') => {
  const el = document.createElement(tagName)
  if (classes) {
    el.classList.add(classes)
  }
  return $(el)
}
