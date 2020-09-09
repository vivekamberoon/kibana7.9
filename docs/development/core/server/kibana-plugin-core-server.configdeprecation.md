<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [kibana-plugin-core-server](./kibana-plugin-core-server.md) &gt; [ConfigDeprecation](./kibana-plugin-core-server.configdeprecation.md)

## ConfigDeprecation type

Configuration deprecation returned from [ConfigDeprecationProvider](./kibana-plugin-core-server.configdeprecationprovider.md) that handles a single deprecation from the configuration.

<b>Signature:</b>

```typescript
export declare type ConfigDeprecation = (config: Record<string, any>, fromPath: string, logger: ConfigDeprecationLogger) => Record<string, any>;
```

## Remarks

This should only be manually implemented if [ConfigDeprecationFactory](./kibana-plugin-core-server.configdeprecationfactory.md) does not provide the proper helpers for a specific deprecation need.
