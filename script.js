const commands = {
    "проверить пульс": "/g try Проверяю пульс пациента",
    "осмотреть рану": "/me Осматриваю рану на теле пациента",
    "сделать укол": "/do Делаю инъекцию обезболивающего"
    // Добавь свои команды сюда, например:
    // "дать лекарство": "/me Даю пациенту таблетку"
};

function generateCommand() {
    const action = document.getElementById("action").value.toLowerCase();
    const result = commands[action] || "Команда не найдена. Попробуй ещё!";
    document.getElementById("result").innerText = result;
}
