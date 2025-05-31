/**
 * Icon sets for the Symbic game
 * Each set contains two icons representing binary values (0 and 1)
 */
const IconSets = {
    'one-zero': {
        0: { class: 'icon-zero', html: '<i class="fa-solid fa-0"></i>' },
        1: { class: 'icon-one', html: '<i class="fa-solid fa-1"></i>' }
    },
    'moon-sun': {
        0: { class: 'icon-moon', html: '<i class="fa-solid fa-moon"></i>' },
        1: { class: 'icon-sun', html: '<i class="fa-solid fa-sun"></i>' }
    },
    'star-heart': {
        0: { class: 'icon-star', html: '<i class="fa-solid fa-star"></i>' },
        1: { class: 'icon-heart', html: '<i class="fa-solid fa-heart"></i>' }
    },
    'circle-square': {
        0: { class: 'icon-circle', html: '<i class="fa-solid fa-circle"></i>' },
        1: { class: 'icon-square', html: '<i class="fa-solid fa-square"></i>' }
    },
    'cat-dog': {
        0: { class: 'icon-cat', html: '<i class="fa-solid fa-cat"></i>' },
        1: { class: 'icon-dog', html: '<i class="fa-solid fa-dog"></i>' }
    },
    'thumbs-up-down': {
        0: { class: 'icon-thumbs-up', html: '<i class="fa-solid fa-thumbs-up"></i>' },
        1: { class: 'icon-thumbs-down', html: '<i class="fa-solid fa-thumbs-down"></i>' }
    },
    'smile-frown': {
        0: { class: 'icon-smile', html: '<i class="fa-solid fa-face-smile"></i>' },
        1: { class: 'icon-frown', html: '<i class="fa-solid fa-face-frown"></i>' }
    }
};

/**
 * Icon utility functions
 */
const IconUtils = {
    /**
     * Get the HTML for a specific icon value and set
     * @param {number} value - The binary value (0 or 1)
     * @param {string} setName - The name of the icon set to use
     * @returns {string} The HTML for the icon
     */
    getIconHtml(value, setName) {
        if (!IconSets[setName]) {
            console.error(`Icon set '${setName}' not found`);
            return '';
        }
        
        // Convert any input to 0 or 1
        const binaryValue = value == 1 ? 1 : 0;
        return IconSets[setName][binaryValue].html;
    },
    
    /**
     * Get the CSS class for a specific icon value and set
     * @param {number} value - The binary value (0 or 1)
     * @param {string} setName - The name of the icon set to use
     * @returns {string} The CSS class for the icon
     */
    getIconClass(value, setName) {
        if (!IconSets[setName]) {
            console.error(`Icon set '${setName}' not found`);
            return '';
        }
        
        // Convert any input to 0 or 1
        const binaryValue = value == 1 ? 1 : 0;
        return IconSets[setName][binaryValue].class;
    },
    
    /**
     * Get all available icon set names
     * @returns {string[]} Array of icon set names
     */
    getIconSetNames() {
        return Object.keys(IconSets);
    }
}; 