window.log = function(data) {
    if (this.console) {
        for (var i = 0; i < arguments.length; i++) {
            console.log(arguments[i]);
        }
    }
};

'use strict';

function divide(a, b) {
    return a / b;
}

// Write a function that takes a single argument (a string) and returns the string reversed.
function reverseString(str) {
    // FILL THIS IN
    var i, reversedString = '';

    if (typeof str !== 'string') {
        return false;
    }

    for (i = str.length - 1; i >= 0; i--) {
        reversedString += str[i];
    }

    return reversedString;
}

// Write a function that takes an array of numbers and returns the minimum value
function findMinValue(values) {
    // FILL THIS IN
    var sortedValues = values.sort(function(a, b) {
        return a - b;
    });
    return sortedValues[0];
}
// Write a function that takes an array and returns the distinct values only (i.e. removes duplicates)
function findDistinctValues(values) {
    // FILL THIS IN
    var i, uniqueValues = [];

    for (i = 0; i < values.length; i++) {
        if (uniqueValues.indexOf(values[i]) < 0) {
            uniqueValues.push(values[i]);
        }
    }

    return uniqueValues;
}
function doFizzBuzz(from, to) {
    // FILL THIS IN
    var i, str, returnString = ' | ';

    for (i = from; i < to; i++) {
        str = '';

        if (i % 3 === 0) {
            str += 'Fizz';
        }

        if (i % 5 === 0) {
            str += 'Buzz';
        }

        if (str === '') {
            returnString += i;
        } else {
            returnString += str;
        }
        returnString += ' | ';

    }

    return returnString;
}
function removeFruits(fruits, fruitsToRemove) {
    // FILL THIS IN
    var i;

    if (Object.prototype.toString.call(fruitsToRemove) !== '[object Array]') {
        return false;
    }

    for (i = 0; i < fruitsToRemove.length; i++) {
        if (fruits.indexOf(fruitsToRemove[i]) > -1) {
            fruits.splice(fruits.indexOf(fruitsToRemove[i]), 1);
        }
    }

    return fruits;
}

function pushOntoArray(array, toPush) {
    // FILL THIS IN

    Object.prototype.toString.call(toPush) !== '[object Array]' ? array.push(toPush) : array.push.apply(array, toPush);
    return array;

}

function splitListStrUsingComma(sourceStr) {
    // FILL THIS IN

    return sourceStr.split(',');

}

function sum() {
    // FILL THIS IN
    var i, aggregate = 0;

    for (i = 0; i < arguments.length; i++) {
        aggregate += arguments[i];
    }

    return aggregate;
}



// Write a function that will return true if a specified string consists of only whitespace.
function isOnlyWhitespace(sourceStr) {
    // FILL THIS IN
    if (sourceStr.trim().length === 0 && sourceStr.length !==0 ) {
        return true;
    } else {
        return false;
    }
}

// write an example of a javascript closure
// Closure example - constructor style
var Counter = function() {
    var count = 0,
        // closure1
        _increase = function() {
            count += 1;
        },
        // closure2
        _decrease = function() {
            count -= 1;
        },
        _getCount = function() {
            return count;
        };

    return {
        increase: _increase,
        decrease: _decrease,
        status: _getCount
    };
};



var peopleJSON = function() {

    var people = {
        'person1': {
            'firstName': 'Aaron',
            'lastName': 'Rodgers',
            'city': 'Raleigh',
            'state': 'North Carolina',
            'zip': 83711,
            'phoneNumbers': {
                'home': 1112223333,
                'work': 1112223333,
                'mobile': 1112223333
            }
        },
        'person2': {
            'firstName': 'Medina',
            'lastName': 'Lyban',
            'city': 'Jersey City',
            'state': 'NJ',
            'zip': 11201,
            'phoneNumbers': {
                'home': 1112223333,
                'work': 1112223333,
                'mobile': 1112223333
            }
        }
    };

    return people;
};

function DataTable(nRows, nColumns) {

    var defaultSize = 3,
        rows = [],
        columns = [],
        _nRows = nRows || defaultSize,
        _nColumns = nColumns || defaultSize;

    this.getColumnsLength = function() {
        return _nColumns;
    };
    this.setColumnsLength = function(nColumns) {
        _nColumns = nColumns;
    };

    this.getRows = function() {
        return rows;
    };
    this.setRow = function(item) {
        rows.push(rowHash(item));
    };

    this.getColumn = function() {
        return columns;
    };
    this.setColumn = function(item) {
        columns = columns.concat(item);
    };
    rowHash = function(item) {
        var row = {},
            args = [].concat(item);

        for (var i = 0; i < columns.length; i++) {
            row[columns[i]] = args[i];
        }
        return row;
    };
}

DataTable.prototype.getData = function () {
    return JSON.stringify(this.getRows(), null, '\t');
};

DataTable.prototype.addColumns = function() {

    var argsLen = arguments.length;

    if (argsLen < this.getColumnsLength()) {
        return false;
    } else if (argsLen > this.getColumnsLength()) {
        this.setColumnsLength(argsLen);
    }

    this.setColumn(Array.apply(null, arguments));
};

DataTable.prototype.addRow = function() {

    var argsLen = arguments.length;

    if (argsLen < this.getColumnsLength()) {
        log('cannot add row as items less than column count');
        return false;
    }

    this.setRow(Array.apply(null, arguments));
};

