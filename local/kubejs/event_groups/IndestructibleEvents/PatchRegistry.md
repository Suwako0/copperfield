# IndestructibleEvents.PatchRegistry

## Basic info

- Valid script types: [SERVER]

- Has result? ✘

- Event class: JsMobPatchProviderEvent (third-party)

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| addHumanoidMobPatch | String, JsHumanoidMobPatchProviderBuilder |  | void | ✘ |
| addMobPatch | String, JsMobPatchProviderBuilder |  | void | ✘ |
| exit | Object |  | Object | ✘ |
| exit |  |  | Object | ✘ |
| cancel | Object |  | Object | ✘ |
| cancel |  |  | Object | ✘ |
| success | Object |  | Object | ✘ |
| success |  |  | Object | ✘ |


### Documented members:

- `void addHumanoidMobPatch(String entity_type, JsHumanoidMobPatchProviderBuilder builder)`

  Parameters:
  - entity_type: String- String, registry name of the entity type
  - builder: JsHumanoidMobPatchProviderBuilder- builder of Humanoid mob patch, call JsHumanoidMobPatchBuilder.builder() to get this builder, and call the method in it to define its properties

```
define the entity as EFM-like
```

- `void addMobPatch(String entity_type, JsMobPatchProviderBuilder builder)`

  Parameters:
  - entity_type: String- String, registry name of the entity type
  - builder: JsMobPatchProviderBuilder- builder of mob patch, call JsMobPatchBuilder.builder() to get this builder, and call the method in it to define its properties

```
define the entity as EFM-like
```

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
IndestructibleEvents.PatchRegistry((event) => {
	// This space (un)intentionally left blank
});
```

