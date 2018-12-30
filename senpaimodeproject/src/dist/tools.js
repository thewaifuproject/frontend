/**
    usage:
        const cancelablePromise = makeCancelable(
            new Promise(r => component.setState({...}))
        );

        cancelablePromise
            .promise
            .then(() => console.log('resolved'))
            .catch((reason) => console.log('isCanceled', reason.isCanceled));

        cancelablePromise.cancel(); // Cancel the promise in componentWillUnmount
 */
//https://reactjs.org/blog/2015/12/16/ismounted-antipattern.html
export const makeCancelable = (promise) => {
    let hasCanceled_ = false;
  
    const wrappedPromise = new Promise((resolve, reject) => {
      promise.then(
        val => hasCanceled_ ? reject({isCanceled: true}) : resolve(val),
        error => hasCanceled_ ? reject({isCanceled: true}) : reject(error)
      );
    });
  
    return {
      promise: wrappedPromise,
      cancel() {
        hasCanceled_ = true;
      },
    };
};

export function getLocalStorage(account){
    if (window.localStorage){
        if (window.localStorage.getItem("waifuchain")==null){
            window.localStorage.setItem("waifuchain", JSON.stringify({
                'logbids' : {},
                'tutorial': {
                    'auction':true,
                    'bid':true,
                    'beforeReveal':true,
                    'afterReveal':true
                }
            }))
        }
        let wchainStorage = JSON.parse(window.localStorage.getItem("waifuchain"))
        if (!wchainStorage['logbids'].hasOwnProperty(account) && account){
            wchainStorage['logbids'][account] = {}
        }
        return wchainStorage;
    } else {
        return null;
    }
}

export function startTutorial(){
    let wstorage = getLocalStorage()
    wstorage['tutorial'] = {
        'auction':true,
        'bid':true,
        'beforeReveal':true,
        'afterReveal':true
    }
    window.localStorage.setItem("waifuchain", JSON.stringify(wstorage))
}

export function checkTutorial(n){
    if (!getLocalStorage()['tutorial']){
        let wstorage = getLocalStorage()
        wstorage['tutorial'] = {
            'auction':true,
            'bid':true,
            'beforeReveal':true,
            'afterReveal':true
        }
        window.localStorage.setItem("waifuchain", JSON.stringify(wstorage))
    }

    switch(n){
        case 'auction': return getLocalStorage()['tutorial'][n]
        case 'bid': return (getLocalStorage()['tutorial'][n] && !getLocalStorage()['tutorial']['auction'])
        case 'beforeReveal': return (getLocalStorage()['tutorial'][n] && !getLocalStorage()['tutorial']['auction']
                                                                        && !getLocalStorage()['tutorial']['bid'])
        case 'afterReveal': return (getLocalStorage()['tutorial'][n] && !getLocalStorage()['tutorial']['auction']
                                                                        && !getLocalStorage()['tutorial']['bid']
                                                                        && !getLocalStorage()['tutorial']['beforeReveal'])
        default : return getLocalStorage()['tutorial'][n]
    }

    
}

export function disableTutorial(n){
    let wchainStorage = getLocalStorage()
    if (wchainStorage) {
        wchainStorage['tutorial'][n]=false
        console.log(n)
        window.localStorage.setItem('waifuchain', JSON.stringify(wchainStorage));
    } else {
        //TODO: CHECK before bid if window.localStorage is accesible
    }
}