var should = require('chai').should()
var expect = require('chai').expect
var assert = require('chai').assert
log = console.log
before(()=>{//runs once for describe() block before executing it() block


    log('Before Hook')

})


after(()=>{//runs once for describe() block after all it() block executed


    log('After Hook')

})

beforeEach(()=>{ //runs once for each it() block


    log('Before Each hook')

})


afterEach(()=>{


    log('After Each hook')

})

describe('Mocha validations',()=>{ //describe.only() describe.skip()

    let name = 'Manohar'
    it.skip('Validate through should',()=>{  // skips the testcase
        //it.only()  runs only this testcase

        name.should.equal('Manohar')
        name.should.have.lengthOf(5)

    })


    it('Validate through expect',()=>{

       expect(name).to.equal('Manohar')
       expect(name).to.have.lengthOf(5)
    })


    it('Validate through assert',()=>{

       assert.equal(name,'Manohar')
       assert.lengthOf(name,5)

    })

})
