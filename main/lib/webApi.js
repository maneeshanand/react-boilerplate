import request from 'superagent'
import { Dispatcher } from 'fluxxed_up'

export function fetch(url, data, actionType) {
  buildRequest(request.get(url), null, actionType)
}

export function post(url, data, actionType) {
  buildRequest(request.post(url), data, actionType)
}

export function buildRequest(method, data, actionType) {
  method
    .set('Accept', 'application/json')
    .set('Authorization', sessionStorage.getItem('accessToken'))
    .end(function(error, res){
      if (res) {
        var resData
        if (res.error) {
          resData = getErrors(res)
        } else {
          resData = JSON.parse(res.text)
        }
        Dispatcher.dispatch({
          actionType: actionType,
          data: resData
        })
      }
    })
}

function getErrors(res) {
  var errorMsgs = ["Something went wrong, please try again"]
  var errorObject = {errors: []}
  var json
  if ((json = JSON.parse(res.text))) {
    if (json['errors']) {
      errorObject['errors'] = json['errors']
    } else if (json['error']) {
      errorObject['errors'] = [json['error']]
    } else {
      errorObject['errors'] = errorMsgs
    }
  }
  return errorObject
}