var sampleTable = new DataTable(3, 2); // 3x2
sampleTable.addColumns('column1', 'column2', 'column3');
sampleTable.addColumns('column1', 'column2', 'column3', 'column4');
sampleTable.addRow('value1A', 'value1B', 'value1C', 'value1D');
sampleTable.addRow('value2A', 'value2B', 'value2C', 'value2D');
sampleTable.getData();

var selectElements = (function() {

    var i, optionElement, _createItems, _render,
        _bindEvents, _changeSelected, _changeMethod, fireEvent,
        div1 = document.getElementById('div1'),
        select = document.createElement('SELECT'),
        items = ['Item1', 'Item2', 'Item3', 'Item4', 'Item5'];

    _createItems = function() {
        for (i = 0; i < items.length; i++) {
            optionElement = document.createElement('OPTION');
            optionElement.setAttribute('value', items[i]); 
            optionElement.innerHTML = items[i]; 
            optionElement.id = 'id-' + items[i];
            if (i === 0) {
                optionElement.setAttribute('selected', '');
            }
            select.appendChild(optionElement);
        }
        select.setAttribute('id', 'selectItem');
    };

    _render = function() {
        div1.appendChild(select);
    };

    _bindEvents = function() {
        document.getElementById('selectItem').addEventListener('click', _changeSelected, true);
    };

    _changeSelected = function(event) {
        log(event.target.value);
    };

    _changeMethod = function(item) {
        document.getElementById('selectItem').value = item;
        // changing the value will trigger click event to log the value changed.
        fireEvent(document.getElementById('selectItem'), 'click');
    };

    fireEvent = function(element, event) {
        var eventType;
        if (document.createEventObject) {
            eventType = document.createEventObject();
            return element.fireEvent('on' + event, eventType);
        } else {
            eventType = document.createEvent("HTMLEvents");
            eventType.initEvent(event, true, true);
            return element.dispatchEvent(eventType);
        }
    };

    _createItems();
    _render();
    _bindEvents();

    return _changeMethod;

}());

var retrieveAnchorText = (function() {

    var selector1 = $('#foo a.link')[0].text,
        selector2 = $('div#fizz.buzz')[0].children[0].text,
        selector3 = $('#fizz > a.link')[0].text,
        selector4 = $('a.link')[0].text,
        selector5 = $('.link')[0].text;

    return [selector1, selector2, selector3, selector4, selector5];

}());

var listItems = function() {

    var items = ['Item1', 'Item2', 'Item3', 'Item4', 'Item5'],
        list1 = document.getElementById("list1"),
        i,
        listItems = '',
        liElement;

    for (i = 0; i < items.length; i++) {
        liElement = document.createElement('LI');
        liElement.innerHTML = items[i];
        list1.appendChild(liElement);
    }

};
listItems();


var checkBoxToggle = (function(checkBoxCount) {

    var i,
        fooBarDiv = document.getElementById("foobar"),
        links, _createLinks, _createCheckBoxes, _bindEvents, _checkAll, _uncheckAll,
        _nCheckBoxes = checkBoxCount || 10;

    _createCheckBoxes = function() {
        for (i = 0; i < _nCheckBoxes; i++) {
            var label, checkBox, checkboxList = document.createElement('DIV');

            checkBox = document.createElement('INPUT');
            checkBox.type = 'checkbox';
            checkBox.name = 'link';
            checkBox.value = 'checkBox-' + i;
            checkBox.id = 'checkBox' + i;

            label = document.createElement('LABEL');
            label.for = 'checkBox' + i;
            label.innerHTML = 'CheckBox-' + i;

            checkboxList.appendChild(checkBox);
            checkboxList.appendChild(label);
            checkboxList.setAttribute('class', 'checkBox-div');

            fooBarDiv.appendChild(checkboxList);

        }
    };

    _createLinks = function() {
        links = document.createElement('DIV');
        links.setAttribute('class', 'check-uncheck');
        for (i = 1; i <= 2; i++) {
            var linkElement = document.createElement('A'),
                spanElement = document.createElement('SPAN');

            linkElement.id = 'link' + i;
            linkElement.href = '#';
            if (i === 1) {
                spanElement.setAttribute('class', 'check');
                spanElement.style.margin = '20px 20px 20px 0';
                linkElement.text = 'Check';
            } else {
                spanElement.setAttribute('class', 'uncheck');
                linkElement.text = 'Un Check';
            }

            spanElement.appendChild(linkElement);
            links.appendChild(spanElement);
        }

        fooBarDiv.appendChild(links);
    };

    _bindEvents = function() {
        document.getElementById("link1").addEventListener('click', _checkAll, false);
        document.getElementById("link2").addEventListener('click', _uncheckAll, false);
    };

    _checkAll = function() {
        var allCheckBoxes = document.getElementsByName('link');
        for (var i = 0; i < allCheckBoxes.length; i++) {
            allCheckBoxes[i].checked = true;
        }
    };

    _uncheckAll = function() {
        // return document.getElementsByName('link')[0].checked = true;
        var allCheckBoxes = document.getElementsByName('link');
        for (var i = 0; i < allCheckBoxes.length; i++) {
            allCheckBoxes[i].checked = false;
        }
    };

    _createCheckBoxes();
    _createLinks();
    _bindEvents();

    return {
        check: _checkAll,
        uncheck: _uncheckAll
    };

}(8)); 
