/// <reference types="cypress" />

describe('rastmobile alt menu butonları ve dogrulama', () => {

    beforeEach('', () => {
        cy.log("beforeEach ile visit atıldı, çözünürlük ayarlandı")
        cy.viewport(1200,1000)
        cy.visit("http://rastmobile.com") //configte baseUrl ekledik onun üzerinden "/" ile gidebiliyoruz, configte yoksa http://rastmobile.com yazılır
        cy.scrollTo("bottom") // alt menü çalışacağımızdan aşağı kaydırdık
        cy.location("hostname").should("include","rastmobile.com")
        cy.location("protocol").should("eq","https:")
    });

    it('Case 1 - Mobile App footer ', () => {
        cy.get("body > footer > div > div > div:nth-child(2) > ul > li:nth-child(1) > a")
        .click()
        cy.title().should("include","Mobile")
    });

    it('Case 2 - Web App footer', () => {
        cy.get('.row > :nth-child(2) > .nav > :nth-child(2) > .footer-link-text')
        .click()
        cy.title().should("include","Web")
    });
    
    it('Case 3 - Devops footer', () => {
        cy.get('.row > :nth-child(2) > .nav > :nth-child(3) > .footer-link-text')
        .click()
        cy.url().should("contain","devops")
    });

    it('Case 4 - Angular footer', () => {
        cy.get('.row > :nth-child(2) > .nav > :nth-child(4) > .footer-link-text')
        .click()
        cy.url().should("contain","angular")
    });

    it('Case 5 - Flutter footer', () => {
        cy.get('.row > :nth-child(2) > .nav > :nth-child(5) > .footer-link-text')
        .click()
        cy.title().should("include","Flutter")
    });

    it('Case 6 - Java footer', () => {
        cy.get('.row > :nth-child(2) > .nav > :nth-child(6) > .footer-link-text')
        .click()
        cy.url().should("include","java")
    });

    it('Case 7 - PHP footer', () => {
        cy.get('.row > :nth-child(2) > .nav > :nth-child(7) > .footer-link-text')
        .click()
        cy.url().should("include","php")
        
    });

    it('Case 8 - Nodejs footer', () => {
        cy.get('.row > :nth-child(2) > .nav > :nth-child(8) > .footer-link-text')
        .click()
        cy.url().should("contain","nodejs")
        
    });

    it('Case 9 - E commerce footer', () => {
        cy.get(':nth-child(3) > .nav > :nth-child(1) > .footer-link-text')
        .click()
        cy.url().should("include","ecommerce")
    });

    it('Case 10 - My machine worth footer', () => {
        cy.get(':nth-child(3) > .nav > :nth-child(2) > .footer-link-text')
        .click()
        cy.title().should("include","Machine")
        
    });

    it('Case 11 - appzy footer', () => {
        cy.get(':nth-child(3) > .nav > :nth-child(3) > .footer-link-text')
        .click()
        cy.title().should("include","Appzy")

    });

    it('Case 12 - Courier tracking app footer', () => {
        cy.get(':nth-child(3) > .nav > :nth-child(4) > .footer-link-text')
        .click()
        cy.url().should("include","courier")
        
    });

    it('Case 13 - E-citizien footer', () => {
        cy.get(':nth-child(3) > .nav > :nth-child(5) > .footer-link-text')
        .click()
        cy.url().should("include","citizen") //hatalı 
    });

    it('Case 14 - Word pyramids footer', () => {
        cy.get(':nth-child(3) > .nav > :nth-child(6) > .footer-link-text')
        .click()
        cy.title().should("include","Pyramids")
    });

    it('Case 15 - Word ninja footer', () => {
        cy.get(':nth-child(3) > .nav > :nth-child(7) > .footer-link-text')
        .click()
        cy.title("include","Ninja")
        
    });

    it('Case 16 - Jury footer', () => {
        cy.get(':nth-child(3) > .nav > :nth-child(8) > .footer-link-text')
        .click()
        cy.url().should("contain","jury")
    });

    it('Case 17 - Technician footer', () => {
        cy.get(':nth-child(9) > .footer-link-text')
        .click()
        cy.url().should("contain","technician")
    });

    it('Case 18 - Retail footer', () => {
        cy.get(':nth-child(4) > .nav > :nth-child(1) > .footer-link-text')
        .click()
        cy.url().should("include","retail")
    });

    it('Case 19 - Media footer', () => {
        cy.get(':nth-child(4) > .nav > :nth-child(2) > .footer-link-text')
        .click()
        cy.url().should("contain","media")
    });

    it('Case 20 - Telecom footer', () => {
        cy.get(':nth-child(4) > .nav > :nth-child(3) > .footer-link-text')
        .click()
        cy.title().should("include","Telecom")
    });

    it('Case 21 - Finance footer', () => {
        cy.get(':nth-child(4) > .nav > :nth-child(4) > .footer-link-text')
        .click()
        cy.title().should("include","Finance")
    });

    it('Case 22 - Constructions footer ', () => {
        cy.get(':nth-child(4) > .nav > :nth-child(5) > .footer-link-text')
        .click()
        cy.url().should("contain","construction")
    });

    it('Case 23 - Gaming footer', () => {
        cy.get(':nth-child(4) > .nav > :nth-child(6) > .footer-link-text')
        .click()
        cy.title().should("contain","Gaming")
    });

    it('Case 24 - Career footer', () => {
        cy.get('.d-flex > .flex-column > :nth-child(1) > .footer-link-text')
        .click()
        cy.url().should("include","career")
        
    });

    it('Case 25 - Events footer', () => {
        cy.get('.d-flex > .flex-column > :nth-child(2) > .footer-link-text')
        .click()
        cy.url().should("include","events")
        
    });

    it('Case 26 - About us footer', () => {
        cy.get('.d-flex > .flex-column > :nth-child(3) > .footer-link-text')
        .click()
        cy.url().should("contain","about")
    });
});