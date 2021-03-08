class QuestionsPage {
    get firstQuestion() {
        return cy.get(":nth-child(1) > .space-y-1 > .react-select-container > .react-select__control > .react-select__value-container")
    }
    get secondQuestion() {
        return cy.get(":nth-child(2) > .space-y-1 > .react-select-container > .react-select__control > .react-select__value-container")
    }
    get thirdQuestion() {
        return cy.get(":nth-child(3) > .space-y-1 > .react-select-container > .react-select__control > .react-select__value-container")
    }
    get fourthQuestion() {
        return cy.get(":nth-child(4) > .space-y-1 > .react-select-container > .react-select__control > .react-select__value-container")
    }
    get submitButton() {
        return cy.get("button")
    }
    get h1() {
        return cy.get("div[class='space-y-2']")
    }
    
    clickFirstQuestion() {
        this.firstQuestion.type(`${Math.floor(Math.random() * 2)}{enter}`)
    }
    clickSecondQuestion() {
        this.secondQuestion.type(`${Math.floor(Math.random() * 2)}{enter}`)
    }
    clickThirdQuestion() {
        this.thirdQuestion.type(`${Math.floor(Math.random() * 2)}{enter}`)
    }
    clickFourthQuestion() {
        this.fourthQuestion.type(`${Math.floor(Math.random() * 2)}{enter}`)
    }
    clickSubmitButton() {
        this.submitButton.click()
    }
}

export const questionsPage = new QuestionsPage()