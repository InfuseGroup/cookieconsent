import { state, dom, cookieConfig } from '../core/global';

/**
 * Helper function which prints info (console.log())
 * @param {Object} printMsg
 * @param {Object} [optionalParam]
 */
export const _log = (printMsg, optionalParam, error) => {
    !error ? console.log(printMsg, optionalParam !== undefined ? optionalParam : ' ') : console.error(printMsg, optionalParam || '');
};

/**
 * Returns index of found element inside array, otherwise -1
 * @param {Array} arr
 * @param {Object} value
 * @returns {number}
 */
export const _inArray = (arr, value) => {
    return arr.indexOf(value);
};

/**
 * Helper function which creates an HTMLElement object based on 'type' and returns it.
 * @param {string} type
 * @returns {HTMLElement}
 */
export const _createNode = (type) => {
    var el = document.createElement(type);
    if(type === 'button'){
        _setAttribute(el, 'type', type);
    }
    return el;
};

/**
 * Helper function to set attribute
 * @param {HTMLElement} el
 * @param {string} attribute
 * @param {string|number|boolean} value
 */
export const _setAttribute = (el, attribute, value) => {
    el.setAttribute(attribute, value);
};

/**
 * Helper function to append child to parent
 * @param {Node} parent
 * @param {Node} child
 */
export const _appendChild = (parent, child) => {
    parent.appendChild(child);
};

/**
 * Generate RFC4122-compliant UUIDs.
 * https://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid?page=1&tab=votes#tab-top
 * @returns {string}
 */
export const _uuidv4 = () => {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, (c) => {
        return (c ^ (window.crypto || window.msCrypto).getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16);
    });
};

/**
 * Function to run when event is fired
 * @callback eventFired
 */

/**
 * Add event listener to dom object (cross browser function)
 * @param {Element} elem
 * @param {string} event
 * @param {eventFired} fn
 * @param {boolean} [isPasive]
 */
export const _addEvent = (elem, event, fn, isPasive) => {
    elem.addEventListener(event, fn , isPasive === true ? { passive: true } : false);
};

/**
 * Get all prop. keys defined inside object
 * @param {Object} obj
 */
export const _getKeys = obj => {
    if(typeof obj === 'object'){
        return Object.keys(obj);
    }
};

/**
 * Append class to the specified dom element
 * @param {HTMLElement} elem
 * @param {string} classname
 */
export const _addClass = (elem, classname) => {
    elem.classList.add(classname);
};

/**
 * Remove specified class from dom element
 * @param {HTMLElement} elem
 * @param {string} classname
 */
export const _removeClass = (el, className) => {
    el.classList.remove(className);
};

/**
 * Check if html element has class
 * @param {HTMLElement} el
 * @param {string} className
 */
export const _hasClass = (el, className) => {
    return el.classList.contains(className);
};

/**
 * Calculate the existing cookie's remaining time until expiration (in milliseconds)
 * @returns {number}
 */
export const _getRemainingExpirationTimeMS = () => {
    var elapsedTimeMilliseconds = state._lastConsentTimestamp ? new Date() - state._lastConsentTimestamp : 0;
    return _getExpiresAfterDaysValue()*86400000 - elapsedTimeMilliseconds;
};

/**
 * Helper function to create xhr objects
 * @param {{
 *  method: string,
 *  path: string,
 *  data: any
 * }} params
 * @param {Function} [callback]
 */
export const _xhr = (params, callback) => {
    var httpRequest = new XMLHttpRequest();

    httpRequest.onreadystatechange = () => {
        if (httpRequest.readyState === 4) {
            var status = httpRequest.status, data;

            if (status === 200) {
                try{
                    data = JSON.parse(httpRequest.responseText);
                }catch(e){
                    _log('CookieConsent [XHR] JSON.parse error:', e);
                }
            }else{
                _log('CookieConsent [XHR] error:', httpRequest.statusText);
            }

            if (typeof callback === 'function') callback(status, data);
        }
    };

    httpRequest.open(params.method, params.path);
    httpRequest.send(params.data);
};


