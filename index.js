import './index.css';
import JS_IMAGE from './assets/javaScript.png';

console.log('Hello World!');

const iLoveJavaScript = document.createElement('h1');
iLoveJavaScript.textContent = 'I love JavaScript';
const imageJS = document.createElement('img');
imageJS.src = JS_IMAGE;

document.body.append(iLoveJavaScript);
document.body.append(imageJS);
