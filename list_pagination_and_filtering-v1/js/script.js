/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


// Global Variables
const studentList = document.querySelectorAll('.student-item');
const itemsPerPage = 10;

/** showPage function. Sets the start and end index number for the pages.
Loops through the length of the const 'list', which is then compared to the starting and ending index numbers.
Elements within the const 'list' are displayed accordingly.
**/

const showPage = (list, page) => {
  let startIndex = (page * itemsPerPage) - itemsPerPage;
  let endIndex = page * itemsPerPage;

   for (let i = 0; i<list.length; i+=1){
    if(i>=startIndex && i<endIndex){
      list[i].style.display = 'block';
    } else{
      list[i].style.display = 'none';
    }
  }
};


/***
   Pagination Buttons
***/
const appendPageLinks = list => {
  const paginationDiv = document.querySelector('div.pagination');
  const pageDiv = document.querySelector('div.page');
   if(paginationDiv !== null){
      pageDiv.removeChild(paginationDiv);
    }
    const div = document.createElement('div');
    const ul = document.createElement('ul');
    div.className = 'pagination';
    document.querySelector('.page').appendChild(div);
    div.appendChild(ul);
    const pageNumber = list.length/itemsPerPage;
    for (let i = 0; i < pageNumber; i++){
      const li = document.createElement('li');
      ul.appendChild(li);
      const a = document.createElement('a');
      li.appendChild(a);
      a.setAttribute('href', '#');
      a.textContent = i + 1;
      }
    document.addEventListener('click', () => {
      if(event.target.tagName === 'A'){
       showPage(list, event.target.textContent)
       for(let i=0; i < pageNumber; i++){
         ul.children[i].firstElementChild.classList.remove('active')
       };
       event.target.className = 'active';
     };
    })
  };

  // A function to clear off all the students from being displayed.
  const clearStudents = () => {
    for (let i = 0; i < studentList.length; i++){
      studentList[i].style.display = 'none';
    }
  }
  // Creates and hides the message 'No Results Found'
  const noResults = document.createElement('h2');
  noResults.textContent = 'No Results Found';
  const ul = document.querySelector('ul.student-list')
  ul.appendChild(noResults);
  noResults.style.display = 'none';

// Adding the search bar and button via DOM manipulation
const pageHeader = document.querySelector('.page-header');
const searchDiv = document.createElement('div');
searchDiv.className = "student-search";
const input = document.createElement('input')
input.type = 'text';
input.placeholder = 'Search for students';
pageHeader.appendChild(searchDiv);
searchDiv.appendChild(input);
const button = document.createElement('button');
button.textContent = 'Search';
searchDiv.appendChild(button);

// Adding functionality to the search bar
button.addEventListener ('click', function(e){
  clearStudents();
  const term = input.value.toLowerCase();
  let matchesArray = [];
  for(let i=0; i<studentList.length; i++){
    let names = studentList[i].textContent
    if(names.toLowerCase().includes(term)){
      studentList[i].style.display = 'block';
      matchesArray.push(studentList[i]);
      noResults.style.display = 'none';
      showPage(matchesArray, 1);
      appendPageLinks(matchesArray);
    } else if(matchesArray.length === 0) {
      noResults.style.display = 'block';
    }
  }
});


appendPageLinks(studentList);
showPage(studentList, 1);
