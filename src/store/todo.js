import Vue from 'vue'

const store = {
    state: Vue.observable({
        items: [],
        mode: 'all'
    }),
    addItem(item) {
        this.state.items.push(item)
        console.log(this.state.items)
    },
    removeItem(id) {
        this.state.items = this.state.items
            .filter(item => item.id !== id)
    },

    initItems(items) {
        this.state.items = items
    },


    setMode(mode) {
        this.state.mode = mode
        console.log(this.state.mode)
    },
    // getter: {
    items() {
        return this.state.items.filter(item => {
            switch (this.state.mode) {
                case 'all':
                    return true;
                case 'done':
                    return item.done === true
                case 'undone':
                    return item.done === false
            }
        })
    }
    // }
}

export default store