export function cpf(e) {
    e.currentTarget.maxLength = 14
    let value = e.currentTarget.value
    // value = value.replace(/\D/g, "")
    value = value.replace(/^(\d{3})+(\d{3})+(\d{3})/, "$1.$2.$3-" )
    // value = value.replace(/^(\d{3})+(\d{3})+(\d{3})+(\d{2})$/, "$1.$2.$3-$4" )
    e.currentTarget.value = value
    return e
}