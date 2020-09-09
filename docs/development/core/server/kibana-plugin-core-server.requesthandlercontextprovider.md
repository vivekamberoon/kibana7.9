<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [kibana-plugin-core-server](./kibana-plugin-core-server.md) &gt; [RequestHandlerContextProvider](./kibana-plugin-core-server.requesthandlercontextprovider.md)

## RequestHandlerContextProvider type

Context provider for request handler. Extends request context object with provided functionality or data.

<b>Signature:</b>

```typescript
export declare type RequestHandlerContextProvider<TContextName extends keyof RequestHandlerContext> = IContextProvider<RequestHandler<any, any, any>, TContextName>;
```