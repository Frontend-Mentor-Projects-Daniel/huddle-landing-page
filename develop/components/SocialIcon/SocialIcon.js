fetch('./develop/components/SocialIcon/SocialIcon.html')
  .then((stream) => stream.text())
  .then((text) => {
    define(text);
  });

function define(html) {
  class SocialIcon extends HTMLElement {
    constructor() {
      super();

      const shadow = this.attachShadow({ mode: 'open' });
      shadow.innerHTML = html;

      const icon = this.getAttribute('icon');
      const tag = this.shadowRoot.children[3].children[0];
      tag.classList.add(icon);
    }

    // VARIABLES

    // METHODS
  }
  window.customElements.define('social-icon-component', SocialIcon);
}
