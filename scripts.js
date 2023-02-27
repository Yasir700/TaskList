let createInputPanel = () => {

    var inputPanel = document.createElement("div")
    inputPanel.className = "input-panel"

    let nameInputLabel = createNameInputLabel()
    let nameInput = createNameInput()
    let descInputLabel = createDescInputLabel()
    let descInput = createDescInput()
    let saveBtn = createSaveBtn()

    saveBtn.addEventListener("click", () => {
        let name = document.querySelector("#name-input").value
        let desc = document.querySelector("#desc-input").value

        if ((name == "" || desc == "")) {
            showWarning("Can't be empty field")
            return;
        }


        createTaskElement(id, name, desc)

        document.querySelector("#name-input").value = ""
        document.querySelector("#desc-input").value = ""
    })

    document.body.append(inputPanel)

    function createNameInputLabel() {
        let nameInputLabel = document.createElement("label")
        nameInputLabel.textContent = "Name of Task:"
        nameInputLabel.setAttribute("for", "nameInput")
        inputPanel.append(nameInputLabel)
        return nameInputLabel
    }

    function createNameInput() {
        let nameInput = document.createElement("input")
        nameInput.setAttribute("type", "text")
        nameInput.id = "name-input"
        inputPanel.append(nameInput)
        return nameInput
    }

    function createDescInputLabel() {
        let descInputLabel = document.createElement("label")
        descInputLabel.textContent = "Description:"
        descInputLabel.setAttribute("for", "descInput")
        inputPanel.append(descInputLabel)
        return descInputLabel
    }

    function createDescInput() {
        let descInput = document.createElement("textarea")
        descInput.setAttribute("type", "text")
        descInput.id = "desc-input"
        inputPanel.append(descInput)
        return descInput
    }

    function createSaveBtn() {
        let saveBtn = document.createElement("button")
        saveBtn.textContent = "Save task"
        saveBtn.className = "save-btn"
        inputPanel.append(saveBtn)
        return saveBtn
    }
}

let createShowPanel = () => {
    showPanel = document.createElement("div")
    showPanel.className = "show-panel"
    document.body.append(showPanel)
}

let id = 0
let createTaskElement = (id, name, desc) => {

    if (taskElements.length >= 6) {
        showWarning("You can't add any more task.")
        return
    }

    let taskElement = document.createElement("div")
    taskElement.className = "task-element-" + id + " task-element" + " task-undone"
    showPanel.append(taskElement)

    let nameDiv = document.createElement("div")
    nameDiv.className = "task-name-" + id + " task-name"
    nameDiv.textContent = name
    taskElement.append(nameDiv)

    let descDiv = document.createElement("div")
    descDiv.className = "task-desc-" + id + " task-desc"
    descDiv.textContent = desc
    taskElement.append(descDiv)

    let buttonDiv = document.createElement("div")
    buttonDiv.className = "task-buttons-" + id + " task-buttons"
    taskElement.append(buttonDiv)

    let doneBtn = document.createElement("button")
    doneBtn.classList.add("done-button")
    doneBtn.addEventListener("click", () => {
        if (taskElement.classList.contains("task-done")) {
            doneBtn.textContent = "done"
            taskElement.classList.remove("task-done")
            taskElement.classList.add("task-undone")
            removeBtn.disabled = true
        } else {
            doneBtn.textContent = "undone"
            taskElement.classList.add("task-done")
            taskElement.classList.remove("task-undone")
            removeBtn.disabled = false
        }
    })
    doneBtn.textContent = "done"
    buttonDiv.append(doneBtn)

    let removeBtn = document.createElement("button")
    removeBtn.classList.add("remove-button")
    removeBtn.addEventListener("click", () => {
        taskElements.splice(taskElements.indexOf(taskElement), 1)
        taskElement.remove()
    })
    removeBtn.textContent = "remove"
    removeBtn.disabled = true
    buttonDiv.append(removeBtn)


    id++
    taskElements.push(taskElement)
}

let createWarningField = () => {
    warningTxt = document.createElement("div")
    warningTxt.className = "warning-field"
    document.body.append(warningTxt)
}

let warningInterval = 3000
let warningIsActive
let showWarning = (message) => {
    if (!warningIsActive) {
        warningIsActive = true
        warningTxt.textContent = message
        setInterval(closeWarning, warningInterval)
    }
}
let closeWarning = () => {
    warningTxt.textContent = ""
    warningIsActive = false
    clearInterval(1)
}


let showPanel
let inputPanel
let warningTxt
let taskElements = []

createShowPanel();
createWarningField()
createInputPanel();