/// <reference types="Cypress" />
/// <reference types="Cypress-iframe" />
/// <reference types="Cypress-xpath" />
import 'cypress-iframe'

import WUR2022 from "../../../../support/PageObjects/WUR2022";

import { Given,When,Then, And } from "cypress-cucumber-preprocessor/steps";

const wur2020 =new WUR2022()

Given('Launch the url',()=>
{
 cy.visit(Cypress.env('Baseurl')+Cypress.env('TU'))
 //cy.visit(Cypress.env("TM"))
})
And('validate rank',function()
{ /*
   cy.get(":nth-child(1) > .col-lg-12 > ._qs-ranking-data-row > .row > .col-lg-5 > .university-rank-row > .td-wrap > .uni-link").then(function(name1)
   {
  cy.get(':nth-child(1) > .col-lg-12 > ._qs-ranking-data-row > .row > .col-lg-1 > .hide-this-in-mobile-indi').then(function(rank1)
  {
   cy.get(':nth-child(1) > .col-lg-12 > ._qs-ranking-data-row > .row > .col-lg-2 > .hide-this-in-mobile-indi').then(function(score1)
   {
      cy.get(':nth-child(3) > .col-lg-12 > ._qs-ranking-data-row > .row > .col-lg-5 > .university-rank-row > .td-wrap > .uni-link').then(function(name3)
      {
      cy.get(':nth-child(3) > .col-lg-12 > ._qs-ranking-data-row > .row > .col-lg-2 > .hide-this-in-mobile-indi').then(function(score3)
      {
         cy.get(':nth-child(3) > .col-lg-12 > ._qs-ranking-data-row > .row > .col-lg-1 > .hide-this-in-mobile-indi').then(function(rank3)
      {
         cy.get(':nth-child(4) > .col-lg-12 > ._qs-ranking-data-row > .row > .col-lg-5 > .university-rank-row > .td-wrap > .uni-link').then(function(name4)
      {
         cy.get(':nth-child(4) > .col-lg-12 > ._qs-ranking-data-row > .row > .col-lg-2 > .hide-this-in-mobile-indi').then(function(score4)
      {
         cy.get(':nth-child(4) > .col-lg-12 > ._qs-ranking-data-row > .row > .col-lg-1 > .hide-this-in-mobile-indi').then(function(rank4)
         {
            cy.get(':nth-child(5) > .col-lg-12 > ._qs-ranking-data-row > .row > .col-lg-5 > .university-rank-row > .td-wrap > .uni-link').then(function(name5)
            {
               cy.get(':nth-child(5) > .col-lg-12 > ._qs-ranking-data-row > .row > .col-lg-2 > .hide-this-in-mobile-indi').then(function(score5)
            {
               cy.get(':nth-child(5) > .col-lg-12 > ._qs-ranking-data-row > .row > .col-lg-1 > .hide-this-in-mobile-indi').then(function(rank5)
               {
  const name11=name1.text()          
  const rank11=rank1.text()
  const score11=score1.text()
  const name33=name3.text()
  const rank33=rank3.text()
  const score33=score3.text()
  const name44=name4.text()
  const rank44=rank4.text()
  const score44=score4.text()
  const name55=name5.text()
  const rank55=rank5.text()
  const score55=score5.text()
   const colg =
   [
      {universityname:name11,score:score11,rank:rank11},
      {universityname:name33,score:score33,rank:rank33},
      {universityname:name44,score:score44,rank:rank44},
      {universityname:name55,score:score55,rank:rank55}

   ]
   // colg.forEach((col)=>{
   //    cy.log(col.rank,col.score,col.universityname,"printing")
      for (let i = 0; i < colg.length; i++) {
        
         for (let k = i + 1; k < colg.length; k++) {
            
             if (colg[i].score == colg[k].score) {
               if (colg[i].rank == colg[k].rank) {
                 cy.log(colg[i].rank,colg[i].score,colg[i].universityname)
                 cy.log(colg[k].rank,colg[k].score,colg[k].universityname)

               }
             }
         }
     }
  // })
   
})})})})})})})})})})})})
************************************************************************************************************************

cy.get(":nth-child(n) > .col-lg-12 > ._qs-ranking-data-row > .row > .col-lg-5 > .university-rank-row > .td-wrap > .uni-link").each(($a, index, $list) => 
{
cy.get(':nth-child(n) > .col-lg-12 > ._qs-ranking-data-row > .row > .col-lg-1 > .hide-this-in-mobile-indi').each(($q, index, $list) => 
{
 cy.get(':nth-child(n) > .col-lg-12 > ._qs-ranking-data-row > .row > .col-lg-2 > .hide-this-in-mobile-indi').each(($el, index, $list) => 
 {
    cy.get(':nth-child(3) > .col-lg-12 > ._qs-ranking-data-row > .row > .col-lg-2 > .hide-this-in-mobile-indi').then(function(score3)
    {
       cy.get(':nth-child(3) > .col-lg-12 > ._qs-ranking-data-row > .row > .col-lg-1 > .hide-this-in-mobile-indi').then(function(rank3)
    {
       cy.get(':nth-child(5) > .col-lg-12 > ._qs-ranking-data-row > .row > .col-lg-2 > .hide-this-in-mobile-indi').then(function(score4)
    {
       cy.get(':nth-child(5) > .col-lg-12 > ._qs-ranking-data-row > .row > .col-lg-1 > .hide-this-in-mobile-indi').then(function(rank4)
       {
        const scoree=  $el.text();
        const namee=  $a.text();
         const rankk= $q.text()
 /*      
 const name11=name.text()
const rank11=rank.text()
const score11=score.text()

const rank33=rank3.text()
const score33=score3.text()
const rank44=rank4.text()
const score44=score4.text()

 const colg =
 [
    {universityname:namee,score:scoree,rank:rankk}
    /*,
    {universityname:'',score:score33,rank:rank33},
    {universityname:'',score:score44,rank:rank44},
    {universityname:'',score:'',rank:''}

 ]
  colg.forEach((col)=>{
    cy.log(col.rank,col.score,"printing")
    for (let i = 0; i < colg.length; i++) {
      
       for (let k = i + 1; k < colg.length; k++) {
          
           if (colg[i].score == colg[k].score) {
               cy.log(colg[i].rank,colg[i].score,colg[i].universityname)
               cy.log(colg[k].rank,colg[k].score,colg[k].universityname)
             
           }
       }
   }
 })
 
})})})})})})})

   
   /*
        wur2020.getTopScore().then(function(element)
       {
        
            wur2020.getOverAllScore().each(($el, index, $list) => {
           const amount=element.text()
           var res= amount.split(" ")
          var score= res[1].trim()
        
        const amountt=$el.text()
        var res= amountt.split(" ")
        res= res[1].trim()
        expect(Number(score)).to.greaterThan(Number(res))
        
       })
       wur2020.getFirstRank().should("have.text","1")
       
      wur2020.getFistUniversityName().then(function(qwert)
       {
          const a = qwert.text()
          cy.log(a)
       })
     
       wur2020.getFirstLocationName().then(function(qwert)
       {
          const a = qwert.text()
          cy.log(a)
       })
       wur2020.getSrc().should("have.attr","src")
    
      }) 
      cy.get(":nth-child(3) > .col-lg-12 > ._qs-ranking-data-row > .row > .col-lg-2 > .hide-this-in-mobile-indi").then(function(element)
      {
      cy.get(":nth-child(n+4) > .col-lg-12 > ._qs-ranking-data-row > .row > .col-lg-2 > .hide-this-in-mobile-indi").each(($el, index, $list) => {
      
       
          const amount=element.text()
          var res= amount.split(" ")
         var score= res[1].trim()
       
       const amountt=$el.text()
       var res= amountt.split(" ")
       res= res[1].trim()
       if((Number(score))==(Number(res))){
          
         cy.get(':nth-child(3) > .col-lg-12 > ._qs-ranking-data-row > .row > .col-lg-1 > .hide-this-in-mobile-indi').should("have.text","=3")
         cy.get(':nth-child(5) > .col-lg-12 > ._qs-ranking-data-row > .row > .col-lg-1 > .hide-this-in-mobile-indi').should("have.text","=3")
         cy.get(':nth-child(6) > .col-lg-12 > ._qs-ranking-data-row > .row > .col-lg-1 > .hide-this-in-mobile-indi').should("have.text","5")
       }
       //expect(Number(score)).to.greaterThan(Number(res))
       
      
       })
      })
   */
})
And ('validate Knowmore button',function()
{ /*
   cy.get(':nth-child(n) > .qs-gsac-btn-knowmore').each(($el, index, $list) => 
   {
     $list.click()
      cy.log("working")
      cy.get('.close-modal > .fas').click({force: true})
   })
   */
   cy.get('.col-lg-5 > .ui > .text').then(function(element)
   {
      const pagenum = element.text()
   cy.get(':nth-child(n) > .qs-gsac-btn-knowmore').should("have.length",pagenum).should("be.visible")
   cy.get(':nth-child(n) > .compare-icon-ac-inac').should("have.length",pagenum).should("be.visible")
   cy.get(':nth-child(n) ._directorypage > .fal').should("have.length",pagenum).should("be.visible")
   })
})

