let sidebar = document.getElementById("sidebarDiv");
let sidebarButton = document.getElementById("sidebarButton");

function slide(){
    sidebar.classList.toggle("active");
    let active = sidebar.classList.contains("active");
    if (active){
        sidebar.style.left= "0";
    }else{
        sidebar.style.left= "-140px";
    }
    
}

sidebarButton.addEventListener('click', slide, true);

/*
class Sidebar extends HTMLElement{
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        
        `;
    }
}
customElements.define('sidebar-component', Sidebar);
*/