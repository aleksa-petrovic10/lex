class SelectionPage {
    get modeSelect() {
        return cy.get(":nth-child(1) > .react-select-container > .react-select__control > .react-select__value-container")
    }
    get gradeSelect() {
        return cy.get(":nth-child(2) > .react-select-container > .react-select__control > .react-select__value-container")
    }
    get opinionSelect() {
        return cy.get(":nth-child(3) > .react-select-container > .react-select__control > .react-select__value-container")
    }
    get email() {
        return cy.get("input[id='select.email']")
    }
    get beginButton() {
        return cy.get("button")
    }

    get randomWords() {
        return cy.get("button[class='btn hover:shadow-lg active:shadow-inner  p-1 text-lg bg-transparent border-transparent hover:text-gray-800']")
    }

    get startReading() {
        return cy.get(".btn > span")
    }

    get stopReading() {
        return cy.get(".py-4 > .btn")
    }

    fillModeSelect() {
        this.modeSelect.type("parent{enter}")
    }

    fillModeSelectChild() {
        this.modeSelect.type("child {enter}")
    }

    fillGradeSelect() {
        this.gradeSelect.type("6{enter}")
    }

    fillOpinionSelect() {
        this.opinionSelect.type("2{enter}")
    }
    
    fillEmail(email) {
        this.email.type(email)
    }

    clickStartReading() {
        this.startReading.click()
    }

    clickStopReading() {
        this.stopReading.click()
    }

    clickRandomWords() {
        this.randomWords.click()
    }

    clickBeginButton() {
        this.beginButton.click()
    }
}





export const selectionPage = new SelectionPage()