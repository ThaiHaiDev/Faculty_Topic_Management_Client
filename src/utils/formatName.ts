const formatName = (value: string | null | undefined | '') => {
    if (value !== undefined) {
        return value
    } else {
        return ''
    }
}

export default formatName