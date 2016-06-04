import request from 'superagent'
import { Dispatcher } from 'fluxxed_up'

function getErrors(res) {
  var errorMsgs = ['Something went wrong, please try again']
  var errorObject = {errors: []}
  var json
  if ((json = JSON.parse(res.text))) {
    if (json.errors)
      errorObject.errors = json.errors
    else if (json.error)
      errorObject.errors = [json.error]
    else
      errorObject.errors = errorMsgs
  }
  return errorObject
}

export function buildRequest(method, data, actionType) {
  method
    .set('Accept', 'application/json')
    .set('Authorization', sessionStorage.getItem('accessToken'))
    .end((error, res) => {
      if (res) {
        Dispatcher.dispatch({
          actionType,
          data: res.error ? getErrors(res) : JSON.parse(res.text)
        })
      }
    })
}

export function fetch(url, data, actionType) { buildRequest(request.get(url), null, actionType) }
export function post(url, data, actionType) { buildRequest(request.post(url), data, actionType) }