/**
 * Helper function to retrieve cookie duration
 * @returns {number}
 */
export const _getExpiresAfterDaysValue = () => {
    var expiresAfterDays = cookieConfig['expiresAfterDays'];
    return typeof expiresAfterDays === 'function' ? expiresAfterDays(state._acceptType) : expiresAfterDays;
};

/**
 * Calculate "accept type" given current categories state
 * @param {{accepted: string[], rejected: string[]}} currentCategoriesState
 * @returns {string}
 */
export const _getAcceptType = (currentCategoriesState) => {

    var type = 'custom';

    // calculate accept type based on accepted/rejected categories
    if(currentCategoriesState.accepted.length === state._allCategoryNames.length)
        type = 'all';
    else if(currentCategoriesState.accepted.length === state._readOnlyCategories.length)
        type = 'necessary';

    return type;
};

/**
 * Update global "acceptType" variable
 * Note: getUserPreferences() depends on "acceptType"
 */
export const _updateAcceptType = () => {
    state._acceptType = _getAcceptType(_getCurrentCategoriesState());
};

/**
 * Add an onClick listeners to all html elements with data-cc attribute
 */
export const _addDataButtonListeners = (elem, api) => {

    var _a = 'accept-';

    var showPreferencesElements = _getElements('show-preferences');
    var acceptAllElements = _getElements(_a + 'all');
    var acceptNecessaryElements = _getElements(_a + 'necessary');
    var acceptCustomElements = _getElements(_a + 'custom');

    for(var i=0; i<showPreferencesElements.length; i++){
        _setAttribute(showPreferencesElements[i], 'aria-haspopup', 'dialog');
        _addEvent(showPreferencesElements[i], 'click', (event) => {
            event.preventDefault();
            api.showPreferences(0);
        });
    }

    for(i=0; i<acceptAllElements.length; i++){
        _addEvent(acceptAllElements[i], 'click', (event) => {
            _acceptAction(event, 'all');
        });
    }

    for(i=0; i<acceptCustomElements.length; i++){
        _addEvent(acceptCustomElements[i], 'click', (event) => {
            _acceptAction(event);
        });
    }

    for(i=0; i<acceptNecessaryElements.length; i++){
        _addEvent(acceptNecessaryElements[i], 'click', (event) => {
            _acceptAction(event, []);
        });
    }

    /**
     * Return all elements with given data-cc role
     * @param {string} dataRole
     * @returns {NodeListOf<Element>}
     */
    function _getElements(dataRole){
        return (elem || document).querySelectorAll('a[data-cc="' + dataRole + '"], button[data-cc="' + dataRole + '"]');
    }

    /**
     * Helper function: accept and then hide modals
     * @param {PointerEvent} e source event
     * @param {string} [acceptType]
     */
    function _acceptAction(e, acceptType){
        e.preventDefault();
        api.accept(acceptType);
        api.hidePreferences();
        api.hide();
    }
};

/**
 * Obtain accepted and rejected categories
 * @returns {{accepted: string[], rejected: string[]}}
 */
export const _getCurrentCategoriesState = () => {

    // calculate rejected categories (_allCategoryNames - _acceptedCategories)
    var rejectedCategories = state._allCategoryNames.filter((category) => {
        return (_inArray(state._acceptedCategories, category) === -1);
    });

    return {
        accepted: state._acceptedCategories,
        rejected: rejectedCategories
    };
};

/**
 * Trap focus inside modal and focus the first
 * focusable element of current active modal
 */
