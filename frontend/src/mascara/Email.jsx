export function email(e) {
    let value = e.currentTarget.value
    // value = value.replace(/(\w hotmail|gmail|yahoo)/gi, "@ $1" )
    e.currentTarget.value = value
    return e
}