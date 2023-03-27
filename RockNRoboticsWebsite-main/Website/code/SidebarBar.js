class SideBar extends HTMLElement{
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div class="sidebarDiv" id="sidebarDiv">
            <button class="sidebarButton" id="sidebarButton"><img class="hamburger" src="images/icons/hamburger-menu.svg" alt="Sidebar"></button>
            <button class="homeButton"onclick="window.location.href='index.html'">Home</button>
            <button class="aboutUsButton" onclick="window.location.href='AboutUs.html'">About Us</button>
            <button class="roboCamButton" onclick="window.location.href='RoboCam.html'">Robo Cam</button>
            <button class="sponsorsButton" onclick="window.location.href='Sponsors.html'">Sponsors</button>
        </div>
        `;
    }
}
customElements.define('sidebar-component', Sidebar);
