export function celular(e) {
    e.currentTarget.maxLength = 15
    let value = e.currentTarget.value
    value = value.replace(/\D/g, "")
    value = value.replace(/^(\d{2})(\d{5})/, "($1) $2-")
    e.currentTarget.value = value
    return e
}