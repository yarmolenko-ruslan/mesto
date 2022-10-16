export class Section {
  constructor( renderer, selectorContainer) {
    this._renderer = renderer;
    this._container = document.querySelector(selectorContainer);
  }

  renderElements(items) {
    return items.map((item) => {
      return this._renderer(item);
    });
  }

  addItem(item) {
    this._container.prepend(item);
  }
}
