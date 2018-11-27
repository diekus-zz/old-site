class PresEntry extends HTMLElement {
  constructor() {
    super();

    //defines the template
    const temp = 
      `<template id="pres-item-shell">
        <style>
          :root{
            --subtle-ui-details:#eeeeee;
            --padding-pres-card:.7em;
          }
          .pres-card{
            border-radius: 25px;
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: auto auto auto auto;
            margin:1em;
            width: 20em;
            overflow: hidden;
            background-color: var(--subtle-ui-details);
          }
          .pres-card-image{
            grid-column-start: 1;
            grid-column-end: -1;
            grid-row-start: 1;
            grid-row-end: 2;
            width: 20em;
          }
          .pres-card-title{
            grid-column-start: 1;
            grid-column-end: -1;
            grid-row-start: -4;
            grid-row-end: -3;
            margin: 0px 1em 0px 1em;
          }
          .pres-card-details{
            grid-column-start: 1;
            grid-column-end: -1;
            grid-row-start: -3;
            grid-row-end: -2;
            margin: 0px 1em 0px 1em;
          }
          .pres-card-assets{
            grid-column-start: 1;
            grid-column-end: -1;
            grid-row-start: -2;
            grid-row-end: -1;
            margin: 0px 1em 1em 1em;
          }
        </style>
        <article class="pres-card">
          <slot name="pres-image"><img class="pres-card-image" src="/images/pres/s.jpg"></slot>
          <header class="pres-card-title"><h2><slot name="pres-title">title</h2><h3><slot name="pres-event"><a href="#">Event name</a></slot></h3></header>
          <span class="pres-card-details"><slot name="pres-place"></slot> <slot name="pres-flag"></slot> <slot name="pres-date"></slot></span>
          <div class="pres-card-assets"><slot name="pres-links"></slots></div>
        </article>
      </template>`;

      /****
       * Adding the template to the shadow DOM and appending it
       ****/
      const shadowRoot = this.attachShadow({mode:'open'});
      shadowRoot.innerHTML = temp;

      const templateContent = shadowRoot.getElementById('pres-item-shell').content;
      shadowRoot.appendChild(templateContent);

      /****
       * JS to handle actions inside the component
       ****/
      
       //place code here
      
  }
}

customElements.define('pres-entry', PresEntry);