## Browser Storage
<br>

- Local, Session Storage

    - 키-값 저장소 (JavaScript 객체처럼 파일에 저장)
    - 브라우저에서 작동하는 JavaScript 코드만 로컬 스토리지와 통신 가능 
    - 복잡한 데이터를 다루기에는 적합하지 않다. 

<br>

- Cookie
<br>
[Cookie(MDN)](https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie)
<br>
[Cookie(modernJs)](https://ko.javascript.info/cookie)

   - 키-값 저장소 ( 상대적으로 간단한 스토리지)
   - 미래의 어떤 시점에 데이터가 만료되게 하여 자동으로 삭제 가능 
   - 로컬 스토리지보다 사용하기에 약간 투박하지만 작업하기 좋은 API 보유 
   -  발신 HttpRequest와 함께 서버로 전송됨 
   -  로컬, 세션 스토리지와 다르게 서버에서 읽을 수 있음 ( 요청하는 헤더 안에 발신 HttpRequest가 추가되어 있음)
   -  **max-age**나 **expires** 설정하면 저장 시간 지나면 사라짐 
  
  <br>
  
  ```javascript
  document.cookie = `uid=${userId}; max-age=360`;
  ```
  - 쿠키에서 데이터를 찾을 때는 index보다는 **includes** 메서드를 이용하는 것이 좋음 

<br>

document.cookie는 쿠키에 접근할 수 있도록 해줍니다.

<br>

- 쓰기는 해당 쿠키의 값만 갱신합니다.
- 쿠키 이름과 값은 꼭 인코딩해야 합니다.
- 쿠키 하나가 차지하는 용량은 최대 4KB까지이고, 사이트 하나당 약 20여 개를 허용합니다(브라우저에 따라 다름).
- 쿠키 옵션:
- path=/의 기본값은 현재 경로이고, 설정한 경로나 그 하위 경로에서만 쿠키 정보를 볼 수 있습니다.
- domain=site.com 옵션에 아무런 값을 입력하지 않았다면 쿠키를 설정한 도메인에서만 쿠키 정보를 얻을 수  있습니다. 명시적으로 도메인 주소를 설정한 경우엔, 해당 도메인의 서브 도메인에서도 쿠키 정보를 얻을 수  있습니다.
- expires/max-age 는 쿠키의 만료 시간을 정해줍니다. 이 옵션이 없으면 브라우저가 닫힐 때 쿠키도 같이  삭제됩니다.
- secure 는 HTTPS 연결에서만 쿠키를 사용할 수 있게 합니다.
- samesite 는 요청이 외부 사이트에서 일어날 때, 브라우저가 쿠키를 보내지 못하도록 막아줍니다. XSRF 공격을 - 막는 데 유용합니다.
  
  <br>

추가 사항:
- 브라우저에 따라 서드 파티 쿠키를 허용하지 않을 수 있습니다. Safari는 기본적으로 서드 파티 쿠키를 금지합니다.
- 사용자가 EU 국가 거주자인 경우 GDPR을 준수해야 합니다. 따라서, 사용자 추적 시 반드시 동의를 얻어야 합니다.


<br>

- IndexedDB
  <br>
  [indexedDB (MDN)](https://developer.mozilla.org/ko/docs/Web/API/IndexedDB_API/Using_IndexedDB)
   - 세가지 중 가장 세련된 스토리지 도구로 클라이언트 측 데이터베이스임 
   - 브라우저에 빌트인 되어 쿼리 언어를 쓸 수 있고, 다소 복잡한 쿼리도 사용 가능
   - 연결된 레코드가 있는 다양한 테이블이 있고, JavaScript로 엑세스 할 수 있고 삭제도 가능 
   - 복잡하지만 중요하지 않은 데이터에 좋음 
   - **idb.js** => indexedDB를 훨씬 더 쉽게 사용할 수 있음
