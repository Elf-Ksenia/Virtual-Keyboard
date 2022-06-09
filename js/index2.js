const firstMode = document.createElement('span');
firstMode.classList.add('off');
const secondMode = document.createElement('span');
secondMode.classList.add('on');
const char = document.createElement('li');
const comment = document.createElement('div');
comment.innerHTML = 'For changing language press Shift+Space'

const keyboard = document.createElement('ul');
keyboard.classList.add('keyboard');
const container = document.createElement('div');
container.classList.add('container');
const textarea = document.createElement('textarea');
textarea.classList.add('write');
textarea.setAttribute('rows', '6');
textarea.setAttribute('cols', '60');
textarea.setAttribute('autofocus', 'true');

let shiftPressed = false

const body = document.querySelector('body');
body.append(container);
container.append(textarea, keyboard, comment);

const keysEn = ['`', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '-', '=', 'backspace', 'tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'caps lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'enter', 'shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '\,', '\.', '/', 'shift', 'fn', 'cntrl', 'opt', 'cmd', '', 'cmd', 'opt', '&#5130', '&#5123', '&#5121', '&#5125'];
const keysRu = ["ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", 'backspace', 'tab', "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "\\", 'caps lock', "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "enter", 'shift', "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".", 'shift', 'fn', 'cntrl', 'opt', 'cmd', '', 'cmd', 'opt', '&#5130', '&#5123', '&#5121', '&#5125'];
let keys = keysEn;
const upperRegister = { '~': 0, '!': 1, '@': 2, '#': 3, '$': 4, '%': 5, '^': 6, '&': 7, '*': 8, '(': 9, ')': 10, '_': 11, '+': 12, '{': 25, '}': 26, ':': 38, '"': 39, '|': 27, '<': 49, '>': 50, '?': 51 };
const write = document.querySelector('.write');
let character;
let isInTextarea;
let keyPressed = {};

document.addEventListener('keydown', function (event) {
  keyPressed[event.key] = true;
  if (keyPressed['Shift'] && event.code == 'Space') {

    if (JSON.stringify(keys) === JSON.stringify(keysEn)) {
      keys = keysRu;
      buildKeyboard();
    }

    else {
      keys = keysEn;
      buildKeyboard();
    }
  }
});

document.addEventListener('keyup', (event) => {
  delete keyPressed[event.key];
});


function rebuildKeyboard() {
  const lis = keyboard.children;
  for (const [key, value] of Object.entries(upperRegister)) {
    let li = document.createElement('li');
    li.innerHTML = shiftPressed ? keysEn[value] : key;
    lis[value].replaceWith(li);
    if (li.innerHTML.length == 1 && /^[a-z0-9!"#$%&'()*+,-./:;<=>?@\[\]\\^_`{|}~§]$/.test(li.innerHTML)) {
      li.classList.add(li.innerHTML);
    }
  }
  shiftPressed = !shiftPressed;
}

function buildKeyboard() {

  keyboard.innerHTML = '';


  keys.forEach(function (key, i) {
    let li = document.createElement('li');
    li.innerHTML = key;
    keyboard.append(li);


    if (li.innerHTML == 'backspace') {
      li.classList.add('backspace');
    };
    if (li.innerHTML == 'tab') {
      li.classList.add('tab')
    };

    if (li.innerHTML == 'enter') {
      li.classList.add('enter');
    };
    if (li.innerHTML == 'fn') {
      li.classList.add('function')
    };
    if (li.innerHTML == 'opt') {
      li.classList.add('alt');
    };
    if (li.innerHTML == 'cmd') {
      li.classList.add('meta')
    };
    if (li.innerHTML == 'cntrl') {
      li.classList.add('control')
    };

    if (li.innerHTML.length == 1 && /^[a-z0-9!"#$%&'()*+,-./:;<=>?@\[\]\\^_`{|}~§]$/.test(li.innerHTML)) {
      li.classList.add(key);
    }
    if (li.innerHTML.length == 1 && /^[a-z]$/.test(li.innerHTML)) {

      /*li.classList.add('letter');*/

      if (shiftPressed) {
        li.classList.toggle('uppercase');
      };
    };

    if (li.innerHTML == 'shift') {
      li.classList.add('shift');
      const shift = li;
    };

    /*if (i == 41) {
      li.classList.add('left-shift');
    };*/

    if (li.innerHTML == 'caps lock') {
      li.classList.add('capslock');
    };

    if (li.innerHTML == '') {
      li.classList.add('space');
    };

    if (li.innerHTML === 'ᐊ') {
      li.classList.add('arrowleft');
    }

    if (li.innerHTML === 'ᐃ') {
      li.classList.add('arrowup');
    }

    if (li.innerHTML === 'ᐁ') {
      li.classList.add('arrowdown');

    }

    if (li.innerHTML == 'ᐅ') {
      li.classList.add('arrowright')
    }



    document.addEventListener('keydown', function (event) {
     
      if (event.key.toLowerCase() == li.className || event.code.toLowerCase() == li.className) {
        li.classList.add('pressed');
        setTimeout(function () {
          li.classList.remove('pressed');
        }, 200);
      }

      /*if (keyPressed.key === 'Shift') {
        letters.forEach(function (letter) {
          if (!letter.classList.contains('uppercase')) {
            letter.classList.add('uppercase');
          }
          else {
            letter.classList.remove('uppercase');
          }
        })
      }*/
    });


    li.addEventListener('click', function () {
      write.focus();
      if (!li.classList.contains('pressed')) {
        li.classList.add('pressed');
        setTimeout(function () {
          li.classList.remove('pressed');
        }, 200);
      };

      if (li.innerHTML == 'shift') {
        letters.forEach(function (letter) {
          letter.classList.toggle('uppercase');
        });
        rebuildKeyboard()
      };

      if (li.innerHTML == 'caps lock') {
        letters.forEach(function (letter) {
          letter.classList.toggle('uppercase');
        });
        rebuildKeyboard()
      };

      if (/^[a-z0-9а-я!"#$%&'()*+,-./:;<=>?@\[\]\\^_`{|}~§]$/.test(li.innerHTML)) {
        character = li.innerHTML;
        if (li.classList.contains('uppercase')) {
          character = character.toUpperCase();
          letters.forEach(function (letter) {
            letter.classList.remove('uppercase');
          });
        };
        write.innerHTML = write.innerHTML.concat(character);
      };

      if (li.innerHTML == '') {
        character = ' ';
        write.innerHTML = write.innerHTML.concat(character);
      };

      if (li.innerHTML == 'enter') {
        character = '\n';
        write.innerHTML = write.innerHTML.concat(character);
      };

      if (li.innerHTML == 'tab') {
        character = '\t';
        write.innerHTML = write.innerHTML.concat(character);
      };

      if (li.innerHTML == 'backspace' && write.innerHTML.length > 0) {
        write.innerHTML = write.innerHTML.substring(0, write.innerHTML.length - 1);
      };

      if (key == '&#5130') {
        const end = write.selectionEnd;
        write.setSelectionRange(end - 1, end - 1);
        write.focus();
        return;
      };

      if (key == '&#5125') {

      };

      write.selectionStart = write.value.length;
      write.setAttribute('value', `${write.innerHTML}`);
    });
  });

  const letters = Array.from(document.getElementsByTagName('li')).filter(letter => /^[a-zа-я]$/.test(letter.className));

};

buildKeyboard();

