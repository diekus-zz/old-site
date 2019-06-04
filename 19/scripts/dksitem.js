class DksItem extends HTMLElement{
    static get observedAttributes() {
        return ['img-src'];
    }
    constructor(){
        super();
        const shadow = this.attachShadow({mode:'open'});
        const template = `<template id="dks-item-temp">
            <style>
                .dks-item {
                    max-height:18em;
                    max-width: 18em;
                    min-height:8em;
                    min-width: 8em;
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr 1fr;
                    grid-template-rows: 1fr auto auto;
                    box-shadow:0;
                    transition: box-shadow .3s;
                }
                .dks-item:hover {
                    box-shadow: 0px 3px 10px -2px var(--d-grey);
                }
                .item-picture-div {
                    width: 100%;
                    grid-row-start: 1;
                    grid-row-end: 2;
                    grid-column-start: 1;
                    grid-column-end: -1;
                    overflow: hidden;
                }
                .item-picture {
                    width:100%;
                    object-fit: cover;
                }
                .item-title {
                    grid-row-start: 2;
                    grid-row-end: 3;
                    grid-column-start: 1;
                    grid-column-end: -1;
                    margin: 1em .7em .5em .7em;
                }
                .item-descrip {
                    grid-row-start: 3;
                    grid-row-end: 4;
                    grid-column-start: 1;
                    grid-column-end: -1;
                    margin: .1em .7em 1em .7em; 
                }
            </style>
            <div class="dks-item">
                <div class="item-picture-div"><img src="images/diekus.jpg" class="item-picture"></div>
                    <h3 class="item-title"><slot name="item-title">Default Title</slot></h3>
                <p class="item-descrip"><slot name="item-descrip">Default item summary</slot></p>
            </div>
        </template>`;
    shadow.innerHTML = template;
    const templateContent = shadow.getElementById('dks-item-temp').content;
    shadow.appendChild(templateContent.cloneNode(true));
    }

    attributeChangedCallback(name, oldValue, newValue) {
        switch(name) {
            case 'img-src':
                this.shadowRoot.querySelector('.item-picture').setAttribute('src', newValue);
            break;
        }
    }
}

customElements.define('dks-item', DksItem);