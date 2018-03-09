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
    
    var a = 3432 * tb * kt * kbm * kvs * ko * km * kp;    // alert([a.toFixed(2),a.toFixed(2)] ) Огругляем до двух знаков после запятой;
    var b = 3700 * tb * kt * kbm * kvs * ko * km * kp;
    var c = 4118 * tb * kt * kbm * kvs * ko * km * kp;
    
/**
 * Формула расчета страховой премии ЮРИКИ
 */
    
    var y = 2573 * tb * kt * kbm * ko * km * kp * kpr;
    
/**
 * Результаты
 */
 
    document.getElementById('result').innerHTML = "3432" + " * " + kt + " * " + kbm + " * " + kvs + " * " + km + " * " + kp;
    document.getElementById('result-1').innerHTML = + a.toFixed(2);

    document.getElementById('result2').innerHTML = "3700" + " * " + kt + " * " + kbm + " * " + kvs + " * " + km + " * " + kp;
    document.getElementById('result-2').innerHTML = + b.toFixed(2);
    
    document.getElementById('result3').innerHTML = "4118" + " * " + kt + " * " + kbm + " * " + kvs + " * " + km + " * " + kp;
    document.getElementById('result-3').innerHTML = + c.toFixed(2);
    
    //document.getElementById('result1').innerHTML = a + " + " + b + " = " + b;
            
		}