// Foydalanuvchidan ma'lumotlarni so'rash
let ism = prompt("Ismingizni kiriting:");
let familiya = prompt("Familiyangizni kiriting:");
let yosh = prompt("Yoshingizni kiriting:");
let fan = prompt("Qaysi fanni yaxshi ko'rasiz?");

// Ma'lumotlarni birlashtirish
let natija = `Ma'lumotlar:
Ism: ${ism}
Familiya: ${familiya}
Yosh: ${yosh}
Sevimli fan: ${fan}`;

// Natijani ekranga chiqarish
alert(natija);

// Konsolga ham chiqarish (tekshirish uchun)
console.log(natija);