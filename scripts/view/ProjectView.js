class ProjectView extends View {
  constructor(element) {

    super(element);

  }

  template(model){
    return `${model.projects.map((n) => {
      return `
      <div class="card" id="project-card">
      <div class="card-image"><a href='${n.link}' target="_blank"><img src="imgs/${n.img}"></a></div>
      <div class="info-card"><center>${n.content}</center>
      <ul class="tools">
      ${n.tools.map((m) => {
        return `
        <li><svg style="width:24px;height:24px" viewBox="0 0 24 24">
        <path fill="#000000" d="${m}" /></svg></li>
        `
      }).join('')}
      </ul>
      </div>
      <div class="card-content">
        <span class="text-content">${n.title}</span>
        <div class="icon-content">
          <svg class="info" style="width:24px;height:24px" viewBox="0 0 24 24">
<path class="info-on" fill="#000000" d="M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
<path class="info-off"fill="#000000" d="M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z" />
</svg>
        </div>
      </div>
      </div>
      </div> `

    }).join('')}`
  }
}
