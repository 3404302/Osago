function Calc() {

    
/**
 * Обозначаем переменные и находим значение по ID
 */
    
    
    var type = 1; // Физик или юрик
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
 * Коэф kvs от Возр-стаж
 */
    
    
    if (birth == 21 && drive < 3) { 
       kvs = 1.87;
    } else if (birth == 21 && drive < 7) {
       kvs = 1.66;
    } else if (birth == 21 && drive > 5) {
       kvs = 0;
    } else if (21 < birth && birth < 25 && drive < 3) {
        kvs = 1.77;
    } else if (21 < birth && birth < 25 && drive < 10) {
        kvs = 1.04;
    } else if (21 < birth && birth < 25 && drive > 7) {
        kvs = 0;
    } else if (24 < birth && birth < 30 && drive == 0) {
        kvs = 1.77;
    } else if (24 < birth && birth < 30 && drive == 1) {
        kvs = 1.69;
    } else if (24 < birth && birth < 30 && drive == 2) {
        kvs = 1.63;
    } else if (24 < birth && birth < 30 && 2 < drive && drive < 10) {
        kvs = 1.04;
    } else if (24 < birth && birth < 30 && drive < 14) {
        kvs = 1.01;
    } else if (24 < birth && birth < 30 && drive == 14) {
        kvs = 0;
    } else if (29 < birth && birth < 60 && drive < 3) {
        kvs = 1.63;
    } else if (29 < birth && birth < 35 && drive < 7) {
        kvs = 1.04;
    } else if (29 < birth && birth < 35 && drive < 10) {
        kvs = 1.01;
    } else if (29 < birth && birth < 35 && drive > 7) {
        kvs = 0.96;
    } else if (34 < birth && birth < 40 && drive < 5) {
        kvs = 0.99;
    } else if (34 < birth && birth < 40 && drive > 4) {
        kvs = 0.96;
    } else if (39 < birth && birth < 60 && drive > 2) {
        kvs = 0.96;
    } else if (birth == 60 && drive < 3) {
        kvs = 1.6;
    } else if (birth == 60 && drive > 2) {
        kvs = 0.93;
    } else {
        kvs = 1;    
    }
    

/**
 * Юр или Физ лицо, обозначаем type
 */
    
    
    if (+document.getElementById('ytype').checked) {
        type = 2;
    } else if (+document.getElementById('ftype').checked){
        type = 1;
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
 * Коэф km в зависимости от Категории ТС. лошадиные силы, мощность 
 */
    

    if (tb == 0.5 || tb == 3 || tb == 4 || tb == 5 || tb == 6 || tb == 7 || tb == 8 || tb == 9 || tb == 10) { 
            km = 1;
    }
    

/**
 * Находим Tb для каждой компании
 */

    
    var tbnasko = 'Базовая ставка Наско'
    var tbmaks = 'Базовая ставка Макс'
    var tbguideh = 'Базовая ставка Гайде' // Примечание, доделать питер и ло. кат б физики по п и ло 4118
    var tbingos = 'Базовая ставка Ингосстрах'
    var tbvsk = 'Базовая ставка Вск'
    var tbergo = 'Базовая ставка Эрго' // Питер и ЛО то же самое
    var tbrgs = 'Базовая ставка Росгосстрах' // Питер и ЛО то же самое
    var tbreso = 'Базовая ставка Ресо'
    var tbalfa = 'Базовая ставка Альфа'
    var tbsoglasie = 'Базовая ставка Согласие'
    var tbarmeec = 'Базовая ставка Армеец'
    var tbeuroins = 'Базовая ставка Евроинс'
    var tbzetta = 'Базовая ставка Зетта'
    var tbrenins = 'Базовая ставка Ренессанс'
    var tbuzur = 'Базовая ставка Южурал-Аско'
    var tbtink = 'Базовая ставка Тинькофф'
    var tbsterh = 'Базовая ставка Стерх'
    
    if (tb == 0.5) { // Категория А, мотоциклы и тп
        tbnasko = 1579;
        tbmaks = 867;
        tbguideh = 1579;
        tbingos = 867;
        tbvsk = 1579;
        tbergo = 1579;
        tbrgs = 867;
        tbreso = 1579;
        tbalfa = 1579; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbsoglasie = 1579; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbarmeec = 1579; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbeuroins = 1579; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbzetta = 1579; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbrenins = 1579; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbuzur = 1579; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbtink = 1579; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbsterh = 1579;
        
    } else if (tb == 2) { // Категория В такси
        tbnasko = 6166;
        tbmaks = 6166;
        tbguideh = 6166;
        tbingos = 6166;
        tbvsk = 6166;
        tbergo = 6166;
        tbrgs = 6166;
        tbreso = 6166;
        tbalfa = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbsoglasie = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbarmeec = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbeuroins = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbzetta = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbrenins = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbuzur = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbtink = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbsterh = 6166;
        
    } else if (tb == 3 && kt == 1.6 || tb == 3 && kt == 1.8) { // Категория С, 16 тонн и менее ПИТЕР И Л.О.
        tbnasko = 4000;
        tbmaks = 3509;
        tbguideh = 4211;
        tbingos = 3509;
        tbvsk = 4211;
        tbergo = 4211;
        tbrgs = 3509;
        tbreso = 4211; 
        tbalfa = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbsoglasie = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbarmeec = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbeuroins = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbzetta = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbrenins = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbuzur = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbtink = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbsterh = 3509;
        
    } else if (tb == 3) { // Категория С, 16 тонн и менее
        tbnasko = 4211;
        tbmaks = 3509;
        tbguideh = 4211;
        tbingos = 3509;
        tbvsk = 4211;
        tbergo = 4211;
        tbrgs = 3509;
        tbreso = 4211; 
        tbalfa = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbsoglasie = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbarmeec = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbeuroins = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbzetta = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbrenins = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbuzur = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbtink = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbsterh = 3509;
        
    } else if (tb == 4 && kt == 1.6 || tb == 4 && kt == 1.8) { // Категория С, свыше 16 тонн ПИТЕР И Л.О.
        tbnasko = 6025;
        tbmaks = 5284;
        tbguideh = 6341;
        tbingos = 5284;
        tbvsk = 6341;
        tbergo = 6341;
        tbrgs = 5284;
        tbreso = 5284;
        tbalfa = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbsoglasie = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbarmeec = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbeuroins = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbzetta = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbrenins = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbuzur = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbtink = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbsterh = 5284;
        
    } else if (tb == 4 && kt == 2) { // Категория С, свыше 16 тонн МОСКВА
        tbnasko = 5284;
        tbmaks = 5284;
        tbguideh = 6341;
        tbingos = 5284;
        tbvsk = 6341;
        tbergo = 6341;
        tbrgs = 5284;
        tbreso = 6341;
        tbalfa = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbsoglasie = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbarmeec = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbeuroins = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbzetta = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbrenins = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbuzur = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbtink = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbsterh = 5284;
        
    } else if (tb == 4) { // Категория С, свыше 16 тонн
        tbnasko = 5284;
        tbmaks = 5284;
        tbguideh = 6341;
        tbingos = 5284;
        tbvsk = 6341;
        tbergo = 6341;
        tbrgs = 5284;
        tbreso = 5284;
        tbalfa = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbsoglasie = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbarmeec = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbeuroins = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbzetta = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbrenins = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbuzur = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbtink = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbsterh = 5284;
        
    } else if (tb == 5 && kt == 1.8) { // Кат D, Автобусы, 16 мест и менее ПИТЕР
        tbnasko = 2808;
        tbmaks = 2808;
        tbguideh = 3370;
        tbingos = 2808;
        tbvsk = 3370;
        tbergo = 3370;
        tbrgs = 2808;
        tbreso = 3370;
        tbalfa = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbsoglasie = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbarmeec = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbeuroins = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbzetta = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbrenins = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbuzur = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbtink = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbsterh = 2808;
        
    } else if (tb == 5 && kt == 2) { // Кат D, Автобусы, 16 мест и менее МОСКВА
        tbnasko = 3370;
        tbmaks = 2808;
        tbguideh = 3370;
        tbingos = 2808;
        tbvsk = 3370;
        tbergo = 3370;
        tbrgs = 2808;
        tbreso = 2808;
        tbalfa = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbsoglasie = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbarmeec = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbeuroins = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbzetta = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbrenins = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbuzur = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbtink = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbsterh = 2808;
        
    } else if (tb == 5) { // Кат D, Автобусы, 16 мест и менее
        tbnasko = 3370;
        tbmaks = 2808;
        tbguideh = 3370;
        tbingos = 2808;
        tbvsk = 3370;
        tbergo = 3370;
        tbrgs = 2808;
        tbreso = 3370;
        tbalfa = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbsoglasie = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbarmeec = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbeuroins = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbzetta = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbrenins = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbuzur = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbtink = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbsterh = 2808;
        
    } else if (tb == 6 && kt == 1.8) { // Кат D, Автобусы, свыше 16 мест ПИТЕР
        tbnasko = 3509;
        tbmaks = 3509;
        tbguideh = 4211;
        tbingos = 3509;
        tbvsk = 4211;
        tbergo = 4211;
        tbrgs = 3509;
        tbreso = 4211;
        tbalfa = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbsoglasie = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbarmeec = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbeuroins = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbzetta = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbrenins = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbuzur = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbtink = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbsterh = 3509;
        
    } else if (tb == 6) { // Кат D, Автобусы, свыше 16 мест
        tbnasko = 4211;
        tbmaks = 3509;
        tbguideh = 4211;
        tbingos = 3509;
        tbvsk = 4211;
        tbergo = 4211;
        tbrgs = 3509;
        tbreso = 4211;
        tbalfa = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbsoglasie = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbarmeec = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbeuroins = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbzetta = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbrenins = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbuzur = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbtink = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbsterh = 3509;
        
    } else if (tb == 7 && kt == 1.6 || tb == 7 && kt == 1.8) { // Кат D, Автобусы, такси ПИТЕР И Л.О.
        tbnasko = 5855;
        tbmaks = 6166;
        tbguideh = 6166;
        tbingos = 6166;
        tbvsk = 6166; 
        tbergo = 6166;
        tbrgs = 6166;
        tbreso = 6166; 
        tbalfa = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbsoglasie = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbarmeec = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbeuroins = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbzetta = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbrenins = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbuzur = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbtink = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbsterh = 6166;
        
    } else if (tb == 7) { // Кат D, Автобусы, такси
        tbnasko = 5138; 
        tbmaks = 6166;
        tbguideh = 6166;
        tbingos = 6166;
        tbvsk = 6166; 
        tbergo = 6166;
        tbrgs = 6166;
        tbreso = 6166; 
        tbalfa = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbsoglasie = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbarmeec = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbeuroins = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbzetta = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbrenins = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbuzur = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbtink = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbsterh = 6166;
        
    } else if (tb == 8) { // Трамваи
        tbnasko = 2101;
        tbmaks = 2101;
        tbguideh = 2101;
        tbingos = 2101;
        tbvsk = 2101;
        tbergo = 2101;
        tbrgs = 2101;
        tbreso = 2101;
        tbalfa = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbsoglasie = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbarmeec = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbeuroins = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbzetta = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbrenins = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbuzur = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbtink = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbsterh = 2101;
        
    } else if (tb == 9) { // Троллейбусы
        tbnasko = 3370;
        tbmaks = 3370;
        tbguideh = 3370;
        tbingos = 3370;
        tbvsk = 3370;
        tbergo = 3370;
        tbrgs = 3370;
        tbreso = 3370;
        tbalfa = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbsoglasie = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbarmeec = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbeuroins = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbzetta = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbrenins = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbuzur = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbtink = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbsterh = 3370;
        
    } else if (tb == 10 && kt == 2) { // Самоходки и спецтехника МОСКВА
        tbnasko = 1579;
        tbmaks = 1124;
        tbguideh = 1579;
        tbingos = 1124;
        tbvsk = 1579;
        tbergo = 1579;
        tbrgs = 1124;
        tbreso = 1124;
        tbalfa = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbsoglasie = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbarmeec = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbeuroins = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbzetta = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbrenins = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbuzur = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbtink = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbsterh = 1124;
        
    } else if (tb == 10) { // Самоходки и спецтехника
        tbnasko = 1579;
        tbmaks = 1124;
        tbguideh = 1579;
        tbingos = 1124;
        tbvsk = 1579;
        tbergo = 1579;
        tbrgs = 1124;
        tbreso = 1579;
        tbalfa = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbsoglasie = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbarmeec = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbeuroins = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbzetta = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbrenins = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbuzur = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbtink = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbsterh = 1124;
        
    } else if (tb == 1 && type == 2) { // Юрики
        tbnasko = 2573;
        tbmaks = 2573;
        tbguideh = 2573;
        tbingos = 2573;
        tbvsk = 3087;
        tbergo = 2573;
        tbrgs = 2573;
        tbreso = 2573;
        tbalfa = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbsoglasie = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbarmeec = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbeuroins = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbzetta = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbrenins = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbuzur = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbtink = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbsterh = 2573;
        
    }  else if (tb == 1 && type == 1 && kt == 2) { // Москва, кат В физики
        tbnasko = 4118;
        tbmaks = 4118;
        tbguideh = 3700;
        tbingos = 4118;
        tbvsk = 4118;
        tbergo = 4118;
        tbrgs = 4118;
        tbreso = 3775;
        tbalfa = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbsoglasie = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbarmeec = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbeuroins = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbzetta = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbrenins = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbuzur = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbtink = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbsterh = 3432;
        
    } else if (tb == 1 && type == 1 && kt == 1.7) { // Моск обл, кат В физики
        tbnasko = 4118;
        tbmaks = 4118;
        tbguideh = 4118;
        tbingos = 4118;
        tbvsk = 4118;
        tbergo = 4118;
        tbrgs = 4118;
        tbreso = 4118;
        tbalfa = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbsoglasie = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbarmeec = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbeuroins = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbzetta = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbrenins = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbuzur = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbtink = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbsterh = 3432;
        
    } else {                                      // Пока что все остальное в таком формате
        tbnasko = 4118; // готово
        tbmaks = 4118;
        tbguideh = 4118;
        tbingos = 4118;
        tbvsk = 4118;
        tbergo = 4118;
        tbrgs = 4118;
        tbreso = 4118;
        tbalfa = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbsoglasie = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbarmeec = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbeuroins = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbzetta = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbrenins = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbuzur = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbtink = 6166; //УДАЛИ КОГДА СДЕЛАЕШЬ!
        tbsterh = 4118;
    } 
    

/**
 * Формула расчета страховой премии НАСКО
 */
    
    
    var nasko1 = tbnasko * kt * kbm * kvs * ko * ks * kp * km * kpr * kn;
    
    
    var nasko3 = "Кв Наско";
    if ( kp < 1 || type == 1 && tb != 1 || kt < 1.6) {
        nasko3 = "запрет";
    } else if ( type == 1 && kbm == 2.45 || type == 1 && kbm == 1.55 || type == 1 && kbm == 1) {
        nasko3 = "25% (е-осаго или БСО)</br>Кроме: ГАЗ Старше 3 лет по ПТС";
    } else if ( type == 1 && kbm == 2.3 || type == 1 && kbm == 1.4 || type == 1 && kbm < 1 && kt < 1.8) {
        nasko3 = "25% е-осаго ; 22% БСО</br>Кроме: ГАЗ Старше 3 лет по ПТС";
    } else if ( type == 1 && kbm < 1 && kt > 1.7) {
        nasko3 = "27% е-осаго ; 22% БСО</br>Кроме: ГАЗ Старше 3 лет по ПТС";
    } else if ( type == 2 && tb == 1 || type == 2 && tb == 3 || type == 2 && tb == 4 ) {
        nasko3 = "22%</br>Кроме: Газ"; //ready ooo
    } else {
        nasko3 = "запрет else";
    }

    
/**
 * Формула расчета страховой премии МАКС
 */
    
    
    var maks1 = tbmaks * kt * kbm * kvs * ko * ks * kp * km * kpr * kn;

    
    var maks3 = "Кв Макс";
    if (kp < 1 || tb != 1 || type != 1 || ko == 1.8 || kt < 1.7 || kt == 1.8) {
        maks3 = "запрет";
    } else if (kt < 2 && km < 1.2 ) {
        maks3 = "запрет";
    } else if (kt == 2 && km < 1.2) {
        maks3 = "15%, Кроме:<br>Чужая прол - кв = 0%";
    } else {
        maks3 = "25%, Кроме:<br>Чужая прол - кв = 0%";
    }

    
/**
 * Формула расчета страховой премии ГАЙДЕ
 */
    

    var guideh1 = tbguideh * kt * kbm * kvs * ko * ks * kp * km * kpr * kn;


    var guideh3 = "Кв Гайде";
    if (tb != 1 || kt < 1.7 || kt == 1.8 || kp < 0.4) {
        guideh3 = "запрет";
    } else if (type == 1 && km > 1.2 && drive > 4 && birth > 30) {
        guideh3 = "25%<br>Кроме: Газ/Daewoo/ВАЗ и ТС до 2000 г.в.";
    } else if (type == 2 && km > 1.2) {
        guideh3 = "25%<br>Кроме: Газ/Daewoo/ВАЗ и ТС до 2000 г.в.";
    } else if (type == 1 && +document.getElementById('ko').checked) {
        guideh3 = "запрет";
    } else if (type == 1 && km > 1.1 && drive > 3 && birth > 23) {
        guideh3 = "20%<br>Кроме: Газ/Daewoo/ВАЗ и ТС до 2000 г.в.";
    } else if (type == 2 && km < 1.2) {
        guideh3 = "20%<br>Кроме: Газ/Daewoo/ВАЗ и ТС до 2000 г.в.";
    } else {
        guideh3 = "запрет";
    } 
    
    
/**
 * Формула расчета страховой премии Ингосстрах
 */    

    
    var ingos1 = tbingos * kt * kbm * kvs * ko * ks * kp * km * kpr * kn;


    var ingos3 = "Кв Ингосстрах";
    if (tb > 1 || kt == 1.8 || kt < 1.7 || kp < 0.4) {
        ingos3 = "запрет";
    } else if (type == 1 && kbm < 1 ) {
        ingos3 = "ЕОСАГО = 20%, МММ = 15%<br>Кроме: Все отечественные ТС";
    } else if (type == 2 && kt == 2) {
        ingos3 = "МММ = 15%<br>Кроме: Газ";
    } else if (type == 2 && kt == 1.7 && tb == 0.5) {
        ingos3 = "запрет";
    } else if (type == 2 && kt == 1.7 && tb == 1) {
        ingos3 = "МММ = 15%<br>Кроме: Все отечественные ТС";
    } else {
        ingos3 = "запрет";
    } 
    
    
/**
 * Формула расчета страховой премии Вск
 */
    

    var vsk1 = tbvsk * kt * kbm * kvs * ko * ks * kp * km * kpr * kn;


    var vsk3 = "Кв Вск";
    if (type == 1 && tb != 1 || kt == 1.8 || kt < 1.7) {
        vsk3 = "запрет";
    } else if (type == 2 && tb == 1 && km > 1.2) {
        vsk3 = "15%";
    } else if (type == 2 && tb == 3 || type == 2 && tb == 4) {
        vsk3 = "5%";
    } else if (type == 1 && kp < 1 || type == 1 && kbm > 0.95 || type == 1 && ko == 1.8) {
        vsk3 = "запрет,<br> при пролонгации КБМ, возр-стаж, без огран - любой";
    } else if (type == 1 && birth > 34 && kvs == 1 && kt == 2) {
        vsk3 = "32% новый бизнес<br> 30% пролонгация (Кбм, возр-стаж, без огранич - любой)";
    } else if (type == 1 && birth > 34 && kvs == 1 && kt == 1.7) {
        vsk3 = "25% новый бизнес<br> 25% пролонгация (Кбм, возр-стаж, без огранич - любой)";
    } else if (type == 1 && birth < 35 && kvs == 1 && kt == 2) {
        vsk3 = "25% новый бизнес<br> 30% пролонгация (Кбм, возр-стаж, без огранич - любой)";
    } else if (type == 1 && birth < 35 && kvs == 1 && kt == 1.7) {
        vsk3 = "20% новый бизнес<br> 25% пролонгация (Кбм, возр-стаж, без огранич - любой)";
    } else {
        vsk3 = "запрет,<br> при пролонгации см сегментацию";
    }
    
    
/**
 * Формула расчета страховой премии Эрго
 */
    

    var ergo1 = tbergo * kt * kbm * kvs * ko * ks * kp * km * kpr * kn;


    var ergo3 = "Кв Эрго";
    if ( tb != 1 || kp < 0.4 || kbm < 0.65 || kbm > 0.9 || km < 1.4) {
        ergo3 = "запрет, при пролонгации<br>см сегментацию";
    } else if (km > 1.2 && birth == 32 && ko != 1.8 && drive == 2) {
        ergo3 = "10%";
    } else if (km > 1.2 && birth == 32 && ko != 1.8 && drive == 6) {
        ergo3 = "10%";
    } else if (km > 1.2 && ko == 1.8) {
        ergo3 = "10%";
    }  else {
        ergo3 = "запрет, при пролонгации<br>см сегментацию";
    }
 
    
/**
 * Формула расчета страховой премии Росгосстрах
 */
    

    var rgs1 = tbrgs * kt * kbm * kvs * ko * ks * kp * km * kpr * kn;


    var rgs3 = "Кв Росгосстрах";
    if (kt == 1.8 || kt < 1.7 || kp < 0.4) {
        rgs3 = "запрет";
    } else if (type == 1 && tb != 1) {
        rgs3 = "запрет";
    } else if (type == 1 && tb == 1 && ko != 1.8) {
        rgs3 = "10%";
    } else if (type == 1 && tb == 1 && ko == 1.8 && km < 1.4) {
        rgs3 = "запрет";
    } else if (type == 1 && tb == 1 && ko == 1.8 && km > 1.2) {
        rgs3 = "10%";
    } else if (type == 2 && tb == 2) {
        rgs3 = "запрет";
    } else if (type == 2 && tb < 5) {
        rgs3 = "10%";
    } else if (type == 2 && tb > 7) {
        rgs3 = "10%";
    } else {
        rgs3 = "запрет";
    }
 

/**
 * Формула расчета страховой премии Стерх
 */
    

    var sterh1 = tbsterh * kt * kbm * kvs * ko * ks * kp * km * kpr * kn;


    var sterh3 = "Кв Стерх";
    if ( tb == 2 || tb == 7 || kp < 0.5 || kbm > 1) {
        sterh3 = "запрет";
    } else if ( tb > 4) {
        sterh3 = "5%<br>по согласованию";
    } else if (tb == 1 && km > 1 && type == 2) {
        sterh3 = "20%<br>от 55 л.с.";
    } else if (tb == 3 && type == 2 || tb == 4 && type == 2) {
        sterh3 = "5%";
    } else if (type == 1 && kvs == 1 && tb == 1 && km > 1) {
        sterh3 = "20%";
    } else if (type == 1 && ko == 1.8 && tb == 1 && km > 1) {
        sterh3 = "20%";
    } else if (type == 1 && ko == 1.8 && tb == 3 || type == 1 && ko == 1.8 && tb == 4 || type == 1 && kvs == 1 && tb == 3 || type == 1 && kvs == 1 && tb == 4) {
        sterh3 = "5%";
    }  else {
        sterh3 = "запрет";
    }
    
    
/**
 * Формула расчета страховой премии Ресо
 */
    

    var reso1 = tbreso * kt * kbm * kvs * ko * ks * kp * km * kpr * kn;


    var reso3 = "Кв Ресо";
    if ( kt == 1.8 || kt < 1.7) {
        reso3 = "запрет";
    } else if ( tb > 4) {
        reso3 = "5%<br>по согласованию";
    } else if (tb == 1 && km > 1 && type == 2) {
        reso3 = "20%<br>от 55 л.с.";
    } else if (tb == 3 && type == 2 || tb == 4 && type == 2) {
        reso3 = "5%";
    } else if (type == 1 && kvs == 1 && tb == 1 && km > 1) {
        reso3 = "20%";
    } else if (type == 1 && ko == 1.8 && tb == 1 && km > 1) {
        reso3 = "20%";
    } else if (type == 1 && ko == 1.8 && tb == 3 || type == 1 && ko == 1.8 && tb == 4 || type == 1 && kvs == 1 && tb == 3 || type == 1 && kvs == 1 && tb == 4) {
        reso3 = "5%";
    }  else {
        reso3 = "запрет";
    }
    
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
    
    document.getElementById('result-ingos-1').innerHTML = + ingos1.toFixed(2); //Огругляем до двух знаков после запятой
    document.getElementById('result-ingos-2').innerHTML = tbingos;
    document.getElementById('result-ingos-3').innerHTML = ingos3;
    
    document.getElementById('result-vsk-1').innerHTML = + vsk1.toFixed(2); //Огругляем до двух знаков после запятой
    document.getElementById('result-vsk-2').innerHTML = tbvsk;
    document.getElementById('result-vsk-3').innerHTML = vsk3;
    
    document.getElementById('result-ergo-1').innerHTML = + ergo1.toFixed(2); //Огругляем до двух знаков после запятой
    document.getElementById('result-ergo-2').innerHTML = tbergo;
    document.getElementById('result-ergo-3').innerHTML = ergo3;
    
    document.getElementById('result-rgs-1').innerHTML = + rgs1.toFixed(2); //Огругляем до двух знаков после запятой
    document.getElementById('result-rgs-2').innerHTML = tbrgs;
    document.getElementById('result-rgs-3').innerHTML = rgs3;
    
    document.getElementById('result-sterh-1').innerHTML = + sterh1.toFixed(2); //Огругляем до двух знаков после запятой
    document.getElementById('result-sterh-2').innerHTML = tbsterh;
    document.getElementById('result-sterh-3').innerHTML = sterh3;
    
    document.getElementById('result-reso-1').innerHTML = + reso1.toFixed(2); //Огругляем до двух знаков после запятой
    document.getElementById('result-reso-2').innerHTML = tbreso;
    document.getElementById('result-reso-3').innerHTML = reso3;
    
    document.getElementById('result-alfa-1').innerHTML = + alfa1.toFixed(2); //Огругляем до двух знаков после запятой
    document.getElementById('result-alfa-2').innerHTML = tbalfa;
    document.getElementById('result-alfa-3').innerHTML = alfa3;
    
    document.getElementById('result-soglasie-1').innerHTML = + soglasie1.toFixed(2); //Огругляем до двух знаков после запятой
    document.getElementById('result-soglasie-2').innerHTML = tbsoglasie;
    document.getElementById('result-soglasie-3').innerHTML = soglasie3;
    
    document.getElementById('result-armeec-1').innerHTML = + armeec1.toFixed(2); //Огругляем до двух знаков после запятой
    document.getElementById('result-armeec-2').innerHTML = tbarmeec;
    document.getElementById('result-armeec-3').innerHTML = armeec3;
    
    document.getElementById('result-euroins-1').innerHTML = + euroins1.toFixed(2); //Огругляем до двух знаков после запятой
    document.getElementById('result-euroins-2').innerHTML = tbeuroins;
    document.getElementById('result-euroins-3').innerHTML = euroins3;
    
    document.getElementById('result-zetta-1').innerHTML = + zetta1.toFixed(2); //Огругляем до двух знаков после запятой
    document.getElementById('result-zetta-2').innerHTML = tbzetta;
    document.getElementById('result-zetta-3').innerHTML = zetta3;
    
    document.getElementById('result-renins-1').innerHTML = + renins1.toFixed(2); //Огругляем до двух знаков после запятой
    document.getElementById('result-renins-2').innerHTML = tbrenins;
    document.getElementById('result-renins-3').innerHTML = renins3;
    
    document.getElementById('result-uzur-1').innerHTML = + uzur1.toFixed(2); //Огругляем до двух знаков после запятой
    document.getElementById('result-uzur-2').innerHTML = tbuzur;
    document.getElementById('result-uzur-3').innerHTML = uzur3;
    
    document.getElementById('result-tink-1').innerHTML = + tink1.toFixed(2); //Огругляем до двух знаков после запятой
    document.getElementById('result-tink-2').innerHTML = tbtink;
    document.getElementById('result-tink-3').innerHTML = tink3;
            
		}