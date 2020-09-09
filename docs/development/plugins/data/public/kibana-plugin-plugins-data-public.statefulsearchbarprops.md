<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [kibana-plugin-plugins-data-public](./kibana-plugin-plugins-data-public.md) &gt; [StatefulSearchBarProps](./kibana-plugin-plugins-data-public.statefulsearchbarprops.md)

## StatefulSearchBarProps type

<b>Signature:</b>

```typescript
export declare type StatefulSearchBarProps = SearchBarOwnProps & {
    appName: string;
    useDefaultBehaviors?: boolean;
    savedQueryId?: string;
    onSavedQueryIdChange?: (savedQueryId?: string) => void;
};
```