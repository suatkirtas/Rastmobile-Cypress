export class TopMenu {
        rastUrl() {

            cy.visit('https://rastmobile.com')

        }

        dilBtn(){
            cy.get("#dropdownMenuButton1 > li:nth-child(2) > a > img").click()
        }

        turkceBtn(){
            cy.get("#change-lang > li:nth-child(1) > a > img").click()
        }

        topMenu(){
            cy.get("#megaMenu").click()
        }

        aboutusBtn(){
            cy.get("#navbarNav > ul > li:nth-child(1) > div > div > div.col-md-6.col-xl-3.col-sm-12.mt-3.py-sm-6 > a:nth-child(2) > div > div.col-xl-8.col-md-8.col-8 > p").click()
        }

        eventsBtn(){
            cy.get("#navbarNav > ul > li:nth-child(1) > div > div > div.col-md-6.col-xl-3.col-sm-12.mt-3.py-sm-6 > a:nth-child(3) > div > div.col-xl-8.col-md-8.col-8 > p").click()
        }

        catalogBtn(){
            cy.get("#navbarNav > ul > li:nth-child(1) > div > div > div.col-md-6.col-xl-3.col-sm-12.mt-3.py-sm-6 > a:nth-child(4) > div > div.col-xl-8.col-md-8.col-8 > p").click()
        }
        
        contactusBtn(){
            cy.get("#navbarNav > ul > li:nth-child(1) > div > div > div.col-md-6.col-xl-3.col-sm-12.mt-3.py-sm-6 > a:nth-child(5) > div > div.col-xl-8.col-md-8.col-8 > p").click()
        }

        careerBtn(){
            cy.get("#navbarNav > ul > li:nth-child(1) > div > div > div.col-md-6.col-xl-3.col-sm-12.mt-3.py-sm-6 > a:nth-child(6) > div > div.col-xl-8.col-md-8.col-8 > p").click()
        }

        industriesBtn(){
            cy.get(':nth-child(2) > .fs-6 > .row > .col-xl-8 > .mb-0').click()
        }

        retailBtn(){
            cy.get('[href=" /en/industries/retail-distribution"] > .row > .col-xl-8 > .mb-0').click()
        }

        mediBtn(){
            cy.get(':nth-child(1) > .dropdown-menu > :nth-child(1) > :nth-child(2) > [href="/en/industries/media-entertainment"]').click()
        }

        telecomBtn(){
            cy.get('[href="/en/industries/telecom"] > .row > .col-xl-8').click()
        }

        financeBtn(){
            cy.get('[href="/en/industries/finance"] > .row > .col-xl-8').click()
        }

        constructionsBtn(){
            cy.get('[href="/en/industries/construction"] > .row > .col-xl-8').click()
        }

        gamingBtn(){
            cy.get('[href="/en/industries/gaming"] > .row > .col-xl-8').click()
        }

        servicesBtn(){
            cy.get(':nth-child(1) > .dropdown-menu > :nth-child(1) > :nth-child(3) > .fs-6 > .row').click()
        }

        mobileappBtn(){
            cy.get('[href="/en/services/mobile-app"] > .row > .col-xl-8 > .mb-0').click()
        }

        webappBtn(){
            cy.get('[href="/en/services/web-app"] > .row > .col-xl-8 > .mb-0').click()
        }

        devopsBtn(){
            cy.get('[href="/en/services/devops"] > .row > .col-xl-8 > .mb-0').click()
        }

        flutterBtm(){
            cy.get('[href="/en/services/flutter"] > .row > .col-xl-8 > .mb-0').click()
        }

        javaBtn(){
            cy.get('[href="/en/services/java"] > .row > .col-xl-8 > .mb-0').click()
        }

        phpBtn(){
            cy.get('[href="/en/services/php"] > .row > .col-xl-8 > .mb-0').click()
        }
        
        nodejsBtn(){
            cy.get('[href="/en/services/nodejs"] > .row > .col-xl-8 > .mb-0').click()
        }

        productsBtn(){
            cy.get(':nth-child(4) > .fs-6 > .row > .col-xl-8 > .mb-0').click()
        }

        ecpmmerceBtn(){
            cy.get('[href="/en/products/ecommerce-products"] > .row > .col-xl-8 > .mb-0').click()
        }

        machineBtn(){
            cy.get('[href="/en/products/machine-cost-calculator"] > .row > .col-xl-8').click()
        }

        appzyBtn(){
            cy.get('[href="/en/products/appzy"] > .row > .col-xl-8').click()
        }

        courierBtn(){
            cy.get('[href="/en/products/courier-tracking-application"] > .row > .col-xl-8').click()
        }

        citizenBtn(){
            cy.get('[href="/en/products/e-ciziten-mobile-app"] > .row > .col-xl-8').click()
        }

        pyramidsBtn(){
            cy.get('[href="/en/products/word-pyramids"] > .row > .col-xl-8').click()
        }

        ninjaBtn(){
            cy.get('[href="/en/products/word-ninja"] > .row > .col-xl-8').click()
        }

        juryBtn(){
            cy.get('[href="/en/products/jury-competition-software"] > .row > .col-xl-8 > .mb-0').click()
        }
        
        technicianBtn(){
            cy.get('[href="/en/products/technician-application"] > .row > .col-xl-8 > .mb-0').click()
        }

        angularBtn(){
            cy.get('[href="/en/services/angular"] > .row > .col-xl-8 > .mb-0').click()
        }

        ecommerceBtn(){
            cy.get('[href="/en/products/ecommerce-products"] > .row > .col-xl-8 > .mb-0').click()
        }
        

}