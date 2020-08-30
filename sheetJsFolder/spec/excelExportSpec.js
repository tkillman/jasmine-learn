var excelHandler = {
    getExcelFileName : function(){
        return 'aoa-test.xlsx';
    },
    getSheetName : function(){
        return 'AOA Test Sheet';
    },
    getExcelData : function(){
        return [['이름' , '나이', '부서'],['도사원' , '21', '인사팀'],['김부장' , '27', '비서실'],['엄전무' , '45', '기획실']];
    },
    getWorksheet : function(){
        return XLSX.utils.aoa_to_sheet(this.getExcelData());
    }
}

function s2ab(s) { 
    var buf = new ArrayBuffer(s.length); //convert s to arrayBuffer
    var view = new Uint8Array(buf);  //create uint8array as viewer
    for (var i=0; i<s.length; i++) view[i] = s.charCodeAt(i) & 0xFF; //convert to octet
    return buf;    
}

function handleExcelDataAll(sheet){
	handleExcelDataHeader(sheet); // header 정보 
	handleExcelDataJson(sheet); // json 형태
	handleExcelDataCsv(sheet); // csv 형태
	handleExcelDataHtml(sheet); // html 형태
}
function handleExcelDataHeader(sheet){
    var headers = get_header_row(sheet);
    console.log(JSON.stringify(sheet));
    $("#displayHeaders").html(JSON.stringify(headers));
}
function handleExcelDataJson(sheet){
    console.log(JSON.stringify(XLSX.utils.sheet_to_json (sheet)));
    $("#displayExcelJson").html(JSON.stringify(XLSX.utils.sheet_to_json (sheet)));
}
function handleExcelDataCsv(sheet){
    $("#displayExcelCsv").html(XLSX.utils.sheet_to_csv (sheet));
}
function handleExcelDataHtml(sheet){
    
    $("#displayExcelHtml").html(XLSX.utils.sheet_to_html (sheet));
}

// 출처 : https://github.com/SheetJS/js-xlsx/issues/214
function get_header_row(sheet) {
    var headers = [];
    var range = XLSX.utils.decode_range(sheet['!ref']);
    var C, R = range.s.r; /* start in the first row */
    /* walk every column in the range */
    for(C = range.s.c; C <= range.e.c; ++C) {
        var cell = sheet[XLSX.utils.encode_cell({c:C, r:R})] /* find the cell in the first row */

        var hdr = "UNKNOWN " + C; // <-- replace with your desired default 
        if(cell && cell.t) hdr = XLSX.utils.format_cell(cell);

        headers.push(hdr);
    }
    return headers;
}

describe('excelExportSpec', () => {
    describe('excelExport', () => {
        var wbBlob;
        beforeEach(() => {
            // step 1. workbook 생성
            var wb = XLSX.utils.book_new();

            // step 2. 시트 만들기 
            var newWorksheet = excelHandler.getWorksheet();

            // step 3. workbook에 새로만든 워크시트에 이름을 주고 붙인다.  
            XLSX.utils.book_append_sheet(wb, newWorksheet, excelHandler.getSheetName());

            // step 4. 엑셀 파일 만들기 
            var wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'binary' });

            wbBlob = new Blob([s2ab(wbout)], { type: "application/octet-stream" });
            // step 5. 엑셀 파일 내보내기
            //saveAs(new Blob([s2ab(wbout)], { type: "application/octet-stream" }), excelHandler.getExcelFileName());
        })

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

        it('change', () => {
            var fileEl = document.createElement('input');
            fileEl.type = "file";
            var excelProcess = ExcelExport(ExcelStateData, fileEl);
            spyOn(excelProcess, 'fnTest');
            const e = new Event('change');
            fileEl.dispatchEvent(e);
            expect(excelProcess.fnTest).toHaveBeenCalled();
        });

        it('parseProcess() 파일 파싱', () => {
            var fileEl = document.createElement('input');
            fileEl.type = "file";
            var excelProcess = ExcelExport(ExcelStateData, fileEl);
            var initData = excelHandler.getExcelData();
            var parseData = excelProcess.parseProcess(wbBlob, handleExcelDataAll);
            
            expect(initData).toBe(parseData);
        });
    });
});