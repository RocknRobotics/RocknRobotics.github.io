class Header extends HTMLElement{
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <header class="headerDiv">
            <div class="headerLeftDiv">
                <button class="sidebarButton" id="sidebarButton"><img class="hamburger" src="images/icons/hamburger-menu.svg" alt="Sidebar"></button>
            </div>
            <div class="headerMidDiv">
                <h1 class="name">Rock N' Robotics</h1>
            </div>
            <div class="headerRightDiv">
                <img class="roboLogo" src="images/robots/robotNoBackground.png" alt="Logo">
            </div>
        </header>
        `;
    }
}
customElements.define('header-component', Header);

