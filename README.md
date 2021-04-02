# hw-5-work-day-scheduler

## Description
This project is a simple calendar application. The user is able to enter tasks into a text area and save
the contents to local storage when the corresponding icon is clicked. The application will render any 
previously saved text on page load. Textareas are dynamically styled according to time: the current hour 
is highlighted in red, future hours in green, and past hours in gray.

This application applied features from several web APIs for event handling, DOM manipulation, and styling.
Moment.js provides methods for the clock and the current hour as a comparator for text area styling. 
jQuery powers DOM manipulation and event handling. Bootstrap provides a foundation for styling, and the
floppy-disk icon is courtesy of Font Awesome. 

## Usage

Click on the screenshot to launch the application!

[![screenshot](webapp-screenshot.jpg)](https://comatosino.github.io/hw-5-work-day-scheduler/)
    
## Acknowledgements

Big thank you to these resources:

- https://api.jquery.com/
- https://momentjs.com/docs/
- https://getbootstrap.com/docs/5.0/getting-started/introduction/
- https://fontawesome.com/

## License

MIT License

Copyright (c) 2021 Robert Adams

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.