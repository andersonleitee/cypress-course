/// <reference types= "cypress" />

it('Equality', ()=> {
    const a = 2;

    expect(a).equal(2);
    expect(a).to.be.equal(2);
    expect('a').not.to.be.equal('b');
})

it('Truthy', ()=>{
    const a = true;
    const b = null;
    let c;

    expect(a).to.be.true;
    expect(b).to.be.null;
    expect(c).to.be.undefined;

})

it ('Object equality', ()=>{
    const obj = {
        a: 1,
        b:2
    }

    // Igualando o objeto a ele mesmo
    expect(obj).equal(obj);
    expect(obj).to.be.eq(obj);
    // Saber se uma as propriedades são iguais a do obj
    expect(obj).to.be.deep.equal({a: 1, b: 2 });
    expect(obj).eql({a: 1, b: 2 });
    // Saber se a propriedade está incluida
    expect(obj).include({a:1});

})

it ('Array', ()=>{
    const arr =  [1,2,3];

    expect(arr).not.empty;
    expect(arr).include.members([1,2]);
    expect(arr).to.have.members([1,2,3]);
    expect([]).to.be.empty;
})

it ('Types', () => {
    const num = 1;
    const str = 'string'

    expect(num).to.be.a('number');
    expect(str).to.be.a('string');
    expect({}).to.be.an('object');

})

it ('Strings', () => {
    const str = 'string de teste'

    expect(str).to.be.equal('string de teste');
    expect(str).to.have.length(15);
    expect(str).to.contain('de');
    expect(str).to.match(/de/);
    expect(str).to.match(/^string/);//verific se no inic é "string"
    expect(str).to.match(/teste$/);//verific se no final é "testes"
})

it ('Numbers', () => {
    const num = 2;
    const floatNumber = 5.123;

    expect(num).to.be.equal(2);
    expect(num).to.be.above(1);
    expect(num).to.be.below(5);

})