# What

This is a fork of the original project found here https://github.com/omarestrella/keystroke.js <br>

# Why?

Translates Javascript event key codes into labels.

# Browser support

 - Firefox 4+
 - Chrome 5+
 - Internet Explorer 9+
 - Opera 12+
 - Safari 5+
 
# Installation

```bash
npm install keystroke.js
```

# Usage

```jsx harmony
import * as Keystroke from 'keystroke.js';

const keyName = Keystroke.codeToString(27);

if(keyName === 'ESCAPE') doSomething();
```

# Other Methods
#### Check if the key code corresponds to an alphabet letter

```jsx harmony
if(Keystroke.isAlphabet(27)) doSomething();

```

#### Check if the key code corresponds to the enter key

```jsx harmony
if(Keystroke.isEnter(27)) doSomething();

```

#### Check if the key code corresponds to the escape key

```jsx harmony
if(Keystroke.isEscape(27)) doSomething();

```

#### Check if the key code corresponds to an arrow key

```jsx harmony
if(Keystroke.isNavigation(27)) doSomething();

```

#### Check if the key code corresponds to a number key

```jsx harmony
if(Keystroke.isNumber(27)) doSomething();

```

#### Check if the key code corresponds to a whitespace key

```jsx harmony
if(Keystroke.isWhitespace(27)) doSomething();

```


# Author

https://github.com/omarestrella

# License

The MIT License (MIT)

Copyright (c) 2015 Omar Estrella

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
