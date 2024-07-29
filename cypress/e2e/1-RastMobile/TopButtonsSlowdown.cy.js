import { slowCypressDown } from "cypress-slow-down";

/// <reference types="cypress" />

slowCypressDown(250)
describe('rastmobile mainpage butonlari ve dogrulamalari', () => {


    beforeEach(() => {
        cy.log("beforeEach ile visit atıldı, çözünürlük ayarlandı")
        cy.viewport(1200,1000)
        cy.visit("/") //configte baseUrl ekledik onun üzerinden "/""" ile gidebiliyoruz, configte yok http://rastmobile.com yazılır
        cy.location("hostname").should("include","rastmobile.com")
        cy.location("protocol").should("eq","https:")
    });


    it('Case 1 - dil degistirme ve dogrulama', () => {
        cy.url().should("include","en")
        cy.get("#dropdownMenuButton1 > li:nth-child(2) > a > img")
        .click()
        
        cy.get("#change-lang > li:nth-child(1) > a > img")
        .click()
        cy.title().should("include","Geliştirme")
        cy.url().should("include","tr")
    });
    
    it('Case 2.1 - company menusu about us butonu ve dogrulama', () => {
        cy.get("#megaMenu")
        .click()
        cy.get("#navbarNav > ul > li:nth-child(1) > div > div > div.col-md-6.col-xl-3.col-sm-12.mt-3.py-sm-6 > a:nth-child(2) > div > div.col-xl-8.col-md-8.col-8 > p")
        .click()
        cy.title().should("include","About")
    });

    it('Case 2.2 - company menusu events butonu ve dogrulama', () => {
        cy.get("#megaMenu")
        .click()
        cy.get("#navbarNav > ul > li:nth-child(1) > div > div > div.col-md-6.col-xl-3.col-sm-12.mt-3.py-sm-6 > a:nth-child(3) > div > div.col-xl-8.col-md-8.col-8 > p")
        .click()
        cy.wait(750)
        cy.url().should("include","events")
    });


    it('Case 2.3 - company menusu catalog butonu ve dogrulama', () => {
        cy.get("#megaMenu")
        .click()
        cy.get("#navbarNav > ul > li:nth-child(1) > div > div > div.col-md-6.col-xl-3.col-sm-12.mt-3.py-sm-6 > a:nth-child(4) > div > div.col-xl-8.col-md-8.col-8 > p")
        .click()
        cy.url().should("include","catalog")
    });

    it('Case 2.4 - company menusu contact us butonu ve dogrulama', () => {
        cy.get("#megaMenu")
        .click()
        cy.get("#navbarNav > ul > li:nth-child(1) > div > div > div.col-md-6.col-xl-3.col-sm-12.mt-3.py-sm-6 > a:nth-child(5) > div > div.col-xl-8.col-md-8.col-8 > p")
        .click()
        cy.title().should("include","Contact")
        
    });

    it('Case 2.5 - company menusu career butonu ve dogrulama', () => {
        cy.get("#megaMenu")
        .click()
        cy.get("#navbarNav > ul > li:nth-child(1) > div > div > div.col-md-6.col-xl-3.col-sm-12.mt-3.py-sm-6 > a:nth-child(6) > div > div.col-xl-8.col-md-8.col-8 > p")
        .click()
        cy.url().should("include","career")
        
    });

    it('Case 3.1 - industries menusu industries butonu ve dogrulama', () => {
        cy.get("#megaMenu")
        .click()
        cy.get(':nth-child(2) > .fs-6 > .row > .col-xl-8 > .mb-0')
        .click()
        cy.url().should("include","industries")
    });

    it('Case 3.2 - industries menusu retail butonu ve dogrulama', () => {
        cy.get("#megaMenu")
        .click()
        cy.get('[href=" /en/industries/retail-distribution"] > .row > .col-xl-8 > .mb-0')
        .click()
        cy.url().should("contain","retail")
    });

    it('Case 3.3 - industries menusu media butonu ve dogrulama', () => {
        cy.get("#megaMenu")
        .click()
        cy.get(':nth-child(1) > .dropdown-menu > :nth-child(1) > :nth-child(2) > [href="/en/industries/media-entertainment"]')        .click()
        cy.title().should("include","Media")
    });

    it('Case 3.4 - industries menusu telecom butonu ve dogrulama ', () => {
        cy.get("#megaMenu")
        .click()
        cy.get('[href="/en/industries/telecom"] > .row > .col-xl-8')
        .click()
        cy.title().should("contain","Telecom")
    });

    it('Case 3.5 - industries menusu finance butonu ve dogrulama', () => {
        cy.get("#megaMenu")
        .click()
        cy.get('[href="/en/industries/finance"] > .row > .col-xl-8')
        .click()
        cy.url().should("contain","finance")
    });

    it('Case 3.6 - industries menusu construction butonu ve dogrulama', () => {
        cy.get("#megaMenu")
        .click()
        cy.get('[href="/en/industries/construction"] > .row > .col-xl-8')
        .click()
        cy.title().should("contain","Construction")
    });

    it('Case 3.7 - industries menusu gaming butonu ve dogrulama', () => {
        cy.get("#megaMenu")
        .click()
        cy.get('[href="/en/industries/gaming"] > .row > .col-xl-8')
        .click()
        cy.title().should("include","Gaming")
        
    });

    it('Case 4.1 - services menusu services butonu ve dogrulama', () => {
        cy.get("#megaMenu")
        .click()
        cy.get(':nth-child(1) > .dropdown-menu > :nth-child(1) > :nth-child(3) > .fs-6 > .row')
        .click()
        cy.title().should("include","Services")
    
        
    });

    it('Case 4.2 - services menusu mobile app development butonu ve dogrulama', () => {
        cy.get("#megaMenu")
        .click()
        cy.get('[href="/en/services/mobile-app"] > .row > .col-xl-8 > .mb-0')
        .click()
        cy.url().should("contain","mobile")
    });

    it('Case 4.3 - services menusu web app butonu ve dogrulama', () => {
        cy.get("#megaMenu")
        .click()
        cy.get('[href="/en/services/web-app"] > .row > .col-xl-8 > .mb-0')
        .click()
        cy.title().should("contain","Web")
        
    });

    it('Case 4.4 - services menusu devops butonu ve dogrulama', () => {
        cy.get("#megaMenu")
        .click()
        cy.get('[href="/en/services/devops"] > .row > .col-xl-8 > .mb-0')
        .click()
        cy.url().should("contain","devops")
    });

    it('Case 4.5 - services menusu angular butonu ve dogrulama', () => {
        cy.get("#megaMenu")
        .click()
        cy.get('[href="/en/services/angular"] > .row > .col-xl-8 > .mb-0')
        .click()
        cy.title().should("include","Angular")
    });

    it('Case 4.6 - services menusu flutter butonu ve dogrulama', () => {
        cy.get("#megaMenu")
        .click()
        cy.get('[href="/en/services/flutter"] > .row > .col-xl-8 > .mb-0')
        .click()
        cy.url().should("include","flutter")
    });

    it('Case 4.7 - services menusu java butonu ve dogrulama', () => {
        cy.get("#megaMenu")
        .click()
        cy.get('[href="/en/services/java"] > .row > .col-xl-8 > .mb-0')
        .click()
        cy.url().should("include","java")
        
    });

    it('Case 4.8 - services menusu php butonu ve dogrulama', () => {
        cy.get("#megaMenu")
        .click()
        cy.get('[href="/en/services/php"] > .row > .col-xl-8 > .mb-0')
        .click()
        cy.url().should("include","php")
    });

    it('Case 4.9 - services menusu nodejs butonu ve dogrulama', () => {
        cy.get("#megaMenu")
        .click()
        cy.get('[href="/en/services/nodejs"] > .row > .col-xl-8 > .mb-0')
        .click()
        cy.url().should("include","nodejs")
        
    });

    it('Case 5.1 - products menusu products butonu ve dogrulama', () => {
        cy.get("#megaMenu")
        .click()
        cy.get(':nth-child(4) > .fs-6 > .row > .col-xl-8 > .mb-0')
        .click()
        cy.title().should("include","Products")
        
    });

    it('Case 5.2 - products menusu ecommerce butonu ve dogrulama', () => {
        cy.get("#megaMenu")
        .click()
        cy.get('[href="/en/products/ecommerce-products"] > .row > .col-xl-8 > .mb-0')
        .click()
        cy.url().should("include","ecommerce")
    })

    it('Case 5.3 - products menusu machine cost calculator butonu ve dogrulama', () => {
        cy.get("#megaMenu")
        .click()
        cy.get('[href="/en/products/machine-cost-calculator"] > .row > .col-xl-8')
        .click()
        cy.url().should("include","machine")
    });

    it('Case 5.4 - products menusu appzy butonu ve dogrulama', () => {
        cy.get("#megaMenu")
        .click()
        cy.get('[href="/en/products/appzy"] > .row > .col-xl-8')
        .click()
        cy.url().should("include","appzy")
    });

    it('Case 5.5 - products menusu courier track app butonu ve dogrulama', () => {
        cy.get("#megaMenu")
        .click()
        cy.get('[href="/en/products/courier-tracking-application"] > .row > .col-xl-8')
        .click()
        cy.url().should("include","courier")
    });

    it('Case 5.6 - products menusu e citizien butonu ve dogrulama', () => {
        cy.get("#megaMenu")
        .click()
        cy.get('[href="/en/products/e-ciziten-mobile-app"] > .row > .col-xl-8')
        .click()
        cy.title().should("include","Citizen")
        cy.url().should("include","citizen")
    });

    it('Case 5.7 - products menusu word pyramids butonu ve dogrulama', () => {
        cy.get("#megaMenu")
        .click()
        cy.get('[href="/en/products/word-pyramids"] > .row > .col-xl-8')
        .click()
        cy.title().should("include","Pyramids")
        
    });
    

    it('Case 5.8 - products menusu word ninja butonu ve dogrulama', () => {
        cy.get("#megaMenu")
        .click()
        cy.get('[href="/en/products/word-ninja"] > .row > .col-xl-8')
        .click()
        cy.title().should("include","Ninja")
    });

    it('Case 5.9 products menusu jury butonu ve dogrualama', () => {
        
        cy.get("#megaMenu")
        .click()
        cy.get('[href="/en/products/jury-competition-software"] > .row > .col-xl-8 > .mb-0')
        .click()
        cy.title().should("include","Jury")
        
    });

    it('Case 5.10 - products menusu technician app butonu ve dogrualama', () => {

        cy.get("#megaMenu")
        .click()
        cy.get('[href="/en/products/technician-application"] > .row > .col-xl-8 > .mb-0')
        .click()
        cy.title().should("include","Technician")
    });
});

