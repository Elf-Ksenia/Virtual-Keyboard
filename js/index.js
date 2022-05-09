const firstMode = document.createElement('span');
firstMode.classList.add('off');
const secondMode = document.createElement('span');
secondMode.classList.add('on');
const char = document.createElement('li');

const keyboard = document.createElement('ul');
keyboard.classList.add('keyboard');
const container = document.createElement('div');
container.classList.add('container');
const textarea = document.createElement('textarea');
textarea.classList.add('write');
textarea.setAttribute('rows', '6');
textarea.setAttribute('cols', '60');

const body = document.querySelector('body');
body.append(container);
container.append(textarea, keyboard);

const keysEn = ['§', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '-', '=', 'backspace', 'tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'caps lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'enter', 'shift', '`', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '\,', '\.', '/', '&#5123', 'shift', 'fn', 'cntrl', 'alt', 'cmd', '', 'cmd', 'alt', '&#5130', '&#5121', '&#5125'];
const keysRu = ["ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", 'backspace', 'tab', "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "\\", 'caps lock', "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "enter", 'shift', "]", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".", '&#5123', 'shift', 'fn', 'cntrl', 'alt', 'cmd', '', 'cmd', 'alt', '&#5130', '&#5121', '&#5125'];
let keys = keysEn;
const upperRegister = ['±', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '{', '}', ':', '"', '|', '~', '<', '>', '?'];
const write = document.querySelector('.write');
let character;
let isInTextarea;
let keyPressed = {};
document.addEventListener('keydown', function (event) {
  keyPressed[event.key] = true;
  if (keyPressed['Enter'] && event.code == 'Space') {
    console.log('111');
    keyboard.innerHTML = '';
    if (JSON.stringify(keys) === JSON.stringify(keysEn)) {
      keys = keysRu;
      buildKeyboard()
    }
    else {
      keys = keysEn;
      buildKeyboard()
    }
  }
  
})
document.addEventListener('keyup', (event) => {
  delete keyPressed[event.key];
})

function buildKeyboard() {
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
    if (li.innerHTML == 'enter') {
      li.classList.add('enter');
    }
    if (li.innerHTML.length == 1 && /^[a-z]$/.test(li.innerHTML) == true) {
      li.classList.add('letter')
    }
    if (li.innerHTML == 'shift') {
      const shift = li;
    }

    document.addEventListener('click', function () {
      if (key == 'shift') {
        keys = '';
        keys = upperRegister;
      }
    })

    li.addEventListener('click', function () {
      write.focus();
      if (li.innerHTML == 'shift') {
        letters.forEach(function (letter) {
          letter.classList.add('uppercase');
        });
        Array.prototype.splice.apply(keys, [0, 13].concat(upperRegister.splice(0, 13)));
        keys.splice(25, 3, '{', '}', '|');
        keys.splice(38, 2, ':', '"');
        keys.splice(42, 1, '~');
        keys.splice(50, 3, '<', '>', '?');
      }


      if (li.innerHTML == 'caps lock') {
        letters.forEach(function (letter) {
          letter.classList.toggle('uppercase');
        });
      }

      if (/^[a-z0-9а-я!"#$%&'()*+,-./:;<=>?@\[\]\\^_`{|}~§]$/.test(li.innerHTML) == true) {
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
}

buildKeyboard();