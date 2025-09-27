# @fcjs/example

<p align="center">
  <img src="https://raw.githubusercontent.com/Bhagyaraj-B-K/fcjs-core/HEAD/FCJs-logo.png" alt="FCJs Logo" width="100%" />
</p>

### An Example project to showcase the First-class Js Framework

## Feature examples

- **Express Route Decorators**:
  - [**_Loading Routes_**](src/routes/index.ts#L21)
  - [**_@Route_**](src/modules/user/user.controller.ts#L22)
  - [**_API Decorators (Method Decorators, @QueryDto, @BodyDto, @ResponseDto)_**](src/modules/user/user.controller.ts#L26)
- **DTO Validation**: Validate request bodies and query parameters with Zod schemas.
  - [**_DTO standard_**](src/modules/user/data-transfer-objects/user.dto.ts)
  - [**_OpenAPI metadata_**](src/modules/user/data-transfer-objects/user.dto.ts#L9)
- **OpenAPI Generation**:
  - [**_OpenAPI_**](src/routes/index.ts#L17)
- **Middleware Decorators**:
  - [**_Middleware Definition_**](src/middlewares/auth.middleware.ts)
  - [**_@Middleware_**](src/modules/user/user.controller.ts#L43)
- **WebSocket Decorators**:
  - [**_Loading WSRoutes_**](src/routes/index.ts#L29)
  - [**_@WsRoute_**](src/modules/chat/chat.ws-controller.ts#L3)
  - [**_@WsMessage_**](src/modules/chat/chat.ws-controller.ts#L5)
- **Typed Error Handling**:
  - [**_NotFoundError_**](src/modules/user/services/user.service.ts#L31)
  - [**_UnauthorizedError_**](src/middlewares/auth.middleware.ts#L14)
  - Refer [**_@fcjs/core/utils/exceptions_**](https://github.com/Bhagyaraj-B-K/fcjs-core/blob/main/src/utils/exceptions.util.ts) for more exceptions.
- **Utility Classes**:
  - [**_Logger_**](src/server.ts#L16)
  - [**_Typecast_**](src/modules/user/user.controller.ts#L30)

---
