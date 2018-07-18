class ProjectController {
  constructor() {
    this._projectList = new ProjectList();
    this._projectView = new ProjectView($('.album'));

  }
  add(title,img,link,content,tools){
    this._projectList.add(new ProjectModel(title,img,link,content,tools));
    this._projectView.update(this._projectList);
    ProjectHelper.events($('.card'));
  }
}
