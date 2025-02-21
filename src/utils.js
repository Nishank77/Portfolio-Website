//Method used to make Absolute Path from the Relative Path

export const getImageUrl = (path) => {
    return new URL(`/assets/${path}`, import.meta.url).href;
}