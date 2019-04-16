class DksItem extends HTMLElement{
    constructor(){
        super();
        const shadow = this.attachShadow({mode:'open'});
        const template = `<template id="dks-item-temp">
            <style>
                .dks-item{
                    max-height:18em;
                    max-width: 18em;
                    min-height:8em;
                    min-width: 8em;
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr 1fr;
                    grid-template-rows: 1fr 1fr 1fr 1fr;
                }
                .item-picture-div{
                    width: 100%;
                    grid-row-start: 1;
                    grid-row-end: 3;
                    grid-column-start: 1;
                    grid-column-end: -1; 
                }
                .item-picture{
                    width:100%;
                }
                .item-title{
                    grid-row-start: 3;
                    grid-row-end: 4;
                    grid-column-start: 1;
                    grid-column-end: -1; 
                }
                .item-descrip{
                    grid-row-start: 4;
                    grid-row-end: 5;
                    grid-column-start: 1;
                    grid-column-end: -1; 
                }
            </style>
            <div class="dks-item">
                <div class="item-picture-div"><slot name="item-image"><img src="images/diekus.jpg" class="item-picture"></slot></div>
                <h3 class="item-title"><slot name="item-title">Default Title</slot></h3>
                <p class="item-descrip"><slot name="my-text">Default item summary
                </slot></p>
            </div>
        </template>`;
    shadow.innerHTML = template;
    const templateContent = shadow.getElementById('dks-item-temp').content;
    shadow.appendChild(templateContent);
    }
}

customElements.define('dks-item', DksItem);