var ExcelExport = function (excelStateData, fileEl) {
    if (!excelStateData) throw Error('excelStateData is empty');
    if (!fileEl) throw Error('fileEl is empty');

    var excelProcess = {
        fnFileChange(event) {
            console.log('excelProcess', 'fnFileChange', 'start');
            console.log(excelStateData);
            console.log(excelStateData.isfileLoadingEnd);
            excelStateData.isfileLoadingEnd = false;
            var input = event.target;
            var reader = new FileReader();
            reader.onload = function () {
                console.log('reader.onload', 'start');
                var fileData = reader.result;
                var wb = XLSX.read(fileData, { type: 'binary' });
                wb.SheetNames.forEach(function (sheetName) {
                    var rowObj = XLSX.utils.sheet_to_json(wb.Sheets[sheetName]);

                    // console.log(sheetName, JSON.stringify(rowObj));
                    if (sheetName == 'Sheet1') {
                        excelStateData.excelExportData = rowObj;
                        excelStateData.isfileLoadingEnd = true;
                    }
                })
                console.log('reader.onload', 'end');
            };
            reader.readAsBinaryString(input.files[0]);
            console.log('excelProcess', 'fnFileChange', 'end');
        },
    }
    fileEl.addEventListener('onchange', excelProcess.fnFileChange(event));

    return excelProcess;
}