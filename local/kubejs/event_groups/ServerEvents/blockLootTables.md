# ServerEvents.blockLootTables

## Basic info

- Valid script types: [SERVER]

- Has result? ✘

- Event class: [BlockLootEventJS](https://github.com/KubeJS-Mods/KubeJS/tree/2001/common/src/main/java/dev/latvian/mods/kubejs/loot/BlockLootEventJS.java)

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| modifyBlock | BlockStatePredicate, Consumer<LootBuilder> |  | void | ✘ |
| addSimpleBlock | BlockStatePredicate, ItemStack |  | void | ✘ |
| addSimpleBlock | BlockStatePredicate |  | void | ✘ |
| getType |  |  | String | ✘ |
| build | BlockStatePredicate, Consumer<LootBuilder> |  | void | ✘ |
| addBlock | BlockStatePredicate, Consumer<LootBuilder> |  | void | ✘ |
| getDirectory |  |  | String | ✘ |
| removeAll |  |  | void | ✘ |
| addJson | ResourceLocation, JsonObject |  | void | ✘ |
| modify | ResourceLocation, Consumer<LootBuilder> |  | void | ✘ |
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
ServerEvents.blockLootTables((event) => {
	// This space (un)intentionally left blank
});
```

