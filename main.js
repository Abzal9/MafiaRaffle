document.querySelector(".action").onclick = function(){
    if (document.querySelector(".action").innerHTML == "Подтвердить") {
        // Добавить логику подтверждения (если нужно)
    }
    else if (document.querySelector(".button-action").innerHTML == "Вернуться назад"){
        hand()
    }
    else {
        auto();
    }
}

document.querySelector(".button-help").onclick = function(){
    if (document.querySelector(".button-help").innerHTML == "Обновить") {
        document.querySelector(".help-pannel-roles").innerHTML = "";
        a = "";
    }
    function_hiden_3();
}

document.querySelector(".dropdown-menu").onclick = function() {
    document.querySelector("#help-role-pole").innerHTML = event.target.innerHTML;
}

document.querySelector(".button-plus-user").onclick = function() {
    let role = document.querySelector("#help-role-pole").innerHTML;
    let name = document.querySelector("#help-name-pole").value;
    if (name && role) {
        document.querySelector(".help-pannel-roles").innerHTML += name + "  -  " + role + "<br>";
    }
}

// Функция для скрытия и отображения панели помощи
function function_hiden_3() {
    let helpPanel = document.querySelector(".help-pannel");
    helpPanel.classList.toggle("hiden");
    if (!helpPanel.classList.contains("hiden")) {
        document.querySelector(".button-help").innerHTML = "Обновить";
    } else {
        document.querySelector(".button-help").innerHTML = "Помощник Ведущему";
    }
}

// Функция для раздачи ролей автоматически
function auto() {
    let mafia = document.querySelector(".mafia").value;
    let people = document.querySelector(".people").value;
    let manjak = document.querySelector(".manjak").checked;
    let doctor = document.querySelector(".doctor").checked;
    let sherif = document.querySelector(".sherif").checked;
    let babochka = document.querySelector(".babochka").checked;
    let komisar = document.querySelector(".komisar").checked;
    let jakudza = document.querySelector(".jakudza").checked;

    let roles = [];
    // Добавляем мафию
    for (let i = 0; i < mafia; i++) {
        roles.push("Мафия");
    }
    // Добавляем мирных жителей
    for (let i = 0; i < people; i++) {
        roles.push("Мирный житель");
    }
    // Добавляем другие роли, если они выбраны
    if (manjak) roles.push("Маньяк");
    if (doctor) roles.push("Доктор");
    if (sherif) roles.push("Шериф");
    if (babochka) roles.push("Бабочка");
    if (komisar) roles.push("Комиссар");
    if (jakudza) roles.push("Якудза");

    // Перемешиваем роли
    roles = shuffle(roles);

    // Выводим распределение ролей
    document.querySelector(".auto-p").innerHTML = "Роли: " + roles.join(", ");
}

// Функция для перемешивания массива
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap
    }
    return array;
}

// Функция для ручной настройки (пока placeholder)
function hand() {
    let mafia = document.querySelector(".mafia").value;
    let people = document.querySelector(".people").value;
    let manjak = document.querySelector(".manjak").checked;
    let doctor = document.querySelector(".doctor").checked;
    let sherif = document.querySelector(".sherif").checked;
    let babochka = document.querySelector(".babochka").checked;
    let komisar = document.querySelector(".komisar").checked;
    let jakudza = document.querySelector(".jakudza").checked;
    document.querySelector(".auto-p").innerHTML="";
    console.log("Маньяк: " + manjak);
    console.log("Мирные жители: " , people);
    console.log("Мафия " + mafia);
    console.log("Доктор: " + doctor);
    let roles = [];
    while (roles.length != mafia) {
        roles.push("Мафия");
    }
    for (let schetchik_new_2 = 0; schetchik_new_2 < people; schetchik_new_2++) {
        roles.push("Мирный житель");
    }
    // Добавить логику для других ролей
    if (manjak) roles.push("Маньяк");
    if (doctor) roles.push("Доктор");
    if (sherif) roles.push("Шериф");
    if (babochka) roles.push("Бабочка");
    if (komisar) roles.push("Комиссар");
    if (jakudza) roles.push("Якудза");

    console.log(roles);
}
