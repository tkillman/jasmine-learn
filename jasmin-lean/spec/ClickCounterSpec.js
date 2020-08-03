describe("ClickCounterSpec 모듈", () =>{
    describe('getValue()', () => {
        it('value의 값을 가져온다.', () => {
            //준비
            const counter = ClickCounter();
            //실행
            const value = counter.getValue();
            //단언
            expect(value).toBe(0);
        })
    })

    describe('increase()', () => {
        it('value의 값을 증가시킨다.', () => {
            //준비
            const counter = ClickCounter();
            //실행
            const initialValue = counter.getValue();
            //단언
            expect(value).toBe(0);
        })
    })
})