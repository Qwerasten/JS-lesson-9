import {
    addChangeVisibilityListener, addClickListener
} from './functions.js'

describe('page functions', () => {
    it('maybe testing click', () => {

        document.body.innerHTML =
            `<p>Параграф</p>
        <p>Еще параграф</p>
        <p>Другой параграф</p>
        <input type="text" id="paragraph_text" placeholder="Введите текст">
        <button id="add_paragraph" style="visibility:hidden">
        Создать параграф</button>`

        const input = document.getElementById('paragraph_text');
        const button = document.getElementById('add_paragraph');

        addChangeVisibilityListener();
        addClickListener();

        input.value = 'test-paragraph';
        input.dispatchEvent(new Event('input'));
        expect(button.style.visibility).toBe("visible");

        button.dispatchEvent(new Event('click'));
        expect(document.querySelectorAll('p').length).toBe(4);

        /* jest.spyOn(console, 'log');
        sumMult(2, 3);
        expect(console.log).toHaveBeenCalledWith(5);
        expect(console.log).toHaveBeenCalledWith(6); */
    });

});