And ('Compare more than 4 universities',function()
{ /*
   cy.get('._addingButtonTypes_js_294850 > .compare-icon-ac-inac').click()
   cy.get('._addingButtonTypes_js_294030 > .compare-icon-ac-inac').click()
   cy.get('._addingButtonTypes_js_294562 > .compare-icon-ac-inac').click()
   cy.get('._addingButtonTypes_js_294536 > .compare-icon-ac-inac').click()
   cy.get('._addingButtonTypes_js_294014 > .compare-icon-ac-inac').click()
   cy.get('._erromsgdiv').should("have.text",'\n    4/4 universities have already added \n  ')
  */ 
})

And ('Compare less than 4 universities',function()
{
  /* 
   cy.get('._addingButtonTypes_js_294562 > .compare-icon-ac-inac').click()
   cy.get('._addingButtonTypes_js_294536 > .compare-icon-ac-inac').click()
   cy.get('._universitybtn > ._qs_brandbtntu').click({force: true})

*/
})
And ("validate the individual ad's",function()
{/*
   cy.get("[title*='3rd party ad content']").should("have.length","3")
   
   //cy.get("._frame_970").its('0.contentDocument.body').then(cy.wrap).find("a[id='aw0']").eq(0).should("be.visible")
   //cy.get("._frame_970").its('0.contentDocument.body').then(cy.wrap).find("#aw0").eq(0).click()
   cy.get("._frame_970").its('0.contentDocument.body').then(cy.wrap).find("#aw0").eq(0).should("have.attr","href")
   cy.get("._frame_970").its('0.contentDocument.body').then(cy.wrap).find("#aw0").eq(0).should("have.length","1")
   
   
   cy.xpath("//iframe[@id='google_ads_iframe_/8070/Topuni-Web/university-rankings/world-university-rankings/2022_1']").its('0.contentDocument.body').then(cy.wrap).find("#aw0").eq(0).should("have.attr","href")
   cy.xpath("//iframe[@id='google_ads_iframe_/8070/Topuni-Web/university-rankings/world-university-rankings/2022_1']").its('0.contentDocument.body').then(cy.wrap).find("#aw0").eq(0).should("have.length","1")
   
   
   cy.xpath("//iframe[@id='google_ads_iframe_/8070/Topuni-Web/university-rankings/world-university-rankings/2022_0']").its('0.contentDocument.body').then(cy.wrap).find("#aw0").eq(0).should("have.attr","href")
   cy.xpath("//iframe[@id='google_ads_iframe_/8070/Topuni-Web/university-rankings/world-university-rankings/2022_0']").its('0.contentDocument.body').then(cy.wrap).find("#aw0").eq(0).should("have.length","1")
   */
}) 

And ('validate the year',function()
{
  /*
   const currentyear = new Date().getFullYear()
  
   cy.get('.qs-ranking-year-realdiv > .no-cross-mark > .text').each(($el)=>
   {
     const yearname =$el.text()
     
     if((Number(yearname)) ==currentyear ){
    
     assert.equal((Number(yearname)),currentyear, "current year")
     }
     else if((Number(yearname)) == (currentyear+1) ){
      
        cy.log("It's not current year")
        assert.equal((Number(yearname)),(currentyear+1), "current year")
     }

   })
   */
}) 
 //cy.visit(Cypress.env('Baseurl')+Cypress.env('WUR'))
 //cy.visit(Cypress.env('Baseurl')+Cypress.env('TU'))

//  cy.get(':nth-child(1) > .col-lg-12 > ._qs-ranking-data-row > .row > .col-lg-5 > .university-rank-row > .td-wrap > .uni-link').click()
   //cy.get("#span[xpath*='1']").click()