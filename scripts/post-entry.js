class PostEntry extends HTMLElement {
  constructor() {
    super();

    //defines the template
    const temp = 
      `<template id="icon-item-shell">
      <style>
      .article-grid{
        display: grid;
        grid-template-columns: 5em auto 5em;
        grid-template-rows: 5em auto 2em;
        justify-items: stretch;
        align-items: stretch;
      }
      .article-title{
        grid-column-start: 2;
        grid-column-end: -1;
        grid-row-start: 1;
        grid-row-end: 2;
        justify-self: start;
        align-self: start;
        margin: .1em 1em .1em 1em;

      }
      .article-text{
        grid-column-start: 1;
        grid-column-end: -1;
        grid-row-start: 2;
        grid-row-end: 3;
        
      }
      .article-image{
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start: 1;
        grid-row-end: 2;
        border-radius:25px;
        overflow:hidden;
        
      }
    </style>
    <article class="article-grid">
      <header class="article-title"><h3><slot name="post-title">Title</slot></h3></header>
      <div class="article-image"><slot name="post-image"><img src="images/swirl_pattern.png"></div></slot>
      <p class="article-text"><slot name="post-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed eros sit amet erat bibendum viverra. Ut sed ipsum venenatis, pretium nisl non, fermentum ligula. Aenean euismod risus risus, nec viverra velit faucibus a. Nulla facilisi. Curabitur blandit orci vitae pellentesque ultrices. Curabitur cursus nulla ut dictum sagittis.</slot></p>
    </article>
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

customElements.define('post-entry', PostEntry);