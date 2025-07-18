# ClientEvents.highPriorityAssets

## Basic info

- Valid script types: [CLIENT]

- Has result? ✘

- Event class: [GenerateClientAssetsEventJS](https://github.com/KubeJS-Mods/KubeJS/tree/2001/common/src/main/java/dev/latvian/mods/kubejs/client/GenerateClientAssetsEventJS.java)

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |
| generator | AssetJsonGenerator | ✘ |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| add | ResourceLocation, JsonElement |  | void | ✘ |
| stencil | ResourceLocation, String, JsonObject |  | void | ✘ |
| defaultItemModel | ResourceLocation |  | void | ✘ |
| defaultHandheldItemModel | ResourceLocation |  | void | ✘ |
| addMultipartBlockState | ResourceLocation, Consumer<MultipartBlockStateGenerator> |  | void | ✘ |
| addBlockState | ResourceLocation, Consumer<VariantBlockStateGenerator> |  | void | ✘ |
| addLang | String, String |  | void | ✘ |
| addModel | String, ResourceLocation, Consumer<ModelGenerator> |  | void | ✘ |
| exit | Object |  | Object | ✘ |
| exit |  |  | Object | ✘ |
| cancel | Object |  | Object | ✘ |
| cancel |  |  | Object | ✘ |
| success | Object |  | Object | ✘ |
| success |  |  | Object | ✘ |


### Documented members:

- `Object exit(Object var0)`

  Parameters:
  - var0: Object

```
Stops the event with the given exit value. Execution will be stopped **immediately**.

`exit` denotes a `default` outcome.
```

- `Object exit()`
```
Stops the event with default exit value. Execution will be stopped **immediately**.

`exit` denotes a `default` outcome.
```

- `Object cancel(Object var0)`

  Parameters:
  - var0: Object

```
Cancels the event with the given exit value. Execution will be stopped **immediately**.

`cancel` denotes a `false` outcome.
```

- `Object cancel()`
```
Cancels the event with default exit value. Execution will be stopped **immediately**.

`cancel` denotes a `false` outcome.
```

- `Object success(Object var0)`

  Parameters:
  - var0: Object

```
Stops the event with the given exit value. Execution will be stopped **immediately**.

`success` denotes a `true` outcome.
```

- `Object success()`
```
Stops the event with default exit value. Execution will be stopped **immediately**.

`success` denotes a `true` outcome.
```



### Example script:

```js
ClientEvents.highPriorityAssets((event) => {
	// This space (un)intentionally left blank
});
```

