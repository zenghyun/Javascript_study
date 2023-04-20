const puppeteer = require('puppeteer');

// describe

describe('계산 테스트', () => {
    const a = 1, b = 2;
 
    test('a + b는 3이다.', () => {
       expect(a + b).toEqual(3);
    });
 });
 
 /*
 describe('그룹 테스트 설명 문자열', () => {
    const a = 1, b = 2; // 테스트에 사용할 일회용 가짜 변수 선언
 
    test('개별 테스트 설명 문자열', () => {
       expect(검증대상).toXxx(기대결과);
    });
 });
 */

// 유닛 테스트
const { generateText, checkAndGenerate } = require('./util');

test('should output name and age', () => {
    const text = generateText('Zenghyun', 27);
    expect(text).toBe('Zenghyun (27 years old)');
});

test('should output data-less text', () => {
    const text = generateText('', null);
    expect(text).toBe(' (null years old)');
    const text2 = generateText();
    expect(text2).toBe('undefined (undefined years old)');
});

// 통합 테스트 

test('should generate a valid text output', () => {
    const text = checkAndGenerate('Zenghyun', 27);
    expect(text).toBe('Zenghyun (27 years old)');
});

// E2E 테스트

test('should click around with text and correct class', async () => {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 80,
        args: ['--window-size=1920,1080']
    });
    const page = await browser.newPage();
    await page.goto('http://127.0.0.1:5500/udemy/js_work/Automated_Testing_study/testing-01/index.html');
    await page.click('input#name');
    await page.type('input#name', 'Zenghyun');
    await page.click('input#age');
    await page.type('input#age', '27');
    await page.click('#btnAddUser');
    const finalText = await page.$eval('.user-item', el => el.textContent);
    expect(finalText).toBe('Zenghyun (27 years old)');
},25000);
