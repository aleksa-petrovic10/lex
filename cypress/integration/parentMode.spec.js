import {selectionPage} from '../page_objects/selectionPage'
import { homePage } from '../page_objects/homePage'
import { isThisHour } from 'date-fns';
import {questionsPage} from '../page_objects/questionsPage'
const data = require("../fixtures/data.json")

describe('Parent mode', () => {
    before(() => {
        cy.visit('/') 
    })

    it ('Check paragraph first page', () => {
        homePage.paragraph.should('contain', data.homePage.paragraphPageOne)
        homePage.clickNextButton()
    })
    it ('Check paragraph second page', () => {
        homePage.paragraph.should('contain', data.homePage.paragraphPageTwo)
        homePage.clickNextButton()
    })
    it ('Check paragraph third page', () => {
        homePage.paragraph.should('contain', data.homePage.paragraphPageThree)
        homePage.clickNextButton()
    })
    it ('Check paragraph fourth page', () => {
        homePage.paragraph.should('contain', data.homePage.paragraphPageFour)
        homePage.clickNextButton()
    })
    it ('Check paragraph fifth page', () => {
        homePage.paragraph.should('contain', data.homePage.paragraphPageFive)
        homePage.clickNextButton()
    })
    it ('Select options', () => {
        selectionPage.fillModeSelect()
        selectionPage.fillGradeSelect()
        selectionPage.fillOpinionSelect()
        selectionPage.fillEmail(data.selectPage.email)
        selectionPage.clickBeginButton()
    })

    it ('Select words', () => {
        for (let i = 0; i < 5; i++) {    
            selectionPage.randomWords.eq(Math.floor(Math.random() * 20)).click()
        }
    })
    it ('First reading', () => {
        selectionPage.clickStartReading()
        cy.wait(3000)
        selectionPage.clickStopReading()
    })
    it ('Second reading', () => {
        selectionPage.clickStartReading()
        cy.wait(3000)
        selectionPage.clickStopReading()
    })
    it ('Questions', () => {
        questionsPage.clickFirstQuestion()
        questionsPage.clickSecondQuestion()
        questionsPage.clickThirdQuestion()
        questionsPage.clickFourthQuestion()
        questionsPage.clickSubmitButton()
        questionsPage.h1.should('contain', data.completePage.h1)
    })
      

})