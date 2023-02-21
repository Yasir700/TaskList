let createInputPanel = () => {

    let inputPanel = document.createElement("div")
    inputPanel.className = "inputPanel"

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
        nameInput.id = "nameInput"
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
        let descInput = document.createElement("input")
        descInput.setAttribute("type", "text")
        descInput.id = "descInput"
        inputPanel.append(descInput)
        return descInput
    }

    function createSaveBtn() {
        let saveBtn = document.createElement("button")
        saveBtn.textContent = "Save task"
        inputPanel.append(saveBtn)
        return saveBtn
    }

}


createInputPanel();