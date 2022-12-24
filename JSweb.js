/*const XLSX = require('xlsx')
const workbook= XLSX.readFile("taiwan.xlsx");
let worksheet= {};
for(const sheetName of workbook.SheetNames){ worksheet[sheetName]= utils.sheet_to_json(workbook.Sheets[sheetName]); } 
var data = worksheet["工作表1"][1]['公司']; console.log(typeof(a));*/

/*const searchInput = document.getElementById('search');
const searchWrapper = document.querySelector('.autocomplete-items');
const resultsWrapper = document.querySelector(' .autocomplete-active')
//const searchCompany = document.querySelector('.autocomplete');
var data = {
    "company" : ["Google", "Apple", "Twitter"],
}
searchInput.addEventListener('keyup', () => {
    let results = [];
    let input = searchInput.value;
    if (input.length) {
        const arr = data["company"];
        results = arr.filter((item) => {
            //console.log(item.toLowerCase().includes(input.toLowerCase()));
            return item.toLowerCase().includes(input.toLowerCase());
        });
        console.log(results);
    }
    renderResults(results);
});

function renderResults(results){
    if (!results.length) {
        if(searchWrapper != null){
            return searchWrapper.classList.remove('show');
        }
    }
    const content = results.map((item) => {
      return `<li>${item}</li>`;
    }).join('');
    console.log(content);
    searchWrapper.classList.add('show');
    resultsWrapper.innerHTML = `<ul>${content}</ul>`;
}*/
import data from "./taiwan.json" assert{type: "json"};
const search = document.getElementById('search');
const searchWrapper = document.querySelector('.wrapper');
const resultsWrapper = document.querySelector('.results');



const searchCompany = async searchText =>{
    
    let matches = data["工作表1"].filter(data => {
        const regex = new RegExp(`^${searchText}`, 'gi');
        return data["代號"].match(regex) || data["公司"].match(regex);
    });
    if(searchText.length === 0){
        matches = [];
    }
    
    outputHtml(matches);
    
};
const outputHtml = results => {

    if (!results.length) {
        return searchWrapper.classList.remove('show');
    }
    if(results.length > 2){
        const content = results
            .map((item) => {
        return `<li>${item}</li>`;
    })
    .join('');
    searchWrapper.classList.add('show');
    resultsWrapper.innerHTML = `<ul>${content}</ul>`;
       
    }
}
search.addEventListener('input', () => searchCompany(search.value)); 


