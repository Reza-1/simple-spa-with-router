'use strict';

class Page {
    constructor(name, htmlName, jsName) {
        this.name = name;
        this.htmlName = htmlName;
        // if jsName is not given use html name + .js
        this.jsName = jsName? jsName : htmlName.substring(0, htmlName.lastIndexOf('.'))+'.js'
    }
}

class Router {

    static init(rootId , pages) {
        Router.pages = pages;
        Router.rootElement = document.getElementById(rootId);
        window.addEventListener('hashchange', function (e) {
            Router.handleHashChange();
        });
        Router.handleHashChange();
    }

    static handleHashChange() {
        const urlHash = window.location.hash;
        if (urlHash.length > 0) {    // If there is a hash in URL
            for (let i = 0; i < Router.pages.length ; i++) {
                // find which page matches the hash then navigate to it
                if ( urlHash === Router.pages[i].name) {
                    Router.goToPage(Router.pages[i]);
                    break;
                }
            }
        } else {    // If no hash in URL, load the first Page as the default page
            Router.goToPage(Router.pages[0]);
        }
    }

    static async goToPage(page) {
        try {
            const response = await fetch(page.htmlName);
            const txt = await response.text();
            Router.rootElement.innerHTML = txt;
            //append JS part to run.
            const script = document.createElement('script');
            script.setAttribute("src", page.jsName); 
            script.setAttribute("type", "text/javascript"); 
            Router.rootElement.appendChild(script);
        }catch( error ) {
            console.error(error);
        };
    }

}