class messages {
    OK={ message: ['It is oke']};
    RESOURCE_ALREADY_EXISTS = { errors: ['Resource already exists']};
    RESOURCE_NOT_FOUND = { errors: ['The resource was not found']};
    SUCCESSFUL_UPDATE = { message: ['The resource was successfully updated']}
    INTERNAL_SERVER_ERROR = { message: ['Something went wrong']};
    BAD_REQUEST = {message: ['']};
}

module.exports = new messages();