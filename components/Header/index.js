// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

const headerContainer = document.querySelector('.header-container')
headerContainer.appendChild(Header())

function Header() {
    let header = document.createElement('div');
    header.classList.add('header');

    let date = document.createElement('span');
    date.classList.add('date');

    let title = document.createElement('h1');
    title.textContent = "Lambda Times";

    let temp = document.createElement('span');
    temp.classList.add('temp');
    temp.textContent = '98°';

    header.appendChild(date);
    header.appendChild(title);
    header.appendChild(temp);

    return header
}
