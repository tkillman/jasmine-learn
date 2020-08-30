describe('excelExportSpec', () => {
    describe('excelExport', () => {
        it('ExcelExport() excelStateData가 없으면 에러를 발생한다.', () => {
            var actual = function () {
                ExcelExport();
            }
            expect(actual).toThrowError();
        });

        it('ExcelExport() fileEl가 없으면 에러를 발생한다.', () => {
            
            var actual = function () {
                ExcelExport(ExcelStateData);
            }
            expect(actual).toThrowError();
        });

        it('onchange', () => {
            
        });
    });
});