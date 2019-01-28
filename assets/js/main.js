// const pdf = require('node-pdftk');

let $fileName = $('input[name="pdf"]');
let $uploadFile = $('#upload');
let fileValue; 
let fileName;

$(document).ready(function () {
    $uploadFile.click(function () {
        $fileName.trigger('click');
    });
    $fileName.change(function () {
        fileValue = this.value;
        fileName = typeof value == 'string' ? fileValue.match(/[^\/\\]+$/)[0] : value[0];
        console.log(fileName);
    })
});