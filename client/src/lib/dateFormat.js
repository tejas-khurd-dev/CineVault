const dateFormat = (dateStr) => {
    const date = new Date(dateStr)
    const day = date.getDate()
    const month = date.toLocaleDateString('en-US', { month: 'short' })
    return { day, month }
}

export default dateFormat