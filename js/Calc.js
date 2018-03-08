function Calc() {
			var a = +document.getElementById('Kt').value;
			var b = +document.getElementById('Kbc').value;

			var c = 4118 * a * b;
            var d = 3432 * a * b;
 
			document.getElementById('result').innerHTML = a + " * " + b + " = " + c;
            document.getElementById('result1').innerHTML = a + " + " + b + " = " + d;
            
		}