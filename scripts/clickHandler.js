let urlState = {
    searchFor: "q=Developer",
    limit: "limit=16",
};

export function clickHandler(event) {

    if (event.target.matches('button') && event.target.id === 'hplusfilterBtnUrl') {    
        
        var btnValue = event.target.value;
        return btnValue;
    }

    //Handle gifs differently
    if(event.target.matches('button') && event.target.id === 'giphyFilterBtnSearchFor' || event.target.id === 'giphyFilterBtnLimit')
    {

        if(event.target.id === 'giphyFilterBtnSearchFor'){
            urlState.searchFor = event.target.value;
            //console.log(urlState);
        } 
        else if (event.target.id === 'giphyFilterBtnLimit')
        {
            urlState.limit = event.target.value;
            //console.log(urlState);

        }
        return urlState;
    }
}