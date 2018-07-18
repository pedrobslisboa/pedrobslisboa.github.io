class ProjectList {
  constructor() {
    this._list = [];
  }
  add(project){
    this._list.push(project);

  }

  get projects(){
    return [].concat(this._list);
    console.log([].concat(this._list));
  }

}
