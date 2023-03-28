class Sidebar extends HTMLElement{
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <script src="Sidebar.js"></script>
        <div class="sidebarDiv" id="sidebarDiv">
            <button class="sidebarButtons"onclick="window.location.href='index.html'">Home</button>
            <button class="sidebarButtons" onclick="window.location.href='AboutUs.html'">About Us</button>
            <button class="sidebarButtons" onclick="window.location.href='RoboCam.html'">Robo Cam</button>
            <button class="sidebarButtons" onclick="window.location.href='Sponsors.html'">Sponsors</button>
        </div>
        `;
    }
}
customElements.define('sidebar-component', Sidebar);
