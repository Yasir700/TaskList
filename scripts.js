let createInputPanel = () => {

    let inputPanel = document.createElement("div")
    inputPanel.className = "input-panel"

    let nameInputLabel = createNameInputLabel()
    let nameInput = createNameInput()
    let descInputLabel = createDescInputLabel()
    let descInput = createDescInput()
    let saveBtn = createSaveBtn()

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
    let showPanel = document.createElement("div")
    showPanel.className = "show-panel"
    document.body.append(showPanel)
}

createShowPanel();
createInputPanel();