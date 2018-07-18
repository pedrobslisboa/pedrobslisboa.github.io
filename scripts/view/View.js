class View {
  constructor(element) {
    this._element = element;
  }

  update(model){
    this._element.html(this.template(model));
  }
}
