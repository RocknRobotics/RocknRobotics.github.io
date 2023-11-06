class Header extends HTMLElement{
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <header>
            <ul id="header">
                <li class="left tabs"><a href="index.html" class="nav robot"><img src="images/robots/robothead.png" width="20px"> Rock N' Robotics</a></li>
                <li class="right tabs"><a href="sponsors.html" class="nav">Sponsors</a></li>
                <li class="right tabs"><a href="#contact" class="nav">Contact</a></li>
                <li class="right tabs"><a href="about.html" class="nav">About</a></li>
            </ul>
        </header>
        `;
    }
}
customElements.define('header-component', Header);

