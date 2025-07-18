# WorldgenEvents.remove

## Basic info

- Valid script types: [STARTUP]

- Has result? ✘

- Event class: [RemoveWorldgenEventJS](https://github.com/KubeJS-Mods/KubeJS/tree/2001/common/src/main/java/dev/latvian/mods/kubejs/level/gen/RemoveWorldgenEventJS.java)

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| removeFeatureById | GenerationStep$Decoration, ResourceLocation[] |  | void | ✘ |
| removeFeatureById | BiomeFilter, GenerationStep$Decoration, ResourceLocation[] |  | void | ✘ |
| removeSpawns | Consumer<RemoveSpawnsProperties> |  | void | ✘ |
| removeAllSpawns |  |  | void | ✘ |
| removeAllFeatures | BiomeFilter, GenerationStep$Decoration |  | void | ✘ |
| removeAllFeatures | BiomeFilter |  | void | ✘ |
| removeAllFeatures |  |  | void | ✘ |
| printFiltered |  |  | void | ✘ |
| printFiltered | GenerationStep$Decoration, BiomeFilter |  | void | ✘ |
| printFiltered | GenerationStep$Decoration |  | void | ✘ |
| printSpawns | MobCategory |  | void | ✘ |
| printSpawns |  |  | void | ✘ |
| printFeatures |  |  | void | ✘ |
| printFeatures | GenerationStep$Decoration |  | void | ✘ |
| printFeatures | GenerationStep$Decoration, BiomeFilter |  | void | ✘ |
| removeOres | Consumer<RemoveOresProperties> |  | void | ✘ |
| printFeaturesForType | GenerationStep$Decoration, BiomeFilter, boolean |  | void | ✘ |
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
WorldgenEvents.remove((event) => {
	// This space (un)intentionally left blank
});
```

