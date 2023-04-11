## Helpful Tools & Why To Use Them

<br>

|<p align="center">Tool Purpose<p>|<p align="center">Tool Name<p>|<p align="center">What it does & Why<p>|
|------|---|---|
|A Development Server|webpack-deb-server OR serve (standalone tool)|Serve under (more) realistic circumstances, auto-reload|
|Bundling Tool|Webpack|Combine multiple files into bundled code (less files)|
|Code Optimization Tool|Webpack Optimizer Plugins|Optimize code (shorten function names, remove whitespace, ...)|
|Code Compilation Tool|Babel|Write modern code, get "older" code as output|
|Code Quality Checker|ESLint|Check code quality, check for conventions & patterns|

<br>
<br>
<br>

<img width="800" height="450" src="https://user-images.githubusercontent.com/114131063/230819690-d410418b-459c-49d4-9b8d-8920d995a16f.png">


<br>

### npm 프로젝트 설정하기 

내가 사용할 프로젝트에 
```javascript
npm init  
```

### npm 패키지로 작업하기

```
npm install --save-dev
```

npm에게 다음 패키지를 이 프로젝트에 개발 의존성으로 설치하고 싶다는 신호를 보내는 것

개발 의존성으로 설치하는 이유는 프로젝트의 일부로 사용하려는 제3자 패키지가 아니고 서버에 업로드하려는 코드의 일부도 아닌, 개발 과정에서 코드를 사용해 최적화와 확인 등에 이용하는 것

<br>

### ESLint로 린팅(Linting)하기 

<br>

```
npm install --save-dev eslint
```

<br>

### Configure ESLint 
[Configure ESLint](https://eslint.org/docs/latest/use/configure/)

<br>

### 웹팩 설치 

```javascript
npm install --save-dev webpack@4 --save-exact 
```


### 다수의 엔트리 포인트

<br>

예제 프로젝트에는 하나의 기본 엔트리 포인트 app.js만 있습니다.

여러 HTML 페이지가 있는 대형 프로젝트에서는 다수의 페이지(HTML 파일)에 대해 구축할 수 있는 다양한 스크립트가 있을 수 있습니다. 따라서 두 개 이상의 번들을 구축하기 원하기 때문에 하나 이상의 엔트리 포인트가 필요할 수 있습니다(즉 모든 HTML 페이지가 동일한 스크립트를 사용하는 것은 아닌 경우).

이는 Webpack으로 쉽게 구성할 수 있습니다.

아래의 코드 대신

```
entry: './src/app.js'
```

아래의 코드를 사용하세요
```
entry: {
    welcome: './src/welcome-page/welcome.js',
    about: './src/about-page/about.js',
    // 기타 등등
 
}
```
이제 Webpack은 이러한 모든 엔트리 포인트를 조회하고 엔트리 포인트당 하나의 번들을 생성합니다. 그러면 각 HTML 파일에서 이러한 번들에 연결할 수 있습니다.

대부분의 프로젝트에 적합한 간단한 규칙은 다음과 같습니다.

일반적으로 HTML 파일당 하나의 스크립트가 있으므로 HTML 파일당 하나의 엔트리 포인트 가지기.

물론 여러 HTML 파일에서 스크립트를 공유하거나 스크립트가 필요하지 않은 파일이 있는 경우 이 규칙을 따르지 않아도 됩니다.

다음 두 자료를 통해 여러 엔트리 포인트에 대해 자세히 알아볼 수 있습니다.

코드 분할 (즉 둘 이상의 번들 생성): https://webpack.js.org/guides/code-splitting/

엔트리 포인트 구성: https://webpack.js.org/concepts/#entry

그리고 공식 Webpack 문서를 확인하여 자세히 확인해 보세요. https://webpack.js.org/guides/


### wepback-dev-server can not GET 오류 해결 
[wepback-dev-server can not GET 오류 해결 ](https://despiteallthat.tistory.com/186)

<br>

###  **"build:dev": "webpack-dev-server"**

- build:dev => 개발 서버를 스핀 업하고 코드를 작성하는 동안 항상 사용함

### **"build:prod": "webpack --config webpack.config.prod.js"**

- bulid:prod => 스크립트 배포 전 페이지에 스크립트 사용 시 쓰이고 일반적으로 build:prod 명령어를 실행하는 경우는 변경 사항이 생기거나 새 버전을 완료했거나 빌드 및 출력후 서버에 푸시하려는 경우에 사용함 
