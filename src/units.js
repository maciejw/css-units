customElements.define(
  'base-units',
  class extends HTMLElement {
    connectedCallback() {
      this.render();
    }
    /**
     * @param {string} selector
     * @param {string} name
     * @param {string} value
     */
    changeCssVar(selector, name, value) {
      /**
       * @type {HTMLElement}
       */
      const element = document.querySelector(selector);
      element.style.setProperty(name, value);
    }
    render() {
      const unitValues = ['0.8rem', '1rem', '0.8em', '1em', '14px', '16px', '20px', '0.8vw', '1vw', '4vw'];

      const select = document.createElement('select');
      this.createOptions(select, unitValues);

      /**
       * @param {Event} e
       */
      const change = e => {
        /**
         * @type {HTMLSelectElement}
         */
        const target = e.target;
        this.changeCssVar(':root', '--unit', target.value);
      };

      select.addEventListener('change', change);
      this.appendChild(select);
    }
    /**
     * @param {HTMLSelectElement} select
     * @param {string[]} unitValues
     */
    createOptions(select, unitValues) {
      /**
       * @param {string} u
       */
      const createOption = u => {
        const o = document.createElement('option');
        o.text = u;
        o.value = u;
        return o;
      };
      /**
       * @param {HTMLOptionElement} o
       */
      const appendToUnit = o => {
        select.appendChild(o);
      };

      unitValues.map(createOption).forEach(appendToUnit);
    }
  }
);
