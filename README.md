# roll-a-dice
Roll a Dice, By the way you can cheat as well 

### How to use

1. Install using command
```
npm install roll-a-dice
```

```
var rad = require('roll-a-dice');
var dice = new rad();

dice.roll(); //Random output
dice.cheat(5).roll(); //5
dice.roll(); // Still 5
dice.fair().roll(); //Random numer 


```

Enjoy


license
Copyright (c) 2015, Azhar khan

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.