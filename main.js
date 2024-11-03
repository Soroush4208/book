const pagesData = [
  {
    frontImg: './New folder/11zon_compressed/pdf (1).jpg',
    backImg: './New folder/11zon_compressed/pdf (2).jpg',
  },
  {
    frontImg: './New folder/11zon_compressed/pdf (3).jpg',
    backImg: './New folder/11zon_compressed/pdf (4).jpg',
  },
  {
    frontImg: './New folder/11zon_compressed/pdf (5).jpg',
    backImg: './New folder/11zon_compressed/pdf (6).jpg',
  },
  {
    frontImg: './New folder/11zon_compressed/pdf (7).jpg',
    backImg: './New folder/11zon_compressed/pdf (8).jpg',
  },
  {
    frontImg: './New folder/11zon_compressed/pdf (9).jpg',
    backImg: './New folder/11zon_compressed/pdf (10).jpg',
  },
  // {
  //   frontImg: './New folder/11zon_compressed/pdf (11).jpg',
  //   backImg: './New folder/11zon_compressed/pdf (12).jpg',
  // },
  // {
  //   frontImg: './New folder/11zon_compressed/pdf (13).jpg',
  //   backImg: './New folder/11zon_compressed/pdf (14).jpg',
  // },
  // {
  //   frontImg: './New folder/11zon_compressed/pdf (15).jpg',
  //   backImg: './New folder/11zon_compressed/pdf (16).jpg',
  // },
];

const bookContainer = document.querySelector('#book');
const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');
const openBtn = document.querySelector('#open-btn');
const closeBtn = document.querySelector('#button-close');
const pop_up = document.querySelector('.pop-up');
const overflow = document.querySelector('#overflow');

let currentLocation = 1;
const numOfPages = pagesData.length;
const maxLocation = numOfPages + 1;

pagesData.forEach((pageData, index) => {
  const paper = document.createElement('div');
  paper.classList.add('paper');
  paper.id = `p${index + 1}`;
  const front = document.createElement('div');
  front.classList.add('front');
  const frontContent = document.createElement('div');
  frontContent.classList.add('front-content');
  const frontImg = document.createElement('img');
  frontImg.src = pageData.frontImg;
  frontImg.classList.add('img-pdf');
  frontContent.appendChild(frontImg);
  front.appendChild(frontContent);
  const back = document.createElement('div');
  back.classList.add('back');
  const backContent = document.createElement('div');
  backContent.classList.add('back-content');
  const backImg = document.createElement('img');
  backImg.src = pageData.backImg;
  backImg.classList.add('img-pdf');
  backContent.appendChild(backImg);
  back.appendChild(backContent);

  paper.appendChild(front);
  paper.appendChild(back);
  bookContainer.appendChild(paper);
});

function openPopUp() {
  pop_up.style.display = 'flex';
  overflow.style.display = 'flex';
  openBtn.style.display = 'none';
}

function closePopUp() {
  pop_up.style.display = 'none';
  overflow.style.display = 'none';
  openBtn.style.display = 'flex';
}

function openBook() {
  const translateValue =
    window.innerWidth <= 576 ? 50 : window.innerWidth <= 850 ? 50 : 50;
  const prevTranslate =
    window.innerWidth <= 576 ? -65 : window.innerWidth <= 850 ? -175 : -205;
  const nextTranslate =
    window.innerWidth <= 576 ? 65 : window.innerWidth <= 850 ? 175 : 205;
  bookContainer.style.transform = `translateX(${translateValue}%)`;
  prevBtn.style.transform = `translateX(${prevTranslate}px)`;
  nextBtn.style.transform = `translateX(${nextTranslate}px)`;
}

function closeBook(isAtBeginning) {
  if (isAtBeginning) {
    bookContainer.style.transform = 'translateX(0%)';
  } else {
    const translateValue = window.innerWidth <= 576 ? 108 : 105;
    bookContainer.style.transform = `translateX(${translateValue}%)`;
  }
  prevBtn.style.transform = 'translateX(-10px)';
  nextBtn.style.transform = 'translateX(25px)';
}

function goNextPage() {
  if (currentLocation < maxLocation) {
    const currentPaper = document.querySelector(`#p${currentLocation}`);
    currentPaper.classList.add('flipped');
    currentPaper.style.zIndex = currentLocation;

    if (currentLocation === 1) openBook();
    if (currentLocation === numOfPages) closeBook(false);
    currentLocation++;
  }
}

function goPrevPage() {
  if (currentLocation > 1) {
    currentLocation--;
    const currentPaper = document.querySelector(`#p${currentLocation}`);
    currentPaper.classList.remove('flipped');
    currentPaper.style.zIndex = numOfPages - currentLocation;

    if (currentLocation === 1) closeBook(true);
    if (currentLocation === numOfPages) openBook();
  }
}

prevBtn.addEventListener('click', goPrevPage);
nextBtn.addEventListener('click', goNextPage);
openBtn.addEventListener('click', openPopUp);
closeBtn.addEventListener('click', closePopUp);
overflow.addEventListener('click', closePopUp);
