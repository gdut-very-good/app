
export function getResult(data, options) {
    const option = options || {isAlert: true}
    if (option.isAlert) {

    }
    console.log(data)
    return {
        code: data.code,
        message: data.message,
        data: data.data
    }
}