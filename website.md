@[TOC](目录)

# I.Introduction
This blog mainly introduces how I design a **simple version of the web version of the calculator**, can achieve basic operations, **including addition, subtraction, multiplication, division, power and trigonometric functions**, in the next will introduce some relevant background and design process and code description, and finally a product display.

**Link to the finished project code：** <https://github.com/ThestarRYz/SE-EE308>

# II.Personal Information
The link of my Class |<https://bbs.csdn.net/forums/ssynkqtd-04>
-----------------|----------------
The link of requirement of this Assignment|<https://bbs.csdn.net/forums/ssynkqtd-04>
The Aim of this Assignment|Website Calculator
MU STU ID and FZU STU ID|21126712_832102213

# III. **PSP Table**
| **Personal Software Process Stages**    | Estimated Time（minutes） | Actual Time（minutes） |
| :-------------------------------------- | :------------------------ | :--------------------- |
| Planning                                |                           |                        |
| • Estimate                              |        30                   |            30            |
| Development                             |                           |                        |
| • Analysis                              |       30                    |           40             |
| • Design Spec                           |           10                |         15               |
| • Design Review                         |       5                    |          5              |
| • Coding Standard                       |          10                 |           10             |
| • Design                                |         20                  |         20               |
| • Coding                                |         120                  |           120             |
| • Code Review                           |          30                 |             30           |
| • Test                                  |        20                   |            15            |
| Reporting                               |         60                  |             90           |
| • Test Repor                            |         10                  |            10            |
| • Size Measurement                      |            10               |           10            |
| • Postmortem & Process Improvement Plan |              20             |           20             |
| **Sum**                                 |       375                    |              415          |

# IV.Thoughts before doing the project
In this project, our goal is to make a simple web version of the calculator, which can not only perform basic operations such as addition, subtraction, multiplication and division, but also realize the operation of trigonometric functions and power functions.

- **HTML, Css and Java Script** can be used to complete the Web visualization of simple calculators.

# V.Design and implementation process
- **Design process:** Users need to enter numbers in the calculator, need to use addition, subtraction, multiplication and division, and some more advanced operations such as trigonometric functions and power operations. We first need to create an interface that provides buttons for user input. The user presses these buttons to get the desired answer. So we will use HTML to design a visual interface, and then through the CSS beautiful design interface, and finally through JavaScript to achieve the function method.
- **Implementation process:** 

    1.Initialize the calculator : Create an input box ( text box ) to display the input and results. 
 
    2.When the user clicks the number button ( e.g., 1, 2, 3, 4, 5, 6, 7, 8, 9, 0,... ) : - Display the corresponding number in the input box 
 
    3.When the user clicks the operator button ( for example, +, -, *, /, ^, sin, cos, tan, (, ) ) : - Displays the corresponding symbol in the input box 
 
    4.When the user clicks the " ← " button : delete a character from the end of the input box. 
 
    5.When the user clicks the ' c ' button : clear the input numbers and characters and reset the calculator status. 
 
    6.When the user clicks the ' = ' button : calculate the calculation results in the text box and display the calculation results in the input box.

