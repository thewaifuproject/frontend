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
            window.localStorage.setItem("waifuchain", JSON.stringify({ 'logbids' : { } }))
        }
        let wchainStorage = JSON.parse(window.localStorage.getItem("waifuchain"))
        if (!wchainStorage['logbids'].hasOwnProperty(account)){
            wchainStorage['logbids'][account] = {}
        }
        return wchainStorage;
    } else {
        return null;
    }
}