//establish components
var btn = document.getElementsByClassName('button');

document.addEventListener('DOMContentLoaded', function() {
    //add custom page impression event
    var body = document.getElementsByTagName('body')[0];
    dataLayer.push({
        'event': 'page_impression',
        'pageName': body.getAttribute('data-name') ? body.getAttribute('data-name').toLowerCase() : '',
        'pageLanguage': body.getAttribute('data-language') ? body.getAttribute('data-language').toLowerCase() : '',
        'pageType': body.getAttribute('data-type') ? body.getAttribute('data-type').toLowerCase() : ''
    });

    //add event listener to each button
    for(var i = 0; i < btn.length; i++){
        btn[i].addEventListener('click', function(){
            dataLayer.push({
                'event': 'button_click',
                'componentName': this.getAttribute('data-name') ? this.getAttribute('data-name').toLowerCase() : '',
                'componentType': this.getAttribute('data-type') ? this.getAttribute('data-type').toLowerCase() : '',
                'componentTarget': this.href ? this.href.toLowerCase() : '',
                'componentText': this.innerHTML ? this.innerHTML.toLowerCase() : '',
                'component': 'button'
            });
        });
    };
});