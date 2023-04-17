export const randomList  = (json) => {
    return json.sort(() => Math.random() - Math.random()).slice(0, 6)
}