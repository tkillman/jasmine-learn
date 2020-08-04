describe("ClickCounterSpec 모듈", () =>{
    let counter; 

    beforeEach(function() {
        counter = ClickCounter();
    });

    describe('getValue()', () => {
        it('value의 값을 가져온다.', () => {
            //준비
            //실행
            const value = counter.getValue();
            //단언
            expect(value).toBe(0);
        })
    })

    describe('increase()', () => {
        it('value의 값을 증가시킨다.', () => {
            //준비
            const initialValue = counter.getValue();
            //실행
            counter.increase();
            let increaseValue = counter.getValue();
            //단언
            expect(increaseValue).toBe(initialValue + 1);
        })
    })
})