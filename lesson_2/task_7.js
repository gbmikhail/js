// 7. *Сравнить null и 0. Попробуйте объяснить результат.

console.log(null == 0); // (1) false
console.log(null > 0);  // (2) false
console.log(null < 0);  // (3) false
console.log(null >= 0); // (4) true
console.log(null <= 0); // (5) true

/*
 Ответ: 
    == не привело null и 0 к единому типу, поэтому (null == 0) - ложь
    Сравнения > < >= <= преобразовали null в число, и и число это было 0.
        Таким образом (null > 0) и (null < 0) - это ложь, а (null >= 0) и (null <= 0) - истина.
*/