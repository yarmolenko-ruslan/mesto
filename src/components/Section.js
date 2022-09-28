export class Section {
  constructor({ items, renderer }, selectorContainer) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(selectorContainer);
  }

  renderElements() {
    return this._items.map((item) => {
      return this._renderer(item);
    });
  }

  addItem(item) {
    this._container.prepend(item);
  }
}
