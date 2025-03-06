const commands = {
    "g try": [
        "/g try Проверяю температуру пациента",
        "/g try Слушаю дыхание через стетоскоп",
        "/g try Измеряю давление крови",
        "/g try Проверяю реакцию зрачков на свет",
        "/g try Пытаюсь найти признаки инфекции"
    ],
    "g do": [
        "/do Проверяю пульс пациента",
        "/do Накладываю повязку на рану",
        "/do Делаю инъекцию антибиотика",
        "/do Устанавливаю капельницу с физраствором",
        "/do Промываю рану антисептиком"
    ],
    "me": [
        "/me Осматриваю пациента на наличие травм",
        "/me Протираю инструменты спиртом",
        "/me Пишу отчёт о состоянии пациента",
        "/me Надеваю перчатки перед процедурой",
        "/me Успокаиваю пациента перед осмотром"
    ]
};

function selectCommandType(type) {
    // Скрываем основные кнопки
    const mainButtons = document.getElementById("mainButtons");
    mainButtons.classList.remove("show");
    mainButtons.style.opacity = "0";
    setTimeout(() => {
        mainButtons.style.display = "none";

        // Показываем новые кнопки
        const subButtons = document.getElementById("subButtons");
        subButtons.innerHTML = ""; // Очищаем предыдущие кнопки
        commands[type].forEach(cmd => {
            const button = document.createElement("button");
            button.textContent = cmd;
            button.onclick = () => copyToClipboard(cmd);
            subButtons.appendChild(button);
        });
        subButtons.style.display = "block";
        setTimeout(() => subButtons.classList.add("show"), 10); // Плавное появление
    }, 300); // Задержка для исчезновения
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        const result = document.getElementById("result");
        result.innerText = "Команда скопирована: " + text;
        // Скрываем новые кнопки и показываем основные
        const subButtons = document.getElementById("subButtons");
        subButtons.classList.remove("show");
        subButtons.style.opacity = "0";
        setTimeout(() => {
            subButtons.style.display = "none";
            const mainButtons = document.getElementById("mainButtons");
            mainButtons.style.display = "block";
            setTimeout(() => mainButtons.classList.add("show"), 10); // Плавное появление
        }, 500);
    }).catch(err => {
        console.error("Ошибка копирования: ", err);
    });
}
