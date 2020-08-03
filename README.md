# jasmine-learn

### 단위 테스트
 # 단위 
  특정 조건에서 어떻게 작동해야 할지 정의한 것.
  대게 함수로 표현
  준비(arrange), 실행(act), 단언(assert) 패턴을 따른다.
  
 ### 테스트주도개발(TDD)
 # 적색(Red), 녹색(Green), 리팩터(Refactor) 순환
 # 테스트하기 쉬운 코드
 # 관심사의 분리

 # 재스민 설치방법
 https://jasmine.github.io/pages/getting-started.html 
 
 # SpecRnner.html
 lib - library폴더
 src - 소스 폴더(예제)
 spec - 테스트 코드(예제)

 # 정리파일
 jasmin-lean - 정리한 파일
 
 테스트러너란
  테스트 코드를 실행하는 녀석
  자스민은 html 파일이 테스트 러너임
  
 #김정환 소스폴더
 https://github.com/jeonghwan-kim/lecture-develop-fe-with-tdd

 # 테스트 꾸러미 describe
 # 테스트 스펙 it
 # 기대식과 매쳐 expect(결과값).toBe(기대하는 값)
 # 스파이 spyOn(감시할 객체, 감시할 메소드)
 
 # 전역공간을 어지럽힌다.
 # 관심사의 분리가 없다.
 # 재사용이 어렵다.
 
 # 소프트웨어의 원칙
 단일책임의 원칙 - 한가지의 코드는 한가지 역할만 해야한다.
 오픈클로즈 원칙 - 확장에는 열려있고 변경에는 닫혀있어야 한다.
 -> 함수는 함수로 변경되면 안된다. 즉 하드코딩이 최대한 없고 인자로 받는다.
 다만 기능이 추가된다면 함수를 또 만드는 것이 아니라 함수를 변경한다.
 
 # 훌륭한 개발자 -> 문제해결에는 여러 방법이 있지만 최적의 방법을 찾는 것.
   --> 자주 쓰는 해결방법을 패턴이라 한다.
 
 # 자바스크립트의 자주 쓰는 패턴은 모듈패턴
 1. 임의모듈
 2. 즉시실행함수 모듈
 
 # 모듈 생성 원칙
 1. 단일 책임 원칙에 따라 모듈은 한 가지 역할만 한다.
 2. 모듈 자신이 사용할 객체가 있다면 의존성 주입 형태로 제공한다.
 
 # ClickCounter는 카운터 데이터를 다루는 모듈이다.
 전역 공간에 있는 counter변수를 ClickCounter 안에서 관리하자.
 
 # 첫번째 스펙
 ClickCounter 모듈의 getValue() 는 카운터 값을 반환한다.
 
 # 두번째 스팩
 ClickCounter 모듈의 increase() 는 카운터 값을 1만큼 증가한다.
 
 # beforeEach는 it 함수 호출 직전에 실행되는 자스민 함수다.
 describe(() => {
	beforeEach(() => {})
	, afterEach(() => {})
	, it(() => {})
 })
 
 # ClickCountView 모듈은 데이터를 출력하고 이벤트 핸들러를 바인딩하는 일을 담당
 
 # 첫번째 스팩
 ClickCountView 모듈의 updateView()는 카운트 값을 출력한다.
 
 # 두번째 스팩
 ClickCountView 모듈의 increaseAndUpdateView()는 카운트 값을 증가하고
 그 값을 출력한다.
 
 # 테스트 더블
 단위 테스트 패턴으로, 테스트하기 곤란한 컴포넌트를 대체하여 테스트하는 것
 특정한 동작을 흉내만 낼뿐이지 테스트 하기에는 적합하다.
 
 다음 5가지 통칭
 더미(dummy) : 인자를 채우기 위해 사용
 스텁(sturb) : 더미를 개선하여 실제 동작하게끔 만든 것. 리턴값을 하드 코딩한다.
 스파이(spy) : 스텁과 유사. 내부적으로 기록을 남기는 추가기능
 페이크(fake) : 스텁에서 발전한 실제 코드. 운영에서는 사용할 수 없음.
 목(mock) : 더미, 스텁, 스파이를 혼합한 형태
 
 # 세번째 스펙
 클릭 이벤트가 발생하면 increaseAndUpdateView()를 실행한다.
 
 ###추가요구사항
 # 세번째 스펙
 ClickCounter 모듈은 데이터를 주입 받는다. 
 
 # 네번째 스팩
 ClickCounter 모듈의 increase 함수는 대체될 수 있다.