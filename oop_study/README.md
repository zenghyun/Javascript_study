## 객체 지향 프로그래밍 

코드를 작성하고 구조화하는 방법이자 코드에 대해 생각하고 판단하며 계획하는 방법 

<br>

### 헷갈린 부분 

<br>

```javascript
    activeProjectList.setSwitchHandelerFunction(
      finishedProjectList.addProject.bind(finishedProjectList)
    );

    finishedProjectList.setSwitchHandelerFunction(
      activeProjectList.addProject.bind(activeProjectList)
    );
```

<br> 

위 코드는 두 개의 ProjectList 객체 간에 상호작용할 때 사용됩니다. 두 개의 ProjectList 객체는 각각 active와 finished에 대응하는 프로젝트 목록을 나타냅니다.

setSwitchHandlerFunction 메서드는 이벤트 핸들러 함수를 설정하는 메서드입니다. 이 메서드를 호출하여 두 개의 ProjectList 객체 간의 상호작용을 설정하고 있습니다. setSwitchHandlerFunction 메서드는 switchHandlerFunction이라는 매개변수를 받습니다. 이 매개변수는 이벤트 핸들러 함수를 나타내며, 한 ProjectList 객체가 다른 ProjectList 객체로 프로젝트를 이동할 때 호출됩니다.

bind 메서드는 함수의 this 값을 바인딩(bind)하는 데 사용됩니다. 위 코드에서 bind 메서드는 finishedProjectList 객체에 대한 this 값을 addProject 메서드에 바인딩합니다. 이렇게 하면 switchHandlerFunction이 finishedProjectList 객체의 addProject 메서드를 호출할 때 this 값이 finishedProjectList 객체가 되며, 이 객체의 addProject 메서드를 호출하게 됩니다. activeProjectList 객체와 switchHandlerFunction에 대한 bind 호출도 동일한 방식으로 작동합니다.

따라서, 위 코드는 setSwitchHandlerFunction 메서드를 사용하여 두 개의 ProjectList 객체 간에 이벤트 핸들러 함수를 설정하고 있으며, 이벤트 핸들러 함수 내에서 bind 메서드를 사용하여 this 값을 설정하고 있습니다. 이를 통해 한 ProjectList 객체에서 다른 ProjectList 객체로 프로젝트를 이동할 때 적절한 메서드가 호출되도록 하고 있습니다.

<br>

### 오류 발생 

<br>

```javascript
switchBtn.addEventListener('click', this.updateProjectListsHandler);
```

<br>

원인 :  this.updateProjectListsHandler에서 this가 가리키는 것이 원래 의도한 것과 다르기 때문이다.

connectSwitchButton 함수를 호출하는 시점에서 this가 가리키는 것이 ProjectItem 인스턴스이지만, this.updateProjectListsHandler를 호출할 때는 ProjectList 인스턴스가 되어야 합니다.

이를 해결하기 위해서는 connectSwitchButton 함수에서 this.updateProjectListsHandler를 bind 함수를 사용하여 ProjectList 인스턴스로 바인딩해주어야 합니다. 예를 들어 아래와 같이 수정할 수 있습니다.

<br>


```javascript
connectSwitchButton() {

  const projectItemElement = document.getElementById(this.id);
  let switchBtn = projectItemElement.querySelector('button:last-of-type');
  switchBtn.addEventListener('click', this.updateProjectListsHandler.bind(null, this.id));

}

```