export const _handleFocusTrap = (api) => {
    var tabbedOutsideDiv = false;
    var tabbedInsideModal = false;

    _addEvent(document, 'keydown', (e) => {
        e = e || window.event;

        // If is tab key => ok
        if(e.key !== 'Tab') return;

        // If there is any modal to focus
        if(state._currentModalFocusableElements){
            // If reached natural end of the tab sequence => restart
            if(e.shiftKey){
                if (document.activeElement === state._currentModalFocusableElements[0]) {
                    state._currentModalFocusableElements[1].focus();
                    e.preventDefault();
                }
            }else{
                if (document.activeElement === state._currentModalFocusableElements[1]) {
                    state._currentModalFocusableElements[0].focus();
                    e.preventDefault();
                }
            }

            // If have not yet used tab (or shift+tab) and modal is open ...
            // Focus the first focusable element
            if(!tabbedInsideModal && !state._clickedInsideModal){
                tabbedInsideModal = true;
                !tabbedOutsideDiv && e.preventDefault();

                if(e.shiftKey){
                    if(state._currentModalFocusableElements[3]){
                        if(!state._currentModalFocusableElements[2]){
                            state._currentModalFocusableElements[0].focus();
                        }else{
                            state._currentModalFocusableElements[2].focus();
                        }
                    }else{
                        state._currentModalFocusableElements[1].focus();
                    }
                }else{
                    if(state._currentModalFocusableElements[3]){
                        state._currentModalFocusableElements[3].focus();
                    }else{
                        state._currentModalFocusableElements[0].focus();
                    }
                }
            }
        }

        !tabbedInsideModal && (tabbedOutsideDiv = true);
    });

    if(document.contains){
        _addEvent(dom._ccMain, 'click', (e) => {
            e = e || window.event;
            /**
             * If click is on the foreground overlay (and not inside preferencesModal),
             * hide preferences modal
             *
             * Notice: click on div is not supported in IE
             */
            if(state._preferencesModalVisible){
                if(!dom._preferencesInner.contains(e.target)){
                    api.hidePreferences(0);
                    state._clickedInsideModal = false;
                }else{
                    state._clickedInsideModal = true;
                }
            }else if(state._consentModalVisible){
                if(dom._consentModal.contains(e.target)){
                    state._clickedInsideModal = true;
                }
            }

        }, true);
    }
};

/**
 * Save reference to first and last focusable elements inside each modal
 * to prevent losing focus while navigating with TAB
 */
export const _getModalFocusableData = () => {

    /**
     * Note: any of the below focusable elements, which has the attribute tabindex="-1" AND is either
     * the first or last element of the modal, won't receive focus during "open/close" modal
     */
    var allowed_focusable_types = ['[href]', 'button', 'input', 'details', '[tabindex="0"]'];

    function _getAllFocusableElements(modal, _array){
        var focusLater=false, focusFirst=false;

        // ie might throw exception due to complex unsupported selector => a:not([tabindex="-1"])
        try{
            var focusableElements = modal.querySelectorAll(allowed_focusable_types.join(':not([tabindex="-1"]), '));
            var attr, len=focusableElements.length, i=0;

            while(i < len){

                attr = focusableElements[i].getAttribute('data-focus');

                if(!focusFirst && attr === '1'){
                    focusFirst = focusableElements[i];

                }else if(attr === '0'){
                    focusLater = focusableElements[i];
                    if(!focusFirst && focusableElements[i+1].getAttribute('data-focus') !== '0'){
                        focusFirst = focusableElements[i+1];
                    }
                }

                i++;
            }

        }catch(e){
            return modal.querySelectorAll(allowed_focusable_types.join(', '));
        }

        /**
         * Save first and last elements (used to lock/trap focus inside modal)
         */
        _array[0] = focusableElements[0];
        _array[1] = focusableElements[focusableElements.length - 1];
        _array[2] = focusLater;
        _array[3] = focusFirst;
    }

    /**
     * Get preferences modal's all focusable elements
     * Save first and last elements (used to lock/trap focus inside modal)
     */
    // [TODO]
    // _getAllFocusableElements(dom._preferencesInner, state._allPreferencesModalFocusableElements);

    /**
     * If consent modal exists, do the same
     */
    if(state._consentModalExists){
        _getAllFocusableElements(dom._consentModal, state._allConsentModalFocusableElements);
    }
};