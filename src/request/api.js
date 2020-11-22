export function getData(data){
    return Request({
        url: 'data/list',
        method: 'post'
    })
}
export function getID(id){
    return Request({
        url:'data/one?id=' + id,
        method: 'get'
    })
}