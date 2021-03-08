class HomePage {
    get nextButton() {
        return cy.get(".bg-primary.border-primary.btn.text-white")
    }
    get paragraph() {
        return cy.get("p")
    }
    
    clickNextButton() {
        this.nextButton.click()
    }
}





export const homePage = new HomePage()