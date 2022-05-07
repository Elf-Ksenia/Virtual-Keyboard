const firstMode = document.createElement('span');
firstMode.classList.add('off');
const secondMode = document.createElement('span');
secondMode.classList.add('on');
const char = document.createElement('li');

/*let apostrophe = document.createElement('li');
apostrophe.classList.add('symbol');
apostrophe.append(firstMode);
apostrophe.append(secondMode);
let one = document.createElement('li');
one.classList.add('symbol');
one.append(document.createElement('span').classList.add('first-mode'));
one.firstChild.textContent = '1'
one.append(document.createElement('span').classList.add('second-mode'));
one.lastChild.textContent = '!'
let two = document.createElement('li');
two.classList.add('symbol');
two.append(document.createElement('span').classList.add('first-mode'));
two.firstChild.textContent = '2'
two.append(document.createElement('span').classList.add('second-mode'));
two.lastChild.textContent = '@'
let three = document.createElement('li');
three.classList.add('symbol');
three.append(firstMode);
three.firstChild.textContent = '3'
three.append(secondMode);
three.lastChild.textContent = '#'
let four = document.createElement('li');
four.classList.add('symbol');
four.append(firstMode);
four.append(secondMode);
let five = document.createElement('li');
five.classList.add('symbol');
five.append(firstMode);
five.append(secondMode);
let six = document.createElement('li');
six.classList.add('symbol');
six.append(firstMode);
six.append(secondMode);
let seven = document.createElement('li');
seven.classList.add('symbol');
seven.append(firstMode);
seven.append(secondMode);
let eight = document.createElement('li');
eight.classList.add('symbol');
eight.append(firstMode);
eight.append(secondMode);
let nine = document.createElement('li');
nine.classList.add('symbol');
nine.append(firstMode);
nine.append(secondMode);
let zero = document.createElement('li');
zero.classList.add('symbol');
zero.append(firstMode);
zero.append(secondMode);
*/
const keyboard = document.createElement('ul');
keyboard.classList.add('keyboard');
//keyboard.append(apostrophe, one, two, three, four, five, six, seven, eight, nine, zero);
const container = document.createElement('div');
container.classList.add('container');
const textarea = document.createElement('textarea');
textarea.classList.add('write');
textarea.setAttribute('rows', '6');
textarea.setAttribute('cols', '60');

const body = document.querySelector('body');
body.append(container);
container.append(textarea, keyboard);
const keys = ['§', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '-', '=', 'backspace', 'tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'caps lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'enter', 'shift', '`', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '\,', '\.', '/', '&#5123', 'shift', 'fn', 'cntrl', 'alt', 'cmd', '', 'cmd', 'alt', '&#5130', '&#5121', '&#5125'];
const write = document.querySelector('.write');
let character;
let isInTextarea;


keys.forEach(function (key, i) {
  let li = document.createElement('li');
  li.innerHTML = key;
  keyboard.append(li);
  if (li.innerHTML == '') {
    li.classList.add('space');
  }
  if (li.innerHTML == 'backspace') {
    li.classList.add('backspace');
  }
  if (li.innerHTML == 'tab') {
    li.classList.add('tab')
  }
  if (li.innerHTML == 'caps lock') {
    li.classList.add('capslock');
  };
  if (li.innerHTML == 'enter') {
    li.classList.add('enter');
  }
  if (i == 41) {
    li.classList.add('left-shift');
  }
  if (/[a-z]/.test(li.innerHTML) == true && li.innerHTML.length == 1) {
    li.classList.add('letter')
  }


  li.addEventListener('click', function () {
    write.focus();
    if (li.innerHTML == 'shift') {
      letters.forEach(function (letter) {
        letter.classList.add('uppercase');
      })
    }

    if (li.innerHTML == 'caps lock') {
      letters.forEach(function (letter) {
        letter.classList.toggle('uppercase');
      })
    }

    if (/^[a-z0-9!"#$%&'()*+,-./:;<=>?@\[\]\\^_`{|}~§]$/.test(li.innerHTML) == true) {
      character = li.innerHTML;
      if (li.classList.contains('uppercase')) {
        character = character.toUpperCase();
        letters.forEach(function (letter) {
          letter.classList.remove('uppercase');
        })
      }
      write.innerHTML = write.innerHTML.concat(character);
    }

    if (li.innerHTML == '') {
      character = ' ';
      write.innerHTML = write.innerHTML.concat(character);
    }

    if (li.innerHTML == 'enter') {
      character = '\n';
      write.innerHTML = write.innerHTML.concat(character);
    }

    if (li.innerHTML == 'tab') {
      character = '\t';
      write.innerHTML = write.innerHTML.concat(character);
    }

    if (li.innerHTML == 'backspace' && write.innerHTML.length > 0) {
      write.innerHTML = write.innerHTML.substring(0, write.innerHTML.length - 1);
    }
    write.setAttribute('value', `${write.innerHTML}`);
    write.selectionStart = write.value.length;

    if (key == '&#5130') { //не знаю, как сделать цикл
      let n = 1;
      write.selectionEnd = write.value.length - n;
      n += n;
    }

    if (key == '&#5125') {

    }

  })
})
const letters = Array.from(document.getElementsByClassName('letter'));