- **Flow chart**
    ```mermaid
graph TD;
    start ==> input;
    input ==> isNumeric;
    isNumeric ==> |Yes| displayNumber;
    isNumeric ==> |No| isOperator;
    displayNumber ==> updateDisplay;
    isOperator ==> |Yes| displayOperator;
    isOperator ==> |No| isFunction;
    displayOperator ==> updateDisplay;
    isFunction ==> |Yes| executeFunction;
    isFunction ==> |No| isEquals;
    executeFunction ==> displayResult;
    isEquals ==> |Yes| performCalculation;
    isEquals ==> |No| isBack;
    performCalculation ==> displayResult;
    isBack ==> |Yes| backspace;
    isBack ==> |No| isReset;
    backspace ==> updateDisplay;
    isReset ==> |Yes| reset;
    isReset ==> |No| end;
    reset ==> displayEmptyInput;
    end;

# VI.Code description
- **HTML**
```HTML
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Calculator</title>
		<link rel="stylesheet" type="text/css" href="C:\Users\张嘉扬\Desktop\计算器\counter.css" />
		<script type="text/javascript" src="C:\Users\张嘉扬\Desktop\计算器\counter.js"></script>
	</head>
	<body>
		<div id="calculator">
			<div id="head"><h3>Simple Web Calculator</h3></div>
			<div id="show" align="center"><input type="text" id="text" ></div>
			<div id="cuttom">
				<table align="center">
					<tr>
						<td><input type="button" value="7" onclick="display(7)"></td>
						<td><input type="button" value="8" onclick="display(8)"></td>
						<td><input type="button" value="9" onclick="display(9)"></td>
						<td><input type="button" value="+" onclick="display('+')"></td>
						<td><input type="button" value="-" onclick="display('-')"></td>
						<td><input type="button" value="^" onclick="power()"></td>
					</tr>
					<tr>
						<td><input type="button" value="4" onclick="display(4)"></td>
						<td><input type="button" value="5" onclick="display(5)"></td>
						<td><input type="button" value="6" onclick="display(6)"></td>
						<td><input type="button" value="*" onclick="display('*')"></td>
						<td><input type="button" value="/" onclick="display('/')"></td>
						<td><input type="button" value="sin" onclick="sin()"></td>
					</tr>
					<tr>
						<td><input type="button" value="1" onclick="display(1)"></td>
						<td><input type="button" value="2" onclick="display(2)"></td>
						<td><input type="button" value="3" onclick="display(3)"></td>
						<td><input type="button" value="(" onclick="display('(')"></td>
						<td><input type="button" value=")" onclick="display(')')"></td>
						<td><input type="button" value="cos" onclick="cos()"></td>
					</tr>
					<tr>
						<td><input type="button" value="." onclick="display('.')"></td>
						<td><input type="button" value="0" onclick="display(0)"></td>
						<td><input type="button" value="←" onclick="back()"></td>
						<td><input type="button" value="c" onclick="reset()"></td>
						<td><input type="button" value="=" onclick="equals()"></td>
						<td><input type="button" value="tan" onclick="tan()"></td>
					</tr>
				</table>
			</div>
		</div>
	</body>
