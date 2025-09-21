# @fcjs/example

<p align="center">
  <img src="https://raw.githubusercontent.com/Bhagyaraj-B-K/fcjs-core/HEAD/FCJs-logo.png" alt="FCJs Logo" width="100%" />
</p>

### An Example project to showcase the First-class Js Framework

## Feature examples

- **Express Route Decorators**:
    - [***Loading Routes***](src/routes/index.ts#L21)
    - [***@Route***](src/modules/user/user.controller.ts#L22)
    - [***API Decorators (Method Decorators, @QueryDto, @BodyDto, @ResponseDto)***](src/modules/user/user.controller.ts#L26)
- **DTO Validation**: Validate request bodies and query parameters with Zod schemas.
    - [***DTO standard***](src/modules/user/data-transfer-objects/user.dto.ts)
    - [***OpenAPI metadata***](src/modules/user/data-transfer-objects/user.dto.ts#L9)
- **OpenAPI Generation**:
    - [***OpenAPI***](src/routes/index.ts#L17)
- **Middleware Decorators**:
    - [***Middleware Definition***](src/middlewares/auth.middleware.ts)
    - [***@Middleware***](src/modules/user/user.controller.ts#L43)
- **WebSocket Decorators**:
    - [***Loading WSRoutes***](src/routes/index.ts#L29)
    - [***@WsRoute***](src/modules/chat/chat.ws-controller.ts#L3)
    - [***@WsMessage***](src/modules/chat/chat.ws-controller.ts#L5)
- **Typed Error Handling**:
    - [***NotFoundError***](src/modules/user/services/user.service.ts#L31)
    - [***UnauthorizedError***](src/middlewares/auth.middleware.ts#L14)
    - Refer [***@fcjs/core/utils/exceptions***](https://github.com/Bhagyaraj-B-K/fcjs-core/blob/main/src/utils/exceptions.util.ts) for more exceptions.
- **Utility Classes**:
    - [***Logger***](src/server.ts#L16)
    - [***Typecast***](src/modules/user/user.controller.ts#L30)
 
---
