/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/***
   Add your global variables that store the DOM elements you will
   need to reference and/or manipulate.

   But be mindful of which variables should be global and which
   should be locally scoped to one of the two main functions you're
   going to create. A good general rule of thumb is if the variable
   will only be used inside of a function, then it can be locally
   scoped to that function.
***/
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
   Create the `appendPageLinks function` to generate, append, and add
   functionality to the pagination buttons.
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
  // A function that displays 'No Results Found' if there are no names in the nameArray
  const noResults = () => {
    clearStudents();
    const message = document.createElement('h2');
    message.textContent = 'No Results Found';
    const h2Tag = document.getElementByTagName('h2');
    const newDiv = document.createElement('div').appendChild(message);
    h2Tag.appendChild(newDiv);
}
// Adding the search bar via DOM manipulation
const pageHeader = document.querySelector('.page-header');
const searchDiv = document.createElement('div');
searchDiv.className = "student-search";
const input = document.createElement('input')
input.type = 'text';
input.placeholder = 'Search for students';
pageHeader.appendChild(searchDiv);
searchDiv.appendChild(input);

// Adding functionality to the search bar
input.addEventListener ('keyup', function(e){
  clearStudents();
  const term = e.target.value.toLowerCase();
  const matchesArray = [];
  for(let i=0; i<studentList.length; i++){
    const names = studentList[i].innerHTML.toLowerCase();
    if(names.includes(term)){
      studentList[i].push(matchesArray);
    } else {
      noResults();
    }
  }

});


appendPageLinks(studentList);
showPage(studentList, 1);
