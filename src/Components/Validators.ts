export const requiredField = (value: any) => {
    if (value) return undefined;
    return ('Field required')
    console.log('field required')
}
export const maxLengthX = (length: number) => (value: any) => {
    if (value.length > length) return (`Max length is ${length} characters`)
    return undefined
    console.log(`Max length is ${length} characters`)
}