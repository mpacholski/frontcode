import {asyncLanguagesActions, changeLanguage} from "./languages/languagesActions";
import {asyncPageContentActions} from "./page-content/pageContentActions";
import {toggleOpen} from "./responsive-menu/responsiveMenuActions";
import {changePage} from "./site/siteActions";

export const actions = {
    languages: {
        "asyncActions":  asyncLanguagesActions,
        'changeLanguage': changeLanguage
    },
    pageContent: {
        "asyncActions": asyncPageContentActions
    },
    responsiveMenu: {
        'toggleOpen': toggleOpen
    },
    site: {
        'changePage': changePage
    }
};