











// Input ilə daxil edilən bir ədədin 10-dan böyük və 20-dən kiçik olub olmadığını yoxlayan
// var declere = Number(prompt("Eded daxil et"))

// if(declere > 10 || declere < 20){
//   console.log("dogrudur")
// }else{
//   console.log("yalnishdir")
// }


// Input ilə daxil edilən iki ədədin bir-birinə bərabər olub olmadığını yoxlayan alqoritm yazın
// var eded1 = Number(prompt("birinci ededi daxil edin"))
// var eded2 = Number(prompt("ikinci ededi daxil edin"))

// if(eded1 == eded2){
//   console.log("berberdir")
// }else{
//   console.log("yalnishdir")
// }

// Input ilə daxil edilən bir string dəyərin "Salam" sözünə bərabər olub olmadığını yoxlayan

// var deyer = String(prompt("Salam yaz"))

// if(deyer == "Salam"){
//   console.log("dogrudur")
// }else{
//   console.log("yalnishdir")
// }



// Input ilə daxil edilən üç fərqli ədəddən ən kiçiyini tapan alqoritm yazın.

// var A = Number(prompt("birinci ededi daxil edin"))
// var B = Number(prompt("ikinci ededi daxil edin"))
// var C = Number(prompt("ucuncu ededi daxil edin"))

// if(A < B && A < C){
//   console.log("kicik eded A dir")
// }else if(B < A && B < C){
//   console.log("kicik eded B dir")
// }{
//   console.log("en kicik eded C dir")
// }


// Input ilə daxil edilən bir ədədin 7-yə bölündükdə qalığının 0 olub olmadığını yoxlayan

// var eded  = Number(prompt("eded daxil et"))

// if(eded % 7 == 0){
//   console.log("7 e bolunur")
// }{
//   console.log("Bolunmur")
// }


// Input ilə daxil edilən bir string dəyərin uzunluğunun 5-dən böyük olub olmadığını 

// var Deyer = String(prompt("daxil et"))

// if(Deyer.length > 5){
//   console.log("5den boyukdur")
// }{
//   console.log("5 den kickdir")
// }


// Input ilə daxil edilən temperaturun (Selsi ilə) 0 dərəcədən aşağı olub olmadığını yoxlayan alqoritm yazın (donma nöqtəsi).
// var Value = Number(prompt("Tempratur daxil et"))

// if( Value < 0){
//   console.log("Donma noktesidir")
// }{
//   console.log("Hava eladir")
// }


// Input ilə daxil edilən bir rəqəmin (0-9 arasında) tək rəqəm olub olmadığını yoxlayan
// var value = Number(prompt("0-9 arasinda eded daxil et"))

// if(value >= 0 && value <= 9){
//   if(value % 2 !=0){
//     console.log("tekdir")
//   }else{
//     console.log("cutdur")
//   }
// }
// {
//   console.log("duzgun daxil edin")
// }

// Input ilə daxil edilən bir ilin uzun il (leap year) olub olmadığını yoxlayan alqoritm yazın (4-ə bölünürsə və 100-ə bölünmürsə, və ya 400-ə bölünürsə).

// var il = Number(prompt("Il daxil edin"))

// if(( il % 4 == 0 && il % 100 ==0 ) || (il % 400 == 0)){
//   console.log("Leap yeardir")
// }else{
//   console.log("o o il deil")
// }

// Input ilə daxil edilən bir string dəyərin boş olub olmadığını yoxlayan alqoritm yazın

// İstifadəçidən string dəyəri al
// let metn = prompt("Bir mətn daxil edin:");

// // Boş olub olmadığını yoxla
// if (metn === "") {
//     alert("Boş dəyər daxil edildi.");
// } else {
//     alert("Boş olmayan dəyər daxil edildi.");
// }

// Input ilə daxil edilən bir ədədin kvadratının 100-dən böyük olub olmadığını yoxlayan alqoritm yazın.
// var value = Number(prompt("Eded daxil edin"))

// var count = value * value

// if (count >= 100){
//   console.log("dogrudur")
// }else{
//   console.log("Yalnishdir")
// }


// Input ilə daxil edilən iki ədədin hasilinin müsbət, mənfi yoxsa sıfır olduğunu tapan alqoritm yazın.

// var value = Number(prompt("Eded daxil edin"))
// var value2 = Number(prompt("Eded daxil edin"))

// var count = value * value2

// if (count > 0){
//   console.log("Musbetdir")
// }else{
//   console.log("Menfidir")
// }

// Input ilə daxil edilən bir string dəyəri integer tipinə çevirməyə çalışan və uğurlu olub olmadığını bildirən alqoritm yazın. (Nümunə: "123" çevrilə bilər, "abc" yox).

// Prompt vasitəsilə istifadəçidən string dəyər alınır
// const input: string | null = prompt("Bir string dəyər daxil edin:");
// if (input !== null) {
//     const parsed: number = parseInt(input, 10);

//     if (isNaN(parsed)) {
//         alert("Çevirilə bilmədi: daxil edilən dəyər tam ədəd deyil.");
//     } else {
//         alert(`Çevirildi: ${parsed} tam ədəd olaraq qəbul edildi.`);
//     }
// } else {
//     alert(" Dəyər daxil edilmədi.");
// }


// Input ilə daxil edilən istifadəçi yaşının 18-dən böyük və ya bərabər olub olmadığını yoxlayan alqoritm yazın.
// var value = Number(prompt("Eded daxil edin"))

// if( value >= 18){
//   console.log("18de boyukdur")
//   if(value == 18){
//     console.log("18 e beraberdir")
//   }
// }{
//   console.log("Legal olmuyub")
// }

// Input ilə daxil edilən üçbucaq tərəflərinin (a, b, c) üçbucaq bərabərsizliyini (a+b>c, a+c>b, b+c>a) ödəyib ödəmədiyini yoxlayan alqoritm yazın.

// var a = Number(prompt("A ni daxil et"))
// var b = Number(prompt("B ni daxil et"))
// var c = Number(prompt("C ni daxil et"))

// if(a + b > c && a + c > b && b + c > a){
//   console.log("Odeyir")
// }{
//   console.log("Odemir qaqs")
// }

// Input ilə daxil edilən bir ədədin həm 3-ə, həm də 5-ə tam bölünüb bölünmədiyini yoxlayan alqoritm yazın.

// var value = Number(prompt("Eded daxil edin"))

// if(value  % 3 == 0 && value % 5 == 0){
//   console.log("odeyir")
// }else{
//   console.log("odemir")
  
// }


// Input ilə daxil edilən bir float ədədi ən yaxın tam ədədə yuvarlaqlaşdıran (conversion) və nəticəni çıxaran alqoritm yazın.

// const input: string | null = prompt("Bir float ədəd daxil edin:");

// if (input !== null) {
//     const floatEded: number = parseFloat(input);

//     if (isNaN(floatEded)) {
//         alert(" Zəhmət olmasa düzgün bir ədəd daxil edin.");
//     } else {
//         const yuvarlaqEded: number = Math.round(floatEded);

//         alert(`Ən yaxın tam ədəd: ${yuvarlaqEded}`);
//     }
// } else {
//     alert(" Dəyər daxil edilmədi.");
// }



// Input ilə daxil edilən bir balın (0-100 arası) "A" (90-100), "B" (80-89), "C" (70-79), "D" (60-69), "F" (<60) kateqoriyalarından hansına aid olduğunu müəyyən edən alqoritm yazın. (Yalnız bir şərt bloku istifadə edin).


// var value = Number(prompt("Balini daxil et"))

// if(value < 0){
//   console.log("menfi eded ola bilmez")
// }else if(value >= 90 && value <= 100){
//   console.log("A almisan")
// }else if(value >= 80 && value <= 89){
//   console.log("B almisan")
// }else if(value >= 70 && value <= 79){
//   console.log("C almisan")
// }else if(value >= 60 && value <= 69){
//   console.log("D almisan")
// }else if(value < 60){
//   console.log("F almisan")
// }


// Input ilə daxil edilən iki string dəyərin eyni olub olmadığını, böyük-kiçik hərf fərqinə məhəl qoymadan (case-insensitive comparison) yoxlayan alqoritm yazın.

// const str1: string | null = prompt("Birinci mətn daxil edin:");
// const str2: string | null = prompt("İkinci mətn daxil edin:");

// if (str1 !== null && str2 !== null) {
//     if (str1.toLowerCase() === str2.toLowerCase()) {
//         alert(" Daxil edilən stringlər eynidir (case-insensitive).");
//     } else {
//         alert(" Daxil edilən stringlər fərqlidir.");
//     }
// } else {
//     alert(" Zəhmət olmasa hər iki dəyəri daxil edin.");
// }


// Input ilə daxil edilən bir ədədin kvadrat kökünün tam ədəd olub olmadığını yoxlayan alqoritm yazın. (Məsələn, 25 üçün kök 5-dir (tam), 26 üçün deyil).
// const input: string | null = prompt("Bir ədəd daxil edin:");

// if (input !== null) {
//     const eded: number = Number(input);

//     if (isNaN(eded) || eded < 0) {
//         alert(" Zəhmət olmasa düzgün və müsbət bir ədəd daxil edin.");
//     } else {
//         let i = 0;
//         let tapildi = false;

//         while (i * i <= eded) {
//             if (i * i === eded) {
//                 tapildi = true;
//                 break;
//             }
//             i++;
//         }

//         if (tapildi) {
//             alert(` ${eded} tam kvadratdır, kökü: ${i}`);
//         } else {
//             alert(` ${eded} tam kvadrat deyil.`);
//         }
//     }
// } else {
//     alert(" Heç bir dəyər daxil edilmədi.");
// }



// Input ilə daxil edilən bir saatın (0-23 arası) günün hansı hissəsinə aid olduğunu (səhər, günorta, axşam, gecə) təyin edən alqoritm yazın (məsələn, 6-11 səhər, 12-17 günorta və s.).

// const input: string | null = prompt("Saatı daxil edin (0 - 23):");

// if (input !== null) {
//     const saat: number = Number(input);
//     if (isNaN(saat) || saat < 0 || saat > 23) {
//         alert(" Zəhmət olmasa 0 ilə 23 arasında bir saat daxil edin.");
//     } else if (saat >= 6 && saat <= 11) {
//         alert(" Bu saat səhər vaxtına aiddir.");
//     } else if (saat >= 12 && saat <= 17) {
//         alert(" Bu saat günorta vaxtına aiddir.");
//     } else if (saat >= 18 && saat <= 21) {
//         alert(" Bu saat axşam vaxtına aiddir.");
//     } else {
//         alert(" Bu saat gecə vaxtına aiddir.");
//     }
// } else {
//     alert(" Dəyər daxil edilmədi.");
// }















