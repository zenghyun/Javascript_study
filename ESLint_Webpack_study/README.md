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

<img width="800" height="400" src="https://user-images.githubusercontent.com/114131063/230819690-d410418b-459c-49d4-9b8d-8920d995a16f.png">


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

### 웹팩 설치 

```javascript
npm install --save-dev webpack@4 --save-exact 
```

