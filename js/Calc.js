function Calc() {

/**
 * Соотносим коэффициенты в соответствии с выбором
 */
    var type = +document.getElementById('type').value; // Физик или юрик
    var tb = +document.getElementById('tb').value; // Базовая ставка 3432-4118 . зависит от территории, категории авто и страховой компании
    var kt = +document.getElementById('kt').value; // коэф территории
    var kbm = +document.getElementById('kbm').value; // коэф бонус-малус
    var birth = +document.getElementById('birth').value; // возраст
    var drive = +document.getElementById('drive').value; // стаж
    var kvs = 1; //+document.getElementById('kvs').value; // коэф возраст-стаж
    var ko = +document.getElementById('ko').value; // без ограничений - если выбран - коэф 1.8 (пока один)
    var km = +document.getElementById('km').value; // коэф мощность
    var ks = 1; // срок страхования
    var kp = +document.getElementById('kp').value; // период использования
    var kpr = +document.getElementById('kpr').value; // прицеп (только юрики)
    var kn = 1; // коэф грубых нарушений
    
    if (birth == 22 && drive == 3) { //Находим kvs
        kvs = 1.8;
    } else if (birth > 22 && drive == 3) {
        kvs = 1.7;
    } else if (birth == 22 && drive == 4) {
        kvs = 1.6;
    } else {
        kvs = 1;    
    }
    
    if (+document.getElementById('ko').checked || type > 1) { // Если ЮЛ или без ограничений
        kvs = 1;
    } else {
        ko = 1;
    }

/**
 * Формула расчета страховой премии НАСКО
 */
    var a = 'Формула Наско'
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
    
/**
 * КВ НАСКО
 */
    
    var nasko = "Кв Наско";
    if (km <= 1.1 || kp < 1 || tb != 1) {
        nasko = "запрет";
    } else { 
        nasko = "23%, Кроме: Ваз/Lada/Газ/Уаз, </br>Renault Logan, Daewoo Nexia </br>СТАРШЕ 3-х лет от г.в. по ПТС";
    }

    /**
 * Формула расчета страховой премии МАКС
 */
    var a2 = 'Формула Макс'
    if (type == 1) {
        a2 = 3700 * kt * kbm * kvs * ko * ks * kp * km * kn; //Физик, ko нет, берем kvs по if выше
    } else {
        a2 = 2573 * kt * kbm * kvs * ko * ks * kp * km * kpr * kn; //Юрик, kvs нет, берем ko = 1.8
    }
    
    var aa2 = 'Результат'
    if (type == 1) {
        aa2 = "3700" + " * " + kt + " * " + kbm + " * " + kvs + " * " + ko + " * " + ks + " * " + kp + " * " + km + " * " + "1" + " * " + kn; //Физик
    } else {
        aa2 = "2573" + " * " + kt + " * " + kbm + " * " + kvs + " * " + ko + " * " + ks + " * " + kp + " * " + km + " * " + kpr + " * " + kn; //Юрик
    }
    
/**
 * КВ МАКС
 */
    
    var maks = "Кв Макс";
    if (kp < 1 || tb != 1 || type == 2 || ko == 1.8) {
        maks = "запрет";
    } else { 
        maks = "23%, Кроме: Ваз/Lada/Газ/Уаз, </br>Renault Logan, Daewoo Nexia </br>СТАРШЕ 3-х лет от г.в. по ПТС";
    }
    
    
/**
 * Результаты
 */
 
    document.getElementById('result-nasko').innerHTML = + a.toFixed(2); //Огругляем до двух знаков после запятой
    document.getElementById('result-nasko-1').innerHTML = aa;
    document.getElementById('result-nasko-2').innerHTML = nasko;
    
    document.getElementById('result-maks').innerHTML = + a2.toFixed(2); //Огругляем до двух знаков после запятой
    document.getElementById('result-maks-1').innerHTML = aa2;
    document.getElementById('result-maks-2').innerHTML = maks;

    document.getElementById('result2').innerHTML = "3700" + " * " + kt + " * " + kbm + " * " + kvs + " * " + km + " * " + kp;
    document.getElementById('result-2').innerHTML = + b.toFixed(2);
    
    document.getElementById('result3').innerHTML = "4118" + " * " + kt + " * " + kbm + " * " + kvs + " * " + km + " * " + kp;
    document.getElementById('result-3').innerHTML = + c.toFixed(2);
    
    //document.getElementById('result1').innerHTML = a + " + " + b + " = " + b;
            
		}