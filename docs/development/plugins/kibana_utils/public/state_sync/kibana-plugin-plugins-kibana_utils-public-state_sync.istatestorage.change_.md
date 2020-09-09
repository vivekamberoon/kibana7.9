<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [kibana-plugin-plugins-kibana\_utils-public-state\_sync](./kibana-plugin-plugins-kibana_utils-public-state_sync.md) &gt; [IStateStorage](./kibana-plugin-plugins-kibana_utils-public-state_sync.istatestorage.md) &gt; [change$](./kibana-plugin-plugins-kibana_utils-public-state_sync.istatestorage.change_.md)

## IStateStorage.change$ property

Should notify when the stored state has changed

<b>Signature:</b>

```typescript
change$?: <State = unknown>(key: string) => Observable<State | null>;
```