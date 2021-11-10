'use strict';

//setting up the Router with pages
Router.init('mainPart',
            [ new Page('#home', 'pages/home.html'), // first Page is also the default if no match in URL 
              new Page('#about', 'pages/about.html'),
              // register more pages here & add their link in index file
            ]);


