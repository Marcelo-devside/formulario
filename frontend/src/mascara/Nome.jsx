export function nome(e) {
    let value = e.currentTarget.value
    value = value.replace(/\d/g, "")
    value = value.replace(/^{a-Z}/, "$1"  )
    e.currentTarget.value = value
    return e
}