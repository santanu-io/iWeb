var html = '<ul>\
              <li class="bioTitle"><a href="#bioTitle">: bio</a></li>\
              <li class="researchTitle"><a href="#researchTitle">: research</a></li>\
              <li class="codesTitle"><a href="#codesTitle">: codes</a></li>\
              <li class="mediaTitle"><a href="#mediaTitle">media</a></li>\
            </ul>';

document.getElementById('stickyTabs').innerHTML = html;

const sections = document.querySelectorAll('section');
const navLi = document.getElementById('stickyTabs').querySelectorAll('ul li');

window.addEventListener('scroll', ()=> {
  let current = '';
  sections.forEach( section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if(pageYOffset >= (sectionTop - 500)){   //condition for the height and pixels
      current = section.getAttribute('id');
    }
  })

  navLi.forEach( li => {
    li.classList.remove('active');
    if(li.classList.contains(current)){
      li.classList.add('active')
    }
  })
})

var elements = document.querySelectorAll("#bio,#bioTitle,#research,#researchTitle,#codes,#codesTitle");

var url = 'newData.txt';
var newText;


function myFunction()
{
  elements.forEach(function(elem) {
    elem.innerHTML = "";
  });
  fetch("newData.txt")
    .then(function(response) {
      response.text().then(function(text) {
          document.getElementById("titleBar").innerHTML = "MMM";
      });
    });
  document.getElementById("titleTitle").innerHTML = "Publications";

}

function refreshPage() {
  window.location.reload();
}
