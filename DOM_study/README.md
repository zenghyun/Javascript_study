## getBoundingClientRect() 

getBoundingClientRect()은 자바스크립트에서 사용하는 메서드 중 하나로, 웹 페이지 상의 특정 요소의 크기와 위치에 관한 바운딩 사각형 정보를 제공하는 DOMRect 객체를 반환합니다.

이 메서드는 top, bottom, left, right, width, height 등과 같은 속성을 포함하는 DOMRect 객체를 반환합니다.

이 메서드는 요소의 크기와 위치를 상대적으로 가져올 수 있어, 요소의 위치를 계산하고 이동시키는 등의 작업에 유용하게 사용됩니다.

<br>

## offsetTop, offsetLeft 등
최상단 지점에서의 거리로 이 좌표의 상단 또는 이 좌표 시스템의 시작으로부터 거리를 나타낸다. 항상 문서의 시작에 상대적이라서 뷰포트와 상관없이 스크롤 해도 변하지 않는다. 

<br>

## clientTop, clientLeft 
client 특성은 내부 위치를 지정한다. 
콘텐츠의 왼쪽 최상단 지점과의 거리를 알려주는데 박스의 콘텐츠는 기본적으로 테두리와 잠재적으로 렌더링 될 수 있는 스크롤바를 제외한 전체 박스를 의미한다. 

<br>

## offsetWidth, offsetHeight 
콘텐츠의 전체 너비와 높이를 나타낸다. 이때는 테두리와 스크롤바를 포함한다. 

<br>

## clientWidth, clientHeight 
테두리와 스크롤바를 제외한 내부 너비와 높이를 나타낸다. 

<br>

## scroolHeight 
콘텐츠의 전체 높이를 나타낸다. 이는 현재 콘텐츠에서 보이지 않는 부분도 포함한 높이를 말한다. 

즉, 화면 밖으로 스크롤 되어 보이지 않는 부분이 있다면, 그 부분까지 포함해서 전체 높이를 알려준다. 

<br>

## scroolTop
콘텐츠 안에서 콘텐츠를 얼마나 스크롤 하느냐에 따라 결괏값이 달라진다. 

<br>

## window.innerWidth, window.innerHeight
화면에 나타나는 너비와 높이를 말한다. 따라서 개발자 도구나 상단 URL바를 포함하지 않는다. 

하지만 Internet Explorer에 표시되는 스크롤바가 있거나 일반적인 Windows의 스크롤바가 있는 경우 이는 스크롤바를 포함하기 때문에 콘텐츠에서 사용 가능한 것보다 더 많은 너비와 높이를 주게되는 문제가 발생한다. 

따라서 실제 가능한 너비와 높이를 구하는데 더 좋은 방법은 

**document.documentElement.clientWidth와 document.documentElement.clientHeight**를 쓰는 것이다. 

실제 사용할 수 있는 너비와 높이를 알려준다.

<br>

## scrollIntoView({how:?}) 
### how: behavior or auto 
<br>
자동으로 해당 뷰로 스크롤한다. (뷰로 스크롤 할 때 유용한 방법)
점핑을 의미 즉, 애니메이션 없이 즉시 이동함. 

※ safari 지원 안함 

## scrollTo 
문서 내의 특정 위치로 스크롤하는 데 사용된다. scrollTo 메서드는 x와 y의 값을 받아서 문서의 해당 위치로 스크롤 한다. 

즉, 정해진 좌표로 이동하고 반복된 값을 사용하면 더이상 이동하지 않음

<br>

## scrollBy
scrollBy는 현재 스크롤 위치를 기준으로 상대적으로 스크롤하는 데 사용됩니다. scrollBy 메서드는 x와 y 값을 받아서 현재 스크롤 위치에 해당 값만큼 추가로 스크롤합니다. 

즉 정해진 값만큼 이동하고 반복된 값을 사용하면 계속 이동함 

<br>

