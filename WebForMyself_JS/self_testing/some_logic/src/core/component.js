export default class Component {
    constructor(id) {
        this.$el = document.getElementById(id);
        this.init();
    }
    init() {}
    hide() {
        this.$el.classList.add('hide')
    }
    show() {
        this.$el.classList.remove('hide')
    }
}

export const secondExport = 'SE';