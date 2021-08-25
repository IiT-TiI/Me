function init_data() {
    let me_data = get_data() || []
    set_data(me_data)
    console.log(me_data)

}

function get_data() {
    return JSON.parse(localStorage.getItem('me_data'))
}

function set_data(data) {
    localStorage.setItem('me_data', JSON.stringify(data))
}

function unshift_item(item) {
    let me_data = get_data()
    let date = new Date()
    item.createTime = date.getTime()
    me_data.unshift(item)
    set_data(me_data)
}

function push_item(item) {
    let me_data = get_data()
    let date = new Date()
    item.createTime = date.getTime()
    me_data.push(item)
    set_data(me_data)
}

function insert_item(item, index) {
    let me_data = get_data()
    let date = new Date()
    item.createTime = date.getTime()
    me_data.splice(index, 0, item)
    set_data(me_data)
}

function pop_item() {
    let me_data = get_data()
    me_data.pop()
    set_data(me_data)
}

function shift_item() {
    let me_data = get_data()
    me_data.shift()
    set_data(me_data)
}

function clear_data() {
    set_data([])
}

export default{init_data,get_data,set_data,shift_item,
    unshift_item,push_item,pop_item,insert_item,clear_data}
