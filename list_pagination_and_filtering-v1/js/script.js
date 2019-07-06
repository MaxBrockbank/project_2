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
const studentList = document.querySelectorAll('.student-list');
const itemsPerPage = 10;



/** showPage function. Sets the start and end index number for the pages.
Loops through the length of the const 'list', which is then compared to the starting and ending index numbers.
Elements within the const 'list' are displayed accordingly.
**/

const showPage = (list, page) => {
  let startIndex = (page * itemsPerPage) - itemsPerPage;
  let endIndex = page * itemsPerPage;

  for(let i = 0; i<=list.length; i++) {
    if ( i >= startIndex && i < endIndex){
      (list[i]).style.display = 'block';
    } else {
      (list[i]).style.display = 'none';
    }
  }
};

console.log(showPage(studentList, 5));
/***
   Create the `appendPageLinks function` to generate, append, and add
   functionality to the pagination buttons.
***/
const appendPageLinks = list => {
  const div = document.createElement('div');
  div.className = 'pagination';
  document.querySelector('.page').append(div);
  const ul = document.createElement('ul');
  div.append(ul);

  for (let i = 0; i < (list.length/itemsPerPage); i++){
    const li = document.createElement('li');
    ul.append(li);
    const a = document.createElement('a');
    li.append(a);
    a.setAttribute('href', '#');
    a.textContent = [i];
  };
};

appendPageLinks(studentList);
// Remember to delete the comments that came with this file, and replace them with your own code comments.