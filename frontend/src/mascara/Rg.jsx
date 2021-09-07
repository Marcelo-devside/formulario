export function identidade(e) {
    e.currentTarget.maxLength = 12
    let value = e.currentTarget.value
    value = value.replace(/\D/g, "")
    value = value.replace(/^(\d{2})+(\d{3})+(\d{3})/, "$1.$2.$3-" )
    // value = value.replace(/^(\d{2})+(\d{3})+(\d{3})+(\d{1})$/, "$1.$2.$3-$4" )
    e.currentTarget.value = value
    return e
}