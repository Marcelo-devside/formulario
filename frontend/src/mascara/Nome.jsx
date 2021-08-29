export function nome(e) {
    let value = e.currentTarget.value
    // value = value.replace(/\D/g, "")
    // value = value.replace(/ (\d[a-Z])/, "$1"  )
    e.currentTarget.value = value
    return e
}