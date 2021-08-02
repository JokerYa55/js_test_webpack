import { createDiv } from './util'

export class Form1 {
    constructor(baseElement) {
        this.baseElement = baseElement;
    }

    // Отрисовка формы в элементе baseElement
    show() {
        let div = createDiv('form1_id');
        let divInputUsername = createDiv('input', 'inputItem');
        let divInputPassword = createDiv('input', 'inputItem');
        let divBtn = createDiv('button', 'inputItem');

        let inputUsername = document.createElement('input');
        inputUsername.type = 'text'
        inputUsername.id = 'username_id';
        divInputUsername.append(inputUsername);

        let inputPassword = document.createElement('input');
        inputPassword.type = 'password';
        inputPassword.id = 'password_id';
        divInputPassword.append(inputPassword);

        let button = document.createElement('button');
        button.innerText = 'test';
        button.addEventListener('click', () => {
            console.log('button');
            let promt = new PromtWindows();
            promt.show();
        })
        divBtn.append(button);

        div.append(divInputUsername);
        div.append(divInputPassword);
        div.append(divBtn);

        this.baseElement.append(div);
    }

    clear() {
        while (this.baseElement.firstChild) {
            this.baseElement.firstChild.remove()
        }
    }
};

/**
 * Класс окно с сообщением
 */
class PromtWindows {
    show() {
        let div = createDiv('promt_id', 'promt-style');
        div.innerText = 'test';
        document.body.append(div);
    }

    hide() {}
}