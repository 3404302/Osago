function Calc() {

/**
 * Соотносим коэффициенты в соответствии с выбором
 */
    var tb = +document.getElementById('tb').value; /* Базовая ставка 3432-4118 . зависит от территории, категории авто и страховой компании */
    var kt = +document.getElementById('kt').value; /* коэф территории */
    var kbm = +document.getElementById('kbm').value; /* коэф бонус-малус */
    var kvs = +document.getElementById('kvs').value; /* коэф возраст-стаж */
    var ko = +document.getElementById('ko').value; /* без ограничений - если выбран - коэф 1.8 (пока один) */
    var km = +document.getElementById('km').value; /* коэф мощность */
    var kp = +document.getElementById('kp').value; /* сезонность */
    var kpr = +document.getElementById('kpr').value; /* прицеп (только юрики) */

/**
 * Формула расчета страховой премии ФИЗИКИ
 */

			var a = 4118 * tb * kt * kbm * kvs * ko * km * kp;
            var b = 3432 * tb * kt * kbm * kvs * ko * km * kp;
    
/**
 * Формула расчета страховой премии ЮРИКИ
 */
 
			document.getElementById('result').innerHTML = a + " * " + b + " = " + a;
            document.getElementById('result1').innerHTML = a + " + " + b + " = " + b;
            
		}