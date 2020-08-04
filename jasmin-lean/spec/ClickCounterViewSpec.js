describe("ClickCounterViewSpec 모듈", () => {
    let updateEl;
    let clickCounterView;
    let clickCounter;
    let triggerEl;     
    beforeEach(() => {
        
        clickCounter = ClickCounter();

        updateEl = document.createElement('span');
        triggerEl = document.createElement('button');

        clickCounterView = ClickCounterView(clickCounter, updateEl, triggerEl);
    })
    
    describe('ClickCounterView(ClickCounter, updateEl)', () => {
        it('생성자 실행 시 ClickCounter가 없으면 에러 발생', () => {
            //준비
            
            //실행
            const actual = () => {
                ClickCounterView(null, updateEl)
            }
            //단언
            expect(actual).toThrowError()
        })

        it('생성자 실행 시 updateEl가 없으면 에러 발생', () => {
            //준비
            //실행
            const actual = () => {
                ClickCounterView(clickCounter, null);
            }
            //단언
            expect(actual).toThrowError()
        })
    })

    describe('updateView(updateEl)', () => {
        it('화면에 값을 바인딩', () => {
            //준비
            const value = 5;
            //실행
            clickCounterView.updateView(value);
            const screenValue = updateEl.innerHTML;
            
            //단언
            expect(value).toBe(parseInt(screenValue));
        })
    })

    describe('getValueAndUpdateView()', () => {
        it('데이터 출력 후 화면에 바인딩 한다. ClickCounter getValue 호출 확인', () => {
            //준비
            spyOn(clickCounter, 'getValue');
            //실행
            clickCounterView.getValueAndUpdateView();
            //단언
            expect(clickCounter.getValue).toHaveBeenCalled();
        })

        it('데이터 출력 후 화면에 바인딩 한다. ClickCounterView updateView 호출확인', () => {
            //준비
            spyOn(clickCounterView, 'updateView');
            //실행
            clickCounterView.getValueAndUpdateView();
            //단언
            expect(clickCounterView.updateView).toHaveBeenCalled();
        })
    })
    
    describe('click()', () => {
        it('클릭 이벤트', () => {
            //준비
            spyOn(clickCounterView,'getValueAndUpdateView');
            //실행
            triggerEl.click();
            //단언
            expect(clickCounterView.getValueAndUpdateView).toHaveBeenCalled();
        })
    })
})