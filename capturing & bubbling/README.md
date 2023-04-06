## 캡처링 & 버블링

[캡처링과 버블링](https://ko.javascript.info/bubbling-and-capturing)

버블링의 원리

한 요소에 이벤트가 발생하면, 이 요소에 할당된 핸들러가 동작하고, 이어서 부모 요소의 핸들러가 동작한다. 
가장 최상단의 조상 요소를 만날 때까지 이 과정이 반복되면서 요소 각각에 할당된 핸들러가 동작한다. 


## event.preventDefault() & event.stopPropagation() 

같이 알아두면 좋은것 
<br>

[event.preventDefault() & event.stopPropagation()](https://despiteallthat.tistory.com/126)


### html 

```html
  <ul>
        <li>item1</li>
        <li>item2</li>
        <li>item3</li>
        <li>item4</li>
        <li>item5</li>
    </ul>

```

<br>

```javascript 

예시 1 
const lists = document.querySelectorAll('li');

const activeHandler = event => {
    event.target.classList.toggle('active');
};

lists.forEach(list => {
    list.addEventListener('click', activeHandler);
});

예시 2 

const ul = document.querySelector('ul'); 

const activeHandler = event => {
    event.target.closest('li').classList.toggle('active');
}

ul.addEventListener('click', activeHandler);
```

예시 1과 예시 2는 모두 같은 동작을 하지만 동작하는 과정에서의 차이가 있다. 

예시 1의 경우 NodeList를 반환하는 querySelectorAll을 사용하여 모든 li 요소를 선택하고, forEach를 사용하여 모든 요소에 대해 click 이벤트를 추가한다. 이벤트 핸들러 activeHandler는 이벤트가 발생한 대상의 classList에 active 클래스를 추가/제거하는 작업을 수행한다. 이 코드는 여러 개의 li 요소를 각각 클릭할 때마다 active 클래스를 추가/제거한다.

예시 2의 경우  querySelector를 사용하여 첫 번째 ul 요소를 선택하고, addEventListener를 사용하여 ul 요소에 대해 click 이벤트를 추가한다. 이벤트 핸들러 activeHandler는 이벤트가 발생한 요소의 가장 가까운 li 요소를 찾고 해당 li 요소의 classList에 active 클래스를 추가/제거한다. 이 코드는 하나의 ul 요소에 대해 이벤트를 추가하고, 클릭한 요소의 가장 가까운 li 요소에만 active 클래스를 추가/제거한다.

따라서, 두 코드 모두 요구사항에 따라 작동하지만, 1번 코드는 여러 개의 li 요소가 각각 클릭될 때마다 active 클래스를 추가/제거하고, 2번 코드는 하나의 ul 요소에 대해서만 이벤트를 추가하고, 클릭된 요소의 가장 가까운 li 요소에만 active 클래스를 추가/제거한다.

두 코드 모두 요구사항에 따라 작동하지만, 상황에 따라 적절한 코드가 달라질 수 있다.

1번 코드는 모든 li 요소에 대해 각각 이벤트 핸들러를 등록하기 때문에, 많은 li 요소가 있는 경우에는 이벤트 리스너가 많이 등록되어 성능 문제가 발생할 수 있다.

2번 코드는 ul 요소에만 하나의 이벤트 핸들러를 등록하기 때문에, 성능 문제가 발생하지 않는다. 또한, event.target.closest('li')를 사용하여 클릭된 요소의 가장 가까운 li 요소를 찾기 때문에, 중첩된 요소가 있는 경우에도 올바른 요소를 선택할 수 있다.

따라서, 만약 많은 수의 li 요소가 있는 경우에는 2번 코드가 더 적합하다. 그러나, 예시 2의 경우 클릭된 요소의 가장 가까운 li 요소를 찾는 과정이 추가되기 때문에, 예시 1의 경우보다 약간 더 많은 연산이 필요하다. 그러므로 단일 ul 요소에 대해서만 이벤트를 처리해야 하는 경우에는 1번 코드가 더 적합할 수 있다.

종합적으로, 어떤 코드가 더 좋은지는 상황에 따라 다르며, 코드의 효율성과 가독성을 고려하여 선택해야
한다.



