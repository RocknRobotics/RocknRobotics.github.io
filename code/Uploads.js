class Uploads extends HTMLElement{
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            
        `;
    }
}

customElements.define('uploads', Uploads);