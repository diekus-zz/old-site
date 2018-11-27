class IconItem extends HTMLElement {
  constructor() {
    super();

    //defines the template
    const temp = 
      `<template id="icon-item-shell">
        <style>
          :host{
            
          }
          .icon-temp{
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 1em;
            width: 5em;
          }
          .centered{
            text-align:center;
          }
        </style>
        <div class="icon-temp">
          <slot name="icon-image"><img class="icon-demo" src="#"></slot>
          <slot name="icon-title" class="centered"><a href="#">title</a></slot>
        </div>
      </template>`;

      /****
       * Adding the template to the shadow DOM and appending it
       ****/
      const shadowRoot = this.attachShadow({mode:'open'});
      shadowRoot.innerHTML = temp;

      const templateContent = shadowRoot.getElementById('icon-item-shell').content;
      shadowRoot.appendChild(templateContent);

      /****
       * JS to handle actions inside the component
       ****/
      
       //place code here
      
  }
}

customElements.define('icon-item', IconItem);