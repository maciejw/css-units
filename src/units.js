/**
 *
 * @param {HTMLElement} container
 */
function BaseUnits(container) {
  /**
   * @param {string} selector
   * @param {string} name
   * @param {string} value
   */
  function changeCssVar(selector, name, value) {
    /**
     * @type {HTMLElement}
     */
    const element = document.querySelector(selector);
    element.style.setProperty(name, value);
  }
  function render() {
    const unitValues = ['0.8rem', '1rem', '2rem', '0.8em', '1em', '2em', '14px', '16px', '32px', '0.8vw', '1vw', '2vw'];

    const select = document.createElement('select');
    createOptions(select, unitValues);

    /**
     * @param {Event} e
     */
    const change = e => {
      /**
       * @type {HTMLSelectElement}
       */
      const target = e.target;
      changeCssVar(':root', '--unit', target.value);
    };

    select.addEventListener('change', change);
    container.appendChild(select);
  }
  /**
   * @param {HTMLSelectElement} select
   * @param {string[]} unitValues
   */
  function createOptions(select, unitValues) {
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

  render();
}
