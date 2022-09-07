
export const apiResponseFormatter = (data) => {
    if (typeof data == "string" ) {
        return {
            errors: {
                msg: data
            }
        }
    } else {
        return data
    }
}
