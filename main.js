
// const readMoreBtn = document.querySelector('.readMore-btn');
// const text = document.querySelector('.text')

// readMoreBtn.addEventListener('click',(e)=>{
//     text.classList.toggle('show-more')
// })

// function readMore(id) {
//     const textElement = document.getElementById(id);
//     textElement.classList.toggle('show-more');
// }


// function toggleText() {
//     var moreText = document.getElementById("read-more");
//     var moreText2 = document.getElementById("read-more2");
//     var moreText3 = document.getElementById("read-more3");

//     var btnText = document.getElementById("readMore-btn");
//     var btnText2 = document.getElementById("readMore-btn2");
//     var btnText3 = document.getElementById("readMore-btn3");
  
//     if (moreText.style.display === "none") {
//       moreText.style.display = "inline";
//       btnText.innerHTML = "Read Less";
//     } else {
//       moreText.style.display = "none";
//       btnText.innerHTML = "Read More";
//     }

//     if (moreText2.style.display === "none") {
//         moreText2.style.display = "inline";
//         btnText2.innerHTML = "Read Less";
//       } else {
//         moreText2.style.display = "none";
//         btnText2.innerHTML = "Read More";
//       }

//       if (moreText3.style.display === "none") {
//         moreText3.style.display = "inline";
//         btnText3.innerHTML = "Read Less";
//       } else {
//         moreText3.style.display = "none";
//         btnText3.innerHTML = "Read More";
//       }
//   }

// const readMoreButtons = document.querySelectorAll('.readMore-btn');
// // const readMore = document.querySelectorAll('.read-more');
// readMoreButtons.forEach(button=>{
//     button.addEventListener('click',()=>{
//         const readMore=button.nextElementSibling;

//         readMore.computedStyleMap.display==='block'
//     }
        
//     )
// })


const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

// Toggle navbar visibility on hamburger click
menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

