import { MissingParamsError } from '../error/missingParams'
import { BadRequest } from '../helpers/http-helper'
import { Controller } from '../protocols/controller'
import { httpRequest, httpResponse } from '../protocols/http'

export class SignUpController implements Controller {
  handle (httpRequest: httpRequest): httpResponse {
    const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']

    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return BadRequest(new MissingParamsError(field))
      }
    }

    return {
      statusCode: 200
    }
  }
}
