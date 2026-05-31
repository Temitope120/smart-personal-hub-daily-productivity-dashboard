export const toTitleCase = (text = "") =>
    text.replace(
        /\w\S*/g,
        word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    );