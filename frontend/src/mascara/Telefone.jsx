export function telefone(e) {
    e.currentTarget.maxLength = 14
    let value = e.currentTarget.value
    value = value.replace(/\D/g, "")
    value = value.replace(/^(\d{2})(\d{4})/, "($1) $2-")
    e.currentTarget.value = value
    return e
}