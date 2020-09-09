<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [kibana-plugin-core-public](./kibana-plugin-core-public.md) &gt; [OverlayBannersStart](./kibana-plugin-core-public.overlaybannersstart.md) &gt; [replace](./kibana-plugin-core-public.overlaybannersstart.replace.md)

## OverlayBannersStart.replace() method

Replace a banner in place

<b>Signature:</b>

```typescript
replace(id: string | undefined, mount: MountPoint, priority?: number): string;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  id | <code>string &#124; undefined</code> |  |
|  mount | <code>MountPoint</code> |  |
|  priority | <code>number</code> |  |

<b>Returns:</b>

`string`

a new identifier for the given banner to be used with [OverlayBannersStart.remove()](./kibana-plugin-core-public.overlaybannersstart.remove.md) and [OverlayBannersStart.replace()](./kibana-plugin-core-public.overlaybannersstart.replace.md)
