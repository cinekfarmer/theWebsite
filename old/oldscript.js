var root = document.querySelector(':root');
var croot = getComputedStyle(root);

function load() {
  if (localStorage.getItem('theme') == "light") {
	light();
  } else {
	dark();
  }
}

function changeColors() {
  if (croot.getPropertyValue('--text') == '#dedede') {
	light();
	localStorage.setItem('theme', 'light');
  } else {
    dark();
	localStorage.setItem('theme', 'dark');
  }
}

function dark() {
  root.style.setProperty('--text', '#dedede');
  root.style.setProperty('--even', '#333');
  root.style.setProperty('--odd', '#222');
}

function light() {
  root.style.setProperty('--text', '#000');
  root.style.setProperty('--even', '#dbd9d5');
  root.style.setProperty('--odd', '#cac8c4');
}

function goTo(chapter) {
  document.querySelector(chapter).scrollIntoView({behavior: 'smooth', block: 'start'});
}