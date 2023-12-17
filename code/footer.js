class Footer extends HTMLElement{
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div class="footer">
            <ul id="footer">
                <li>
                    <p>Rock N' Robotics<br>
                    Team 3692<br>
                    3125 Mineral Point Ave, Janesville, WI 53548</p>
                </li>

                <li>
                    <ul class="footer_links">
                        <li><a href="#">Sitemap</a></li>
                    </ul>
                </li>

                <li>
                    <ul class="media">
                        <li><a href="#"><img src="images/icons/x.png" alt="x"></a></li>
                        <li><a href="#"><img src="images/icons/youtube.png" alt="youtube"></a></li>
                        <li><a href="https://www.tiktok.com/@rock.n.robotics.3"><img src="images/icons/tiktok.png" alt="tiktok"></a></li>
                    </ul>
                </li>
            </ul> 
        </div>
        `;
    }
}
customElements.define('footer-component', Footer);