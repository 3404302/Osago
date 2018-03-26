function Calc() {

/**
 * Соотносим коэффициенты в соответствии с выбором
 */
    var type = +document.getElementById('type').value; // Физик или юрик
    var tb = +document.getElementById('tb').value; // Базовая ставка 3432-4118 . зависит от территории, категории авто и страховой компании
    var kt = +document.getElementById('kt').value; // коэф территории
    var kbm = +document.getElementById('kbm').value; // коэф бонус-малус
    var kvs = +document.getElementById('kvs').value; // коэф возраст-стаж
    var ko = +document.getElementById('ko').value; // без ограничений - если выбран - коэф 1.8 (пока один)
    var km = +document.getElementById('km').value; // коэф мощность
    var ks = 1; // срок страхования
    var kp = +document.getElementById('kp').value; // период использования
    var kpr = +document.getElementById('kpr').value; // прицеп (только юрики)
    var kn = 1; // коэф грубых нарушений
    
    if (+document.getElementById('ko').checked || type > 1) {
            kvs = 1;
        } else {
            ko = 1;
        }

/**
 * Формула расчета страховой премии ФИЗИКИ
 */
    var a = 'Формула расчета премии'
    if (type == 1) {
        a = 3432 * kt * kbm * kvs * ko * ks * kp * km * kn; //Физик, ko нет, берем kvs по if выше
    } else {
        a = 2573 * kt * kbm * kvs * ko * ks * kp * km * kpr * kn; //Юрик, kvs нет, берем ko = 1.8
    }
    
    var aa = 'Результат'
    if (type == 1) {
        aa = "3432" + " * " + kt + " * " + kbm + " * " + kvs + " * " + ko + " * " + ks + " * " + kp + " * " + km + " * " + "1" + " * " + kn; //Физик
    } else {
        aa = "2573" + " * " + kt + " * " + kbm + " * " + kvs + " * " + ko + " * " + ks + " * " + kp + " * " + km + " * " + kpr + " * " + kn; //Юрик
    }
    
        //var a = 3432 * tb * kt * kbm * kvs * ko * km * kp;    // alert([a.toFixed(2),a.toFixed(2)] ) Огругляем до двух знаков после запятой
    var b = 3700 * tb * kt * kbm * kvs * ko * km * kp;
    var c = 4118 * tb * kt * kbm * kvs * ko * km * kp;
    
/**
 * Проверка расчета
 */
    
    var nasko = "Кв наско";
    if (km <= 1.1 || kp < 1 || tb != 2) {
        nasko = "запрет";
    } else { 
        nasko = "23%, Кроме: Ваз/Lada/Газ/Уаз, </br>Renault Logan, Daewoo Nexia </br>СТАРШЕ 3-х лет от г.в. по ПТС";
    }
    
    
/**
 * Формула расчета страховой премии ЮРИКИ
 */
    
    //var y = 2573 * tb * kt * kbm * ko * km * kp * kpr;
    
/**
 * Результаты
 */
 
    document.getElementById('result').innerHTML = + a.toFixed(2);
    document.getElementById('result-1').innerHTML = aa;
    document.getElementById('result-1-1').innerHTML = nasko;

    document.getElementById('result2').innerHTML = "3700" + " * " + kt + " * " + kbm + " * " + kvs + " * " + km + " * " + kp;
    document.getElementById('result-2').innerHTML = + b.toFixed(2);
    
    document.getElementById('result3').innerHTML = "4118" + " * " + kt + " * " + kbm + " * " + kvs + " * " + km + " * " + kp;
    document.getElementById('result-3').innerHTML = + c.toFixed(2);
    
    //document.getElementById('result1').innerHTML = a + " + " + b + " = " + b;
            
		}