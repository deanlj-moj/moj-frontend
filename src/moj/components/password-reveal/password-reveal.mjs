import { Component } from 'govuk-frontend'

export class PasswordReveal extends Component {
  /**
   * @param {Element | null} $root - HTML element to use for password reveal
   */
  constructor($root) {
    super($root)

    const $input = this.$root.querySelector('.govuk-input')
    if (!$input || !($input instanceof HTMLInputElement)) {
      return this
    }

    this.$input = $input
    this.$input.setAttribute('spellcheck', 'false')

    this.createButton()
  }

  createButton() {
    this.$group = document.createElement('div')
    this.$button = document.createElement('button')

    this.$button.setAttribute('type', 'button')

    this.$root.classList.add('moj-password-reveal')
    this.$group.classList.add('moj-password-reveal__wrapper')
    this.$button.classList.add(
      'govuk-button',
      'govuk-button--secondary',
      'moj-password-reveal__button'
    )

    this.$button.innerHTML =
      'Show <span class="govuk-visually-hidden">password</span>'

    this.$button.addEventListener('click', this.onButtonClick.bind(this))

    this.$group.append(this.$input, this.$button)
    this.$root.append(this.$group)
  }

  onButtonClick() {
    if (this.$input.type === 'password') {
      this.$input.type = 'text'
      this.$button.innerHTML =
        'Hide <span class="govuk-visually-hidden">password</span>'
    } else {
      this.$input.type = 'password'
      this.$button.innerHTML =
        'Show <span class="govuk-visually-hidden">password</span>'
    }
  }

  /**
   * Name for the component used when initialising using data-module attributes.
   */
  static moduleName = 'moj-password-reveal'
}