</html>
```

- `<!DOCTYPE html>`: This declaration specifies the document type and version of HTML being used (HTML5 in this case).

- `<html>`: This is the root element of the HTML document.

- `<head>`: Contains meta-information about the document, such as character encoding and the title of the page.

  - `<meta charset="UTF-8">`: Specifies that the character encoding used is UTF-8.

  - `<title>Calculator</title>`: Sets the title of the page.

  - `<link>`: Links an external stylesheet (`counter.css`) for applying styles to the page.

  - `<script>`: Links an external JavaScript file (`counter.js`) for adding functionality to the calculator.

- `<body>`: Contains the main content of the page.

  - `<div id="calculator">`: Serves as the main container for the calculator.

    - `<div id="head">`: Contains a heading.

      - `<h3>Simple Web Calculator</h3>`: Displays the title of the calculator.

    - `<div id="show" align="center">`: Contains an input field for displaying user input and results.

      - `<input type="text" id="text">`: Creates a text input field.

    - `<div id="cuttom">`: Contains a custom layout for the buttons.

      - `<table align="center">`: Creates a table for placing buttons.

        - `<tr>`: Represents a row in the table, containing a set of buttons.

        - `<td>`: Represents a cell in the table, containing a button.

          - `<input>`: Creates a button.

            - `type="button"`: Specifies the type of the button.

            - `value`: Defines the text displayed on the button.

            - `onclick`: Specifies the JavaScript function to be executed when the button is clicked.

The buttons in the table allow the user to input numbers, operators, and perform operations like addition, subtraction, multiplication, division, exponentiation, sine, cosine, and tangent. The `onclick` attribute is used to call corresponding JavaScript functions (`display`, `power`, `sin`, `cos`, `tan`, `back`, `reset`, `equals`) for each button.

CSS styles are defined in an external file (`counter.css`) and JavaScript functions are provided in another external file (`counter.js`).


- **CSS**
```CSS
body{background:#b1e5ee;}
h3{font-family:微软雅黑;font-size: 35px;text-align: center;}
#show input{width:610px;height:60px;font-size:30px;}
#cuttom input{width: 100px;height: 70px;font-size: 28px;}
#cuttom input:hover{background: lightgray;}
```

- `body{background:#b1e5ee;}`: This sets the background color of the entire page to a light blue (#b1e5ee).

- `h3{font-family:微软雅黑;font-size: 35px;text-align: center;}`: This applies the following styles to all `h3` elements:
   - `font-family`: Sets the font to "微软雅黑" (Microsoft YaHei).
   - `font-size`: Sets the font size to 35 pixels.
   - `text-align`: Centers the text.

- `#show input{width:610px;height:60px;font-size:30px;}`: This targets the `input` element within the element with the `id="show"`. It applies the following styles:
   - `width`: Sets the width of the input field to 610 pixels.
   - `height`: Sets the height of the input field to 60 pixels.
   - `font-size`: Sets the font size of the text in the input field to 30 pixels.

- `#cuttom input{width: 100px;height: 70px;font-size: 28px;}`: This targets all `input` elements within the element with the `id="cuttom"`. It applies the following styles:
   - `width`: Sets the width of the input buttons to 100 pixels.
   - `height`: Sets the height of the input buttons to 70 pixels.
   - `font-size`: Sets the font size of the text on the buttons to 28 pixels.

- `#cuttom input:hover{background: lightgray;}`: This targets all `input` elements within the element with the `id="cuttom"` when they are in a hover state. It applies a light gray background when the buttons are hovered over.

These CSS styles define the visual presentation and layout of the web calculator, enhancing its user interface and overall appearance.

- **JavaScript**
```javascript
function $(id){
    return document.getElementById(id);
}
```
- This function is a simple utility function that takes an id and returns the corresponding HTML element with that id.

```javascript
function display(str0)	
{
	str = document.getElementById("text");
	str.value = str.value + str0;
}
```
- This function is called when a button is clicked and adds the corresponding value to the input field. For example, when a number button is clicked, it appends that number to the existing input.

```javascript
function equals()	
{
	str = document.getElementById("text");
	result = eval(str.value);
	str.value = result;
}
```
- This function is called when the equals button ('=') is clicked. It evaluates the current input using eval() and displays the result in the input field.

```javascript
function back()		
{
	str = document.getElementById("text");
	str.value = str.value.substring(0,str.value.length-1);
}
```
- This function is called when the backspace button ('←') is clicked. It removes the last character from the input field.

```javascript
function reset()	
{
	str = document.getElementById("text");
	str.value ="";
}
```
- This function is called when the reset button ('c') is clicked. It clears the entire input field.

```javascript
function power() {
    str = document.getElementById("text");
    str.value = str.value + "**";
}
```
- This function is called when the power button ('^') is clicked. It appends the '**' symbol to the input field, allowing for exponentiation.

```javascript
function sin() {
    str = document.getElementById("text");
    var angle = eval(str.value);
    result = Math.sin(angle * (Math.PI / 180));
    str.value = result;
}

function cos() {
    str = document.getElementById("text");
    var angle = eval(str.value);
    result = Math.cos(angle * (Math.PI / 180));
    str.value = result;
}

function tan() {
    str = document.getElementById("text");
    var angle = eval(str.value);
    result = Math.tan(angle * (Math.PI / 180));
    str.value = result;
}
```
- These functions perform trigonometric operations. They first retrieve the input value, convert it to radians, and then use the respective Math functions to calculate the sine, cosine, or tangent. The result is then displayed in the input field.
  
<iframe height=400 width=500 src="C:\Users\张嘉扬\Desktop\计算器\Gif.gif">







