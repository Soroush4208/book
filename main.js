// const words = ['Hello', 'world','welcome','to','javaScript'];
// const sentence = words.join(); // sentence برابر است با "Hello world"

// console.log(sentence);

// const numbers = [5, 2, 3, 4.6];
// const sum = numbers.reduce((a, s) => a + s, 0); // sum برابر است با 10

// console.log(sum);

// const items = [1, 2, 3, 4,5];
// items.splice(2,1, 'a', 'b'); // items برابر است با [1, 'a', 'b', 4]

// console.log(items);

// const letters = ['a', 'b','q', 'c','q','q'];
// const position = letters.indexOf('q'); // position برابر است با 1

// console.log(position);

// const lettersTow = ['a', 'b','q', 'c','q','q'];
// const positionTow = lettersTow.lastIndexOf('q'); // position برابر است با 1

// console.log(positionTow);

// const numbers = [5, 12, 8,22,32,21];
// const found = numbers.find(num => num > 20); // found برابر است با 12
// console.log(found);

// const numbers = [5,4, 12, 8];
// const index = numbers.findIndex(num => num > 10); // index برابر است با 1
// console.log(index);
const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');
const openBtn = document.querySelector('#open-btn');
const closeBtn = document.querySelector('#button-close');
const book = document.querySelector('#book');
const pop_up = document.querySelector('.pop-up');
const overflow = document.querySelector('#overflow');

const paper1 = document.querySelector('#p1');
const paper2 = document.querySelector('#p2');
const paper3 = document.querySelector('#p3');
const paper4 = document.querySelector('#p4');
const paper5 = document.querySelector('#p5');

prevBtn.addEventListener('click', goPrevPage);
nextBtn.addEventListener('click', goNextPage);
openBtn.addEventListener('click', openPopUp);
closeBtn.addEventListener('click', closePopUp);
overflow.addEventListener('click', closePopUp);

let currentLocation = 1;
let numOfPages = 5;
let maxLocation = numOfPages + 1;

function openBook() {
  book.style.transform = 'translateX(50%)';
  prevBtn.style.transform = 'translateX(-180px)';
  nextBtn.style.transform = 'translateX(180px)';
}
function openPopUp() {
  pop_up.style.display = 'flex';
  overflow.style.display = 'flex';
}

function closePopUp() {
  pop_up.style.display = 'none';
  overflow.style.display = 'none';
}

function closeBook(isAtBeginning) {
  if (isAtBeginning) {
    book.style.transform = 'translateX(0%)';
  } else {
    book.style.transform = 'translateX(100%)';
  }
  prevBtn.style.transform = 'translateX(0)';
  nextBtn.style.transform = 'translateX(0)';
}

function goNextPage() {
  if (currentLocation < maxLocation) {
    switch (currentLocation) {
      case 1:
        openBook();
        paper1.classList.add('flipped');
        paper1.style.zIndex = 1;
        break;
      case 2:
        paper2.classList.add('flipped');
        paper2.style.zIndex = 2;
        break;
      case 3:
        paper3.classList.add('flipped');
        paper3.style.zIndex = 3;
        break;
      case 4:
        paper4.classList.add('flipped');
        paper4.style.zIndex = 4;
        break;
      case 5:
        paper5.classList.add('flipped');
        paper5.style.zIndex = 5;
        closeBook(false); // فراخوانی با false برای بسته شدن کتاب
        break;
      default:
        throw new Error('Unknown state');
    }
    currentLocation++;
  }
}

function goPrevPage() {
  if (currentLocation > 1) {
    currentLocation--; // کاهش currentLocation

    switch (currentLocation) {
      case 1:
        closeBook(true);
        paper1.classList.remove('flipped');
        paper1.style.zIndex = 5;
        break;
      case 2:
        openBook(); // باز کردن کتاب در صفحه 2
        paper2.classList.remove('flipped');
        paper2.style.zIndex = 4;
        break;
      case 3:
        paper3.classList.remove('flipped');
        paper3.style.zIndex = 3;
        break;
      case 4:
        paper4.classList.remove('flipped');
        paper4.style.zIndex = 2;
        break;
      case 5:
        openBook(); // باز کردن کتاب در صفحه 5
        paper5.classList.remove('flipped');
        paper5.style.zIndex = 1;
        break;
      default:
        throw new Error('Unknown state');
    }
  }
}
