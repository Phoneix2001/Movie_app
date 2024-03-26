class AppException implements Error {

    name: string;
    message: string;
    stack?: string | undefined;
    constructor(name: string, message: string, stack?: string | undefined) {
        this.message = message;
        this.name = name;
        this.stack = stack;
    }

    public toString(): string {
        return `${this.message}`;
    }
}

class FetchDataException extends AppException {
    constructor(name: string, message: string, stack?: string | undefined) {
      super(name,message,stack)
    }

}

class DefaultException extends AppException {
    constructor(name: string, message: string, stack?: string | undefined) {
        super(name,message,stack)
      }
}

class CancelException extends AppException {
    constructor(name: string, message: string, stack?: string | undefined) {
        super(name,message,stack)
      }
}

class BadRequestException extends AppException {
        constructor(name: string, message: string, stack?: string | undefined) {
        super(name,message,stack)
      }
}

class UnauthorisedException extends AppException {
    constructor(name: string, message: string, stack?: string | undefined) {
        super(name,message,stack)
      }
}

class InvalidInputException extends AppException {
    constructor(name: string, message: string, stack?: string | undefined) {
        super(name,message,stack)
      }
}

class UserSessionExpiredException extends AppException {
    constructor(name: string, message: string, stack?: string | undefined) {
        super(name,message,stack)
      }
}

class PageNotFoundException extends AppException {
    constructor(name: string, message: string, stack?: string | undefined) {
        super(name,message,stack)
      }
}

class InternalServerException extends AppException {
    constructor(name: string, message: string, stack?: string | undefined) {
        super(name,message,stack)
      }
}

