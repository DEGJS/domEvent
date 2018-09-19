import domEvent from './domEvent.js';

describe('Promise resolves', () => {
    it('when DOM event fires', async () => {   
        document.body.innerHTML = '<div id="element"></div>';

        const el = document.getElementById('element');

        const promise = domEvent(el, 'click');

        el.click();
       
        expect.assertions(1);
        promise.then(result => {
            expect(result).toMatchObject(expect.any(MouseEvent));
        });

    });
});

describe('Promise does not resolve', () => {
    it('when DOM event fires on a different DOM element', async () => {   
        document.body.innerHTML = `
            <div id="element1"></div>
            <div id="element2"></div>
        `;

        const el1 = document.getElementById('element1');
        const el2 = document.getElementById('element2');

        const promise = domEvent(el1, 'click');

        el2.click();
       
        expect.assertions(0);
        promise.then(result => {
            expect(result).toMatchObject(expect.any(MouseEvent));
        });

    });
});