function Calc() {

/**
 * Обозначаем переменные и находим значение по ID
 */
    var type = +document.getElementById('type').value; // Физик или юрик
    var tb = +document.getElementById('tb').value; // Базовая ставка 3432-4118 . зависит от территории, категории авто и страховой компании
    var kt = +document.getElementById('kt').value; // коэф территории
    var kbm = +document.getElementById('kbm').value; // коэф бонус-малус
    var birth = +document.getElementById('birth').value; // возраст
    var drive = +document.getElementById('drive').value; // стаж
    var kvs = 1; //+document.getElementById('kvs').value; // коэф возраст-стаж, ниже
    var ko = +document.getElementById('ko').value; // без ограничений - если выбран - коэф 1.8 (пока один)
    var km = +document.getElementById('km').value; // коэф мощность
    var ks = 1; // срок страхования, всегда равен 1.
    var kp = +document.getElementById('kp').value; // период использования
    var kpr = 1; //+document.getElementById('kpr').value; // прицеп (только юрики)
    var kn = 1; // коэф грубых нарушений

/**
 * Находим kvs
 */
    
    if (birth == 22 && drive == 3) { 
        kvs = 1.8;
    } else if (birth > 22 && drive == 3) {
        kvs = 1.7;
    } else if (birth == 22 && drive == 4) {
        kvs = 1.6;
    } else {
        kvs = 1;    
    }
    
/**
 * Если ЮЛ или без ограничений. Chekbox
 */
    
    if (+document.getElementById('ko').checked || type == 2) {
        kvs = 1;
    } else {
        ko = 1;
    }

/**
 * Коэф kpr в зависимости от Категории ТС . Chekbox
 */
    
    if (+document.getElementById('kpr').checked && tb == 0.5) { 
            kpr = 1.16;
    }  else if (+document.getElementById('kpr').checked && tb == 3) {
            kpr = 1.4;
    } else if (+document.getElementById('kpr').checked && tb == 4) {
            kpr = 1.25;
    } else if (+document.getElementById('kpr').checked && 0.5 < tb < 3 && type == 2) {
            kpr = 1.16;
    }
    

/**
 * Формула расчета страховой премии НАСКО
 */
    var tbnasko = 'Базовая ставка Наско' // Примечание, доделать питер и ло
    if (tb == 0.5) {
        tbnasko = 1579;
    } else if (tb == 2) {
        tbnasko = 6166;
    } else if (tb == 3) {
        tbnasko = 4211;
    } else if (tb == 4) {
        tbnasko = 5284;
    } else if (tb == 5) {
        tbnasko = 3370;
    } else if (tb == 6) {
        tbnasko = 4211;
    } else if (tb == 7) {
        tbnasko = 5138; 
    } else if (tb == 8) {
        tbnasko = 2101;
    } else if (tb == 9) {
        tbnasko = 3370;
    } else if (tb == 10) {
        tbnasko = 1579;
    } else if (tb == 1 && type == 2) {
        tbnasko = 2573;
    }  else if (tb == 1 && type == 1 && kt == 1.8 || kt == 1.6) {
        tbnasko = 4118;
    } else if (tb == 1 && type == 1) {
        tbnasko = 3432;
    }
    
    //var nasko1 = 'Формула Наско'
    //if (type == 1) {
    //    nasko1 = tbnasko * kt * kbm * kvs * ko * ks * kp * km * kn; //Физик, ko нет, берем kvs по if выше
    //} else if (type == 1 && tb == 0.5 || tb > 4) {
    //    nasko1 = tbnasko * kt * kbm * kvs * ko * ks * kp * km * kn; //Физик, ko нет, берем kvs по if выше
    //} else {
    //    nasko1 = tbnasko * kt * kbm * kvs * ko * ks * kp * km * kpr * kn; //Юрик, kvs нет, берем ko = 1.8
    //}
    
    //var nasko2 = 'Результат'
    //if (type == 1) {
    //    nasko2 = tbnasko + " * " + kt + " * " + kbm + " * " + kvs + " * " + ko + " * " + ks + " * " + kp + " * " + km + " * " + "1" + " * " + kn; //Физик
    //} else {
    //    nasko2 = tbnasko + " * " + kt + " * " + kbm + " * " + kvs + " * " + ko + " * " + ks + " * " + kp + " * " + km + " * " + kpr + " * " + kn; //Юрик
    //}
    
    var nasko1 = tbnasko * kt * kbm * kvs * ko * ks * kp * km * kpr * kn;
    //var nasko2 = tbnasko;
    //var nasko2 = tbnasko + " * " + kt + " * " + kbm + " * " + kvs + " * " + ko + " * " + ks + " * " + kp + " * " + km + " * " + kpr + " * " + kn;
    
    var nasko3 = "Кв Наско";
    if ( kp < 1 || 1 > tb || tb == 2 || tb > 4) {
        nasko3 = "запрет";
    } else if ( type == 1 && km > 1.1 && tb == 1) {
        nasko3 = "23%</br>Кроме: Ваз/Lada/Газ/Уаз, </br>Renault Logan, Daewoo Nexia </br>СТАРШЕ 3-х лет от г.в. по ПТС";
    } else if ( type == 2 && 1 < tb < 4 ) {
        nasko3 = "23%</br>Кроме:Газ";
    } else {
        nasko3 = "запрет";
    }

/**
 * Формула расчета страховой премии МАКС
 */
    //var maks1 = 'Формула Макс'
    //if (type == 1) {
    //    maks1 = 3700 * kt * kbm * kvs * ko * ks * kp * km * kn; //Физик, ko нет, берем kvs по if выше
    //} else {
    //    maks1 = 2573 * kt * kbm * kvs * ko * ks * kp * km * kpr * kn; //Юрик, kvs нет, берем ko = 1.8
    //}
    //
    //var maks2 = 'Результат'
    //if (type == 1) {
    //    maks2 = "3700" + " * " + kt + " * " + kbm + " * " + kvs + " * " + ko + " * " + ks + " * " + kp + " * " + km + " * " + "1" + " * " + kn; //Физик
    //} else {
    //    maks2 = "2573" + " * " + kt + " * " + kbm + " * " + kvs + " * " + ko + " * " + ks + " * " + kp + " * " + km + " * " + kpr + " * " + kn; //Юрик
    //}
    
    var tbmaks = 'Базовая ставка Макс'
    if (tb == 0.5) {
        tbmaks = 867;
    } else if (tb == 2) {
        tbmaks = 6166;
    } else if (tb == 3) {
        tbmaks = 3509;
    } else if (tb == 4) {
        tbmaks = 5284;
    } else if (tb == 5) {
        tbmaks = 2808;
    } else if (tb == 6) {
        tbmaks = 3509;
    } else if (tb == 7) {
        tbmaks = 6166; 
    } else if (tb == 8) {
        tbmaks = 2101;
    } else if (tb == 9) {
        tbmaks = 3370;
    } else if (tb == 10) {
        tbmaks = 1124;
    } else if (tb == 1 && type == 2) {
        tbmaks = 2573;
    }  else if (tb == 1 && type == 1 && kt == 2) {
        tbmaks = 3700;
    } else if (tb == 1 && type == 1 && kt == 1.7) {
        tbmaks = 3950;
    } else {
        tbmaks = 4118;
    }
    
    var maks1 = tbmaks * kt * kbm * kvs * ko * ks * kp * km * kpr * kn;
    //var maks2 = tbmaks;
    //var maks2 = tbmaks + " * " + kt + " * " + kbm + " * " + kvs + " * " + ko + " * " + ks + " * " + kp + " * " + km + " * " + kpr + " * " + kn;
    
    var maks3 = "Кв Макс";
    if (kp < 1 || tb != 1 || type != 1 || ko == 1.8 || kt < 1.7 || kt == 1.8) {
        maks3 = "запрет";
    } else if (kt < 2 && km < 1.2 ) {
        maks3 = "запрет";
    } else if (kt == 2 && km < 1.2) {
        maks3 = "15%";
    } else {
        maks3 = "25%";
    }
    
/**
 * Формула расчета страховой премии ГАЙДЕ
 */
    

    var guideh1 = tbnasko * kt * kbm * kvs * ko * ks * kp * km * kpr * kn;
    //var guideh2 = tbnasko;
    //var guideh2 = tbnasko + " * " + kt + " * " + kbm + " * " + kvs + " * " + ko + " * " + ks + " * " + kp + " * " + km + " * " + kpr + " * " + kn;

    
    
/**
 * Результаты формулы
 */
    
    document.getElementById('result-kt').innerHTML = kt;
    document.getElementById('result-kbm').innerHTML = kbm;
    document.getElementById('result-kvs').innerHTML = kvs;
    document.getElementById('result-ko').innerHTML = ko;
    document.getElementById('result-ks').innerHTML = ks;
    document.getElementById('result-kp').innerHTML = kp;
    document.getElementById('result-km').innerHTML = km;
    document.getElementById('result-kpr').innerHTML = kpr;
    document.getElementById('result-kn').innerHTML = kn;
 
    document.getElementById('result-nasko-1').innerHTML = + nasko1.toFixed(2); //Огругляем до двух знаков после запятой
    document.getElementById('result-nasko-2').innerHTML = tbnasko;
    document.getElementById('result-nasko-3').innerHTML = nasko3;
    
    document.getElementById('result-maks-1').innerHTML = + maks1.toFixed(2); //Огругляем до двух знаков после запятой
    document.getElementById('result-maks-2').innerHTML = tbmaks;
    document.getElementById('result-maks-3').innerHTML = maks3;

     document.getElementById('result-guideh-1').innerHTML = + guideh1.toFixed(2); //Огругляем до двух знаков после запятой
    document.getElementById('result-guideh-2').innerHTML = tbguideh;
    document.getElementById('result-guideh-3').innerHTML = guideh3;
    
    document.getElementById('result3').innerHTML = "4118" + " * " + kt + " * " + kbm + " * " + kvs + " * " + km + " * " + kp;
    document.getElementById('result-3').innerHTML = + c.toFixed(2);
    
    //document.getElementById('result1').innerHTML = a + " + " + b + " = " + b;
            
		}