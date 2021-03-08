import {selectionPage} from '../page_objects/selectionPage'
import { homePage } from '../page_objects/homePage'
import { isThisHour } from 'date-fns';
import {questionsPage} from '../page_objects/questionsPage'
const data = require("../fixtures/data.json")

describe('Children mode', () => {
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
        selectionPage.fillModeSelectChild()
        selectionPage.fillGradeSelect()
        selectionPage.clickBeginButton()
    })
    it ('First reading', () => {
        cy.get("button[class='btn hover:shadow-lg active:shadow-inner bg-primary text-white border-primary hover:bg-white hover:text-primary print:hidden ']").click()        
    })
    it ('Second reading', () => {
        cy.get("button[class='btn hover:shadow-lg active:shadow-inner bg-primary text-white border-primary hover:bg-white hover:text-primary print:hidden ']").click()
    })
    
      

})