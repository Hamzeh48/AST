window.onload = function() {
    const display = document.getElementById('display');

    window.appendValue = function(value) {
        display.value += value;
    }

    window.clearDisplay = function() {
        display.value = '';
    }

    window.calculateResult = function() {
        try {
            display.value = eval(display.value);
        } catch (error) {
            display.value = 'خطأ';
        }
    }
};
