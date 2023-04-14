# Potential Security Holes

중요하고 민감한 정보는 클라이언트 측 자바스크립트 코드에 넣으면 안된다. 

## Security Details In Your Code
- Your JavaScript code can be read by ANYONE
- Security-relevant details can be read
- Attackers may be able to aubse exposed data
- Example: Database access credentials exposed in code

예를 들어, 클라이언트 측 코드에 데이터베이스 자격 증명(또는 유사한 데이터)을 저장하면 안된다. 

악의적인 의도를 가진 사용자가 해당 자격 증명을 읽고 이것으로 데이터베이스에 접근할 수 있다. 

<br>

## Cross-Site Scripting Attacks (XSS)
크로스사이트 스크립팅: Javascript에서 가장 위험한 공격 패턴 

- Attack pattern where malicious JS code gets injected + executed
- Injected code can do ANYTHING your code could do as well
- Very dangerous: Full behind-ths-scenes control for attacker 
- Example: Unchecked user-generated content 
   
<br>

**안전성 검사(Sanitize)** : 가지고 있는 JavaScript 구문을 제거하는 것

안전성 검사는 가능한 서버 측에서 이뤄져야 한다. 

서버가 없는 클라이언트 측 코드의 경우 sanitize.html을 이용할 수 있다. 

[sanitize.html](https://www.npmjs.com/package/sanitize-html)

**node**

```npm
npm install sanitize-html 
```

**사용 방법**

```javascript
import sanitizeHtml from 'sanitize-html'

// 생략 

constructor(coordinates, address) {
        new Map(coordinates);
        const headerTitleEl = document.querySelector('header h1');
        headerTitleEl.innerHTML = sanitizeHtml(address);
    }
```
innerHTML과 같이 CSRF의 위험이 있는 곳에 **sanitizeHtml(검사할 것)** 과 같이 쓴다. 

<br>

## Cross-Site Request Forgery (CSRF) 
크로스사이트 요청 위조: 사용자를 속여 링크를 클릭하여 준비된 페이지로 유도하는 것 해당 페이지에서 로컬 쿠키를 악용하여 일반적으로 통신하는 페이지에 요청을 보낸다. 

- Attack pattern that depends on injected content (e.g image)
- Requests to malicious servers are made with user's cookies
- Actions can be executed without the user knowing
- Example: Malicious image URL, XSS 

이것은 서버 측 문제에 가깝기 떄문에 서버 측에서 CSRF 공격을 예방하기 위해서는 CSRF 토큰 메커니즘을 사용해야 한다. ( node에서 서버 측 작업을 해야함 )

<br>

<img width="1003" alt="image" src="https://user-images.githubusercontent.com/114131063/232028222-91cf5eb1-cbaf-4a00-a0c7-cf5d5d0784e2.png">

<br>

## Cross-Origin Resource Sharing (CORS)
교차 출처 리소스 공유

- Not an attack pattern but a security concept 
- Request are only allowed from same origin (domain)
- Controlled via server-side response headers and browser
- Example: JavaScript Modules