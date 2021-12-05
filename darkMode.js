let link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'darkMode.css';

let head = document.getElementsByTagName('HEAD')[0];
head.appendChild(link);
