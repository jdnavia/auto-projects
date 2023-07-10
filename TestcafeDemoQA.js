const { nth } = require('lodash');
const { Selector, ClientFunction } = require('testcafe');

fixture`Demo QA Test`
  .page`https://demoqa.com`;

test('DemoQA', async (t) => {
    await t.click('div.avatar.mx-auto.white');
    await t.click('#app > div > div > div.row > div:nth-child(1) > div > div > div:nth-child(2)');
    await t.click('#app > div > div > div.row > div:nth-child(1) > div > div > div:nth-child(2) > div');
    await t.expect(Selector('#app > div > div > div.row > div.col-12.mt-4.col-md-6 > div.practice-form-wrapper > h5').innerText).contains('Student Registration Form');
    await t.typeText('#firstName', 'jose david');
    await t.typeText('#lastName', 'navia castaño');
    await t.typeText('#userEmail', 'navia_1031@hotmail.com');
    await t.click('#genterWrapper > div.col-md-9.col-sm-12 > div:nth-child(1)');
    await t.typeText('#userNumber', '3133133311');
    await t.typeText('#dateOfBirthInput', '31 oct 1995');
    await t.typeText('#subjectsWrapper', 'no idea lol');
    await t.click('#hobbiesWrapper > div.col-md-9.col-sm-12 > div:nth-child(3)');
    await t.typeText('#currentAddress', 'no idea lol');
    await t
      .click('#stateCity-wrapper > div:nth-child(2)')  // Hacer clic en el selector de lista desplegable
      .click('#stateCity-wrapper > div:nth-child(2) > div > div', { offsetX: 0, offsetY: 0 });  // Hacer clic en la opción 3
    await t.click('#submit');
  
});
