/// <reference types="cypress" />

import { TopMenu } from "../../PageObjectModel/topMenuPom";
const homepageTopBtn = new TopMenu

describe('rastmobile mainpage butonlari ve dogrulamalari', () => {


    beforeEach(() => {
        cy.log("beforeEach ile visit atıldı, çözünürlük ayarlandı")
        cy.viewport(1200,1000)
        homepageTopBtn.rastUrl()
        cy.location("hostname").should("include","rastmobile.com")
        cy.location("protocol").should("eq","https:")
    });


    it('Case 1 - dil degistirme ve dogrulama', () => {
        cy.url().should("include","en")
        homepageTopBtn.dilBtn()
        homepageTopBtn.turkceBtn()
        cy.title().should("include","Geliştirme")
        cy.url().should("include","tr")
    });
    
    it('Case 2.1 - company menusu about us butonu ve dogrulama', () => {
        homepageTopBtn.topMenu()
        homepageTopBtn.aboutusBtn()
        cy.title().should("include","About")
    });

    it('Case 2.2 - company menusu events butonu ve dogrulama', () => {
        homepageTopBtn.topMenu()
        homepageTopBtn.eventsBtn()
        cy.wait(750)
        cy.url().should("include","events")
    });


    it('Case 2.3 - company menusu catalog butonu ve dogrulama', () => {
        homepageTopBtn.topMenu()
        homepageTopBtn.catalogBtn()
        cy.url().should("include","catalog")
    });

    it('Case 2.4 - company menusu contact us butonu ve dogrulama', () => {
        homepageTopBtn.topMenu()
        homepageTopBtn.contactusBtn()
        cy.title().should("include","Contact")
        
    });

    it('Case 2.5 - company menusu career butonu ve dogrulama', () => {
        homepageTopBtn.topMenu()
        homepageTopBtn.careerBtn()
        cy.url().should("include","career")
        
    });

    it('Case 3.1 - industries menusu industries butonu ve dogrulama', () => {
        homepageTopBtn.topMenu()
        homepageTopBtn.industriesBtn()
        cy.url().should("include","industries")
    });

    it('Case 3.2 - industries menusu retail butonu ve dogrulama', () => {
        homepageTopBtn.topMenu()
        homepageTopBtn.retailBtn()
        cy.url().should("contain","retail")
    });

    it('Case 3.3 - industries menusu media butonu ve dogrulama', () => {
        homepageTopBtn.topMenu()
        homepageTopBtn.mediBtn()
        cy.title().should("include","Media")
    });

    it('Case 3.4 - industries menusu telecom butonu ve dogrulama ', () => {
        homepageTopBtn.topMenu()
        homepageTopBtn.telecomBtn()
        cy.title().should("contain","Telecom")
    });

    it('Case 3.5 - industries menusu finance butonu ve dogrulama', () => {
        homepageTopBtn.topMenu()
        homepageTopBtn.financeBtn()
        cy.url().should("contain","finance")
    });

    it('Case 3.6 - industries menusu construction butonu ve dogrulama', () => {
        homepageTopBtn.topMenu()
        homepageTopBtn.constructionsBtn()
        cy.title().should("contain","Construction")
    });

    it('Case 3.7 - industries menusu gaming butonu ve dogrulama', () => {
        homepageTopBtn.topMenu()
        homepageTopBtn.gamingBtn()
        cy.title().should("include","Gaming")
        
    });

    it('Case 4.1 - services menusu services butonu ve dogrulama', () => {
        homepageTopBtn.topMenu()
        homepageTopBtn.servicesBtn()
        cy.title().should("include","Services")
    
        
    });

    it('Case 4.2 - services menusu mobile app development butonu ve dogrulama', () => {
        homepageTopBtn.topMenu()
        homepageTopBtn.mobileappBtn()
        cy.url().should("contain","mobile")
    });

    it('Case 4.3 - services menusu web app butonu ve dogrulama', () => {
        homepageTopBtn.topMenu()
        homepageTopBtn.webappBtn()
        cy.title().should("contain","Web")
        
    });

    it('Case 4.4 - services menusu devops butonu ve dogrulama', () => {
        homepageTopBtn.topMenu()
        homepageTopBtn.devopsBtn()
        cy.url().should("contain","devops")
    });

    it('Case 4.5 - services menusu angular butonu ve dogrulama', () => {
        homepageTopBtn.topMenu()
        homepageTopBtn.angularBtn()
        cy.title().should("include","Angular")
    });

    it('Case 4.6 - services menusu flutter butonu ve dogrulama', () => {
        homepageTopBtn.topMenu()
        homepageTopBtn.flutterBtm()
        cy.url().should("include","flutter")
    });

    it('Case 4.7 - services menusu java butonu ve dogrulama', () => {
        homepageTopBtn.topMenu()
        homepageTopBtn.javaBtn()
        cy.url().should("include","java")
        
    });

    it('Case 4.8 - services menusu php butonu ve dogrulama', () => {
        homepageTopBtn.topMenu()
        homepageTopBtn.phpBtn()
        cy.url().should("include","php")
    });

    it('Case 4.9 - services menusu nodejs butonu ve dogrulama', () => {
        homepageTopBtn.topMenu()
        homepageTopBtn.nodejsBtn()
        cy.url().should("include","nodejs")
        
    });

    it('Case 5.1 - products menusu products butonu ve dogrulama', () => {
        homepageTopBtn.topMenu()
        homepageTopBtn.productsBtn()
        cy.title().should("include","Products")
        
    });

    it('Case 5.2 - products menusu ecommerce butonu ve dogrulama', () => {
        homepageTopBtn.topMenu()
        homepageTopBtn.ecpmmerceBtn()
        cy.url().should("include","ecommerce")
    })

    it('Case 5.3 - products menusu machine cost calculator butonu ve dogrulama', () => {
        homepageTopBtn.topMenu()
        homepageTopBtn.machineBtn()
        cy.url().should("include","machine")
    });

    it('Case 5.4 - products menusu appzy butonu ve dogrulama', () => {
        homepageTopBtn.topMenu()
        homepageTopBtn.appzyBtn()
        cy.url().should("include","appzy")
    });

    it('Case 5.5 - products menusu courier track app butonu ve dogrulama', () => {
        homepageTopBtn.topMenu()
        homepageTopBtn.courierBtn()
        cy.url().should("include","courier")
    });

    it('Case 5.6 - products menusu e citizien butonu ve dogrulama', () => {
        homepageTopBtn.topMenu()
        homepageTopBtn.citizenBtn()
        cy.title().should("include","Citizen")
        cy.url().should("include","citizen")
    });

    it('Case 5.7 - products menusu word pyramids butonu ve dogrulama', () => {
        homepageTopBtn.topMenu()
        homepageTopBtn.pyramidsBtn()
        cy.title().should("include","Pyramids")
        
    });
    

    it('Case 5.8 - products menusu word ninja butonu ve dogrulama', () => {
        homepageTopBtn.topMenu()
        homepageTopBtn.ninjaBtn()
        cy.title().should("include","Ninja")
    });

    it('Case 5.9 products menusu jury butonu ve dogrualama', () => {
        
        homepageTopBtn.topMenu()
        homepageTopBtn.juryBtn()
        cy.title().should("include","Jury")
        
    });

    it('Case 5.10 - products menusu technician app butonu ve dogrualama', () => {

        homepageTopBtn.topMenu()
        homepageTopBtn.technicianBtn()
        cy.title().should("include","Technician")
    });
});

