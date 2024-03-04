// www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin
// www.thecocktaildb.com/api/json/v1/1/list.php?i=list
// www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007
const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1/';
export const INGREDIENS_URL = `${BASE_URL}list.php?i=list`
export const COCKTAILS_BY_INGR_URL = `${BASE_URL}filter.php?i=`
export const COCTAIL_BY_ID = `${BASE_URL}lookup.php?i=`
export const COCTAIL_RANDOM = `${BASE_URL}random.php`
export const INGREDIENS_PIC = `https://www.thecocktaildb.com/images/ingredients/`