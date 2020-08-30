function exportData(elementObj){
        
    var returnObj = new Object();
    var input = elementObj;
    var reader = new FileReader();
    
    reader.onload = function () {
        var fileData = reader.result;
        var wb = XLSX.read(fileData, { type: 'binary' });
        wb.SheetNames.forEach(function (sheetName) {
            var rowObj = XLSX.utils.sheet_to_json(wb.Sheets[sheetName]);
            console.log('result aa',returnObj);
            //console.log(sheetName, JSON.stringify(rowObj));
            if (sheetName == 'Sheet1') returnObj = rowObj;
        })
    };
    reader.readAsBinaryString(input.files[0]);
    console.log('exportData', returnObj);
    return returnObj;
}

function excelExport(event) {
    var input = event.target;
    var reader = new FileReader();
    reader.onload = function () {
        var fileData = reader.result;
        var wb = XLSX.read(fileData, { type: 'binary' });
        wb.SheetNames.forEach(function (sheetName) {
            var rowObj = XLSX.utils.sheet_to_json(wb.Sheets[sheetName]);
            
           // console.log(sheetName, JSON.stringify(rowObj));
            if (sheetName == 'Sheet1') jsonObj = rowObj;
            
        })
    };
    reader.readAsBinaryString(input.files[0]);
}

function excelExport3 (event, fileLoadData){
    console.log('common.js', 'excelExport3', 'start');
    setTimeout(() => {
        excelExport2(event, fileLoadData);
    }, 3000);
    console.log('common.js', 'excelExport3', 'end');

}
function excelExport2(event, fileLoadData) {
    console.log('common.js', 'excelExport2', 'start');
    console.log(fileLoadData);
    console.log(fileLoadData.isLoadingEnd);
    fileLoadData.isLoadingEnd = false;
    var input = event.target;
    var reader = new FileReader();
    reader.onload = function () {
        console.log('common.js', 'reader.onload', 'start');
        var fileData = reader.result;
        var wb = XLSX.read(fileData, { type: 'binary' });
        wb.SheetNames.forEach(function (sheetName) {
            var rowObj = XLSX.utils.sheet_to_json(wb.Sheets[sheetName]);
            
           // console.log(sheetName, JSON.stringify(rowObj));
            if (sheetName == 'Sheet1') {
                fileLoadData.returnObj = rowObj;
                fileLoadData.isLoadingEnd = true;
            }
            
        })
        console.log('common.js', 'reader.onload', 'end');
        fileLoadData.parseSecond = 5;    
    };
    fileLoadData.parseSecond = 0;
    reader.readAsBinaryString(input.files[0]);
    console.log('common.js', 'excelExport2', 'end');   
}