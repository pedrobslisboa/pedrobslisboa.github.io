class ProjectModel {
  constructor(title,img,link,content,tools) {
    this._img = img;
    this._content = content;
    this._link = link;
    this._tools = tools;
    this._title = title;
  }

  get img(){
    return this._img;
  }
  get content(){
    return this._content;
  }
  get link(){
    return this._link;
  }
  get tools(){
    return this._tools;
  }

  get title(){
    return this._title;
  }
}
