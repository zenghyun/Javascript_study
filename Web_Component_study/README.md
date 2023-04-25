## Web Component

## "Custom HTML Element"

- ### Custom HTML Element 
  - Register your own HTML Tags 

<br>

- ### Shadow DOM
  - Manage a separate DOM node tree for your HTML elements (including scoped CSS styles)

<br>

- ### Templates & Slots
  - Write HTML templates that you can add to your HTML elements
  
<br>

- ### HTML Imports
  - Import HTMl files **NOT CONTINUED**

<br>

## Why Web Component? 

- ### Encapsulate Logic + UI 
  - Easy to understand
  - Easy to maintain
  - Separation of Concerns 

<br>

- ### Re-usable across Page
  - Use it just like a normal HTML element
  - Don't worry about overlapping logic
  - Write logic + UI only once

<br>

- ### Re-usable between Apps/Projects
  - Use it just like a normal HTML element
  - Re-use core UI elements across projects
  - Write logic + UI only once 

<br>

# Web Component Lifecycle 

<br>

- ## Element created -> **constructor()** -> Basic Initializations
  <br>
- ## Element attached to DOM -> **connectedCallback()** -> DOM Initializations 
<br>

- ## Element detached from DOM -> **disconnectedCallback()** -> Cleanup Work
<br>

- ## Observed Attribute updated -> **attributeChangedCallback()** -> Update Data + DOM

<br>

****
<br>

**일반적으로는 웹 컴포넌트에 영향을 주는 전역 스타일을 사용하지 않는다. <br> 웹 컴포넌트 안에 정의한 스타일이 외부 요소에 영향을 주면 안된다.**


## Shadow DOM 

Shadow DOM은 기본적으로 고유의 DOM 트리가 있어야 한다.

 즉, 일반적인 Light DOM에서 설정한 모든 스타일이 중첩된 사용자 지정 컴포넌트 DOM에 영향을 미치면 안된다. 

<br>


## HTML에 Template 만들고 Shadow DOM 쓰는 방법

```html
<template id="tooltip-template">
        <slot></slot>
        <span> (?)</span>
    </template>
```
```javascript
class Tooltip extends HTMLElement {
    constructor() {
        super();
        this._tooltipContainer;
        this._tooltipText = 'Some dummy tooltip text';
        this.attachShadow({mode: 'open'});
        // HTML에 template 만들고 이용하는 방법 
        const template = document.querySelector('#tooltip-template');
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
    
    connectedCallback() {
        if(this.hasAttribute('text')) {
            this._tooltipText = this.getAttribute('text');
        }
        const tooltipIcon = this.shadowRoot.querySelector('span');
        tooltipIcon.addEventListener('mouseenter', this._showTooltip.bind(this));
        tooltipIcon.addEventListener('mouseleave', this._hideTooltip.bind(this));
        this.shadowRoot.appendChild(tooltipIcon);
        this.style.position = 'relative';
    }

    _showTooltip() {
        this._tooltipContainer = document.createElement('div');
        this._tooltipContainer.textContent = this._tooltipText;
        this._tooltipContainer.style.backgroundColor = 'black';
        this._tooltipContainer.style.color = 'white';
        this._tooltipContainer.style.position = 'absolute';
        this._tooltipContainer.style.zIndex = '10';
        this.shadowRoot.appendChild(this._tooltipContainer);

    }

    _hideTooltip() {
            this.shadowRoot.removeChild(this._tooltipContainer);
    }
}

customElements.define('zh-tooltip', Tooltip);
```

<br>

## JavaScript에 Template 만들고 사용하는 방법

```javascript
class Tooltip extends HTMLElement {
    constructor() {
        super();
        this._tooltipContainer;
        this._tooltipText = 'Some dummy tooltip text';
        this.attachShadow({mode: 'open'});
        // HTML에 template 만들고 이용하는 방법 
        // const template = document.querySelector('#tooltip-template');
        // this.shadowRoot.appendChild(template.content.cloneNode(true));'
        this.shadowRoot.innerHTML = `
        <style>
            div {
                background-color: black;
                color: white;
                position: absolute;
                z-index:10;
            }
        </style>
        <slot>Some Default!</slot>
        <span> (?)</span>
        `;
    }
    
    connectedCallback() {
        if(this.hasAttribute('text')) {
            this._tooltipText = this.getAttribute('text');
        }
        const tooltipIcon = this.shadowRoot.querySelector('span');
        tooltipIcon.addEventListener('mouseenter', this._showTooltip.bind(this));
        tooltipIcon.addEventListener('mouseleave', this._hideTooltip.bind(this));
        this.shadowRoot.appendChild(tooltipIcon);
        this.style.position = 'relative';
    }

    _showTooltip() {
        this._tooltipContainer = document.createElement('div');
        this._tooltipContainer.textContent = this._tooltipText;
        this.shadowRoot.appendChild(this._tooltipContainer);

    }

    _hideTooltip() {
            this.shadowRoot.removeChild(this._tooltipContainer);
    }
}

customElements.define('zh-tooltip', Tooltip);
```

****

<br>

## [웹 구성요소의 MDN 문서](https://developer.mozilla.org/en-US/docs/Web/Web_Components)
## [템플릿 & 슬롯에 대한 추가 정보 1](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_templates_and_slots)
## [템플릿 & 슬롯에 대한 추가 정보 2](https://developers.google.com/web/fundamentals/web-components/customelements)
## [Shadow DOM에 대한 Google 문서](https://developers.google.com/web/fundamentals/web-components/shadowdom)